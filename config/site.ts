// SSoT del sitio — todo dato de negocio vive aquí.
// TODO(Frank): completar teléfono, WhatsApp, email y dirección reales.
export const SITE = {
  name: 'TrajesBombero',
  legalName: 'TrajesBombero México',
  url: 'https://trajesbombero.com',
  title: 'Trajes y Equipo para Bomberos en México | TrajesBombero',
  description:
    'Venta de trajes estructurales, forestales y de aproximación, botas, cascos y equipo de protección para bomberos con certificación NFPA. Envíos a todo México.',
  locale: 'es_MX',
  lang: 'es',
  telefono: '',        // p.ej. '+52 55 0000 0000'
  whatsapp: '',        // p.ej. '525500000000' (solo dígitos)
  email: '',           // p.ej. 'ventas@trajesbombero.com'
  direccion: {
    ciudad: '',
    estado: '',
    pais: 'MX',
  },
  horario: 'Lun–Vie 9:00–18:00',
  cobertura: 'Todo México',
  redes: {
    facebook: '',
    instagram: '',
  },
} as const;

export const NAV = [
  { label: 'Inicio', href: '/' },
  { label: 'Productos', href: '/productos/' },
  { label: 'Nosotros', href: '/nosotros/' },
  { label: 'Contacto', href: '/contacto/' },
] as const;
