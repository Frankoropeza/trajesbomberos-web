import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import {
  addMonths,
  calculatePiece,
  statusForRetirement,
} from '../src/lib/calculadora.js';

assert.equal(addMonths('2016-10', 120), '2026-10');
assert.equal(statusForRetirement('2026-10', '2026-10'), 'Retirar');
assert.equal(statusForRetirement('2026-11', '2026-10'), 'Planear reemplazo');
assert.equal(statusForRetirement('2027-11', '2026-10'), 'Vigente');

const result = calculatePiece({
  manufacturedAt: '2016-10',
  advancedInspectionAt: '2026-01',
  advancedCleaningAt: '2026-04',
}, '2026-10');

assert.equal(result.retirementAt, '2026-10');
assert.equal(result.status, 'Retirar');
assert.equal(result.nextInspectionAt, '2027-01');
assert.equal(result.nextCleaningAt, '2026-10');

const overdueServices = calculatePiece({
  manufacturedAt: '2020-01',
  advancedInspectionAt: '2025-01',
  advancedCleaningAt: '2026-03',
}, '2026-10');

assert.equal(overdueServices.nextInspectionAt, '2026-01');
assert.equal(overdueServices.nextCleaningAt, '2026-09');
assert.equal(overdueServices.inspectionOverdue, true);
assert.equal(overdueServices.cleaningOverdue, true);
assert.equal(overdueServices.overdueServiceCount, 2);

const servicesDueThisMonth = calculatePiece({
  manufacturedAt: '2020-01',
  advancedInspectionAt: '2025-10',
  advancedCleaningAt: '2026-04',
}, '2026-10');

assert.equal(servicesDueThisMonth.inspectionOverdue, false);
assert.equal(servicesDueThisMonth.cleaningOverdue, false);
assert.equal(servicesDueThisMonth.overdueServiceCount, 0);

const withoutRecords = calculatePiece({ manufacturedAt: '2020-01' }, '2026-10');
assert.equal(withoutRecords.nextInspectionAt, null);
assert.equal(withoutRecords.nextCleaningAt, null);

const pageSource = readFileSync(new URL('../src/pages/calculadora-vida-util-equipo-de-bombero.astro', import.meta.url), 'utf8');
assert.match(pageSource, /Publicado: octubre de 2026/);
assert.match(pageSource, /Cómo usar la calculadora en 4 pasos/);
assert.match(pageSource, /Qué hacer con cada resultado/);
assert.match(pageSource, /calculadora-vida-util-equipo-de-bombero\.jpg/);

const seoSource = readFileSync(new URL('../src/lib/seo.ts', import.meta.url), 'utf8');
assert.match(seoSource, /datePublished: input\.webApplication\.datePublished/);
assert.match(seoSource, /citation: input\.webApplication\.citation/);

console.log('Calculadora: 24 pruebas aprobadas.');
