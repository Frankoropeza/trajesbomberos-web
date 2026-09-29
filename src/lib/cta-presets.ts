// ============================================================
// Presets de CTA. Los enlaces de WhatsApp se arman con waUrl()
// desde CONTACT.whatsapp (regla D4: cero hardcoding del número).
// Botones tipados por icono para que el banner sea data-driven.
// ============================================================
import { CONTACT, WA_MESSAGES } from '@config/site';
import { waUrl } from '@lib/wa';

export type CtaIcon = 'wa' | 'arrow' | 'phone' | 'catalog' | 'info' | 'quote';

export interface CtaButton {
  label: string;
  href: string;
  icon?: CtaIcon;
  primary?: boolean;
  external?: boolean;
}

export interface CtaPreset {
  title: string;
  text?: string;
  buttons: CtaButton[];
}

// Cierre general — home y landings
export const PRESET_GENERAL: CtaPreset = {
  title: '¿Listo para equipar a tu gente?',
  text: 'Dinos qué operación cubres y cuántos elementos vas a equipar. Te preparamos la cotización con ficha técnica, sin compromiso.',
  buttons: [
    { label: 'Cotizar trajes para bomberos por WhatsApp', href: waUrl(WA_MESSAGES.cotizar), icon: 'wa', primary: true, external: true },
    { label: 'Familias de trajes para bomberos', href: '/trajes/', icon: 'catalog' },
    { label: 'Blog técnico de trajes de bombero', href: '/blog/', icon: 'info' },
  ],
};

// Cierre de una ficha de familia (L3)
export function presetCategoria(nombre: string): CtaPreset {
  return {
    title: `Cotiza ${nombre.toLowerCase()} con ficha técnica`,
    text: 'Te mandamos por escrito el composite, la norma y las condiciones de entrega. Si resulta que necesitas otra familia, también te lo decimos.',
    buttons: [
      { label: `Cotizar ${nombre.toLowerCase()}`, href: waUrl(WA_MESSAGES.categoria(nombre)), icon: 'wa', primary: true, external: true },
      { label: 'Comparar trajes de bombero', href: '/trajes/', icon: 'arrow' },
      { label: 'Guías de trajes para bomberos', href: '/blog/', icon: 'info' },
    ],
  };
}

// Cierre de contacto — para páginas de sección
export const PRESET_CONTACTO: CtaPreset = {
  title: '¿Prefieres que te llamemos o te marcamos nosotros?',
  text: 'Atendemos de lunes a viernes. Si tu compra es por licitación, pide el expediente completo: ficha técnica, certificado y carta de distribuidor.',
  buttons: [
    { label: 'Consultar equipo para bomberos por WhatsApp', href: waUrl(WA_MESSAGES.informacion), icon: 'wa', primary: true, external: true },
    { label: CONTACT.telefono, href: `tel:${CONTACT.telefonoHref}`, icon: 'phone' },
    { label: 'Blog técnico de trajes de bombero', href: '/blog/', icon: 'info' },
  ],
};

// Cierre para compras de gobierno
export const PRESET_LICITACION: CtaPreset = {
  title: 'Expediente completo para tu licitación',
  text: 'Ficha técnica en formato de pliego, certificado de laboratorio, carta de distribuidor y CFDI 4.0. Asistimos a junta de aclaraciones.',
  buttons: [
    { label: 'Pedir expediente de licitación', href: waUrl(WA_MESSAGES.licitacion), icon: 'quote', primary: true, external: true },
    { label: 'Normas para trajes de bombero', href: '/blog/categoria/normas/', icon: 'info' },
    { label: 'Guías para licitar trajes de bomberos', href: '/blog/categoria/licitacion/', icon: 'quote' },
  ],
};
