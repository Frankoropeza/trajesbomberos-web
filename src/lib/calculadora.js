export function isMonth(value) {
  return /^\d{4}-(0[1-9]|1[0-2])$/.test(value ?? '');
}

export function addMonths(value, months) {
  if (!isMonth(value)) return null;
  const [year, month] = value.split('-').map(Number);
  const absoluteMonth = year * 12 + month - 1 + months;
  const nextYear = Math.floor(absoluteMonth / 12);
  const nextMonth = (absoluteMonth % 12) + 1;
  return `${nextYear}-${String(nextMonth).padStart(2, '0')}`;
}

export function monthsBetween(from, to) {
  if (!isMonth(from) || !isMonth(to)) return null;
  const [fromYear, fromMonth] = from.split('-').map(Number);
  const [toYear, toMonth] = to.split('-').map(Number);
  return (toYear - fromYear) * 12 + toMonth - fromMonth;
}

export function statusForRetirement(retirementAt, currentMonth) {
  const remaining = monthsBetween(currentMonth, retirementAt);
  if (remaining === null || remaining <= 0) return 'Retirar';
  if (remaining <= 12) return 'Planear reemplazo';
  return 'Vigente';
}

export function isOverdue(dueAt, currentMonth) {
  const elapsedMonths = monthsBetween(dueAt, currentMonth);
  return elapsedMonths !== null && elapsedMonths > 0;
}

export function calculatePiece(piece, currentMonth) {
  const retirementAt = addMonths(piece.manufacturedAt, 120);
  const nextInspectionAt = addMonths(piece.advancedInspectionAt, 12);
  const nextCleaningAt = addMonths(piece.advancedCleaningAt, 6);
  const inspectionOverdue = isOverdue(nextInspectionAt, currentMonth);
  const cleaningOverdue = isOverdue(nextCleaningAt, currentMonth);
  return {
    retirementAt,
    monthsRemaining: retirementAt ? monthsBetween(currentMonth, retirementAt) : null,
    status: retirementAt ? statusForRetirement(retirementAt, currentMonth) : null,
    nextInspectionAt,
    nextCleaningAt,
    inspectionOverdue,
    cleaningOverdue,
    overdueServiceCount: Number(inspectionOverdue) + Number(cleaningOverdue),
  };
}
