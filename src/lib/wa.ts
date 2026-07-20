import { CONTACT } from '@config/site';

// Regla D4: el enlace de WhatsApp NUNCA se escribe a mano.
// Se genera aquí, tomando el número desde CONTACT.whatsapp (SSoT).
export function waUrl(message: string): string {
  return `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(message)}`;
}
