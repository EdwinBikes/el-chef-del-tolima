import React from 'react';

/* --- WhatsApp: Chat / Mensajería --- */
export const WhatsAppIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.25 12c0 5.385 4.365 9.75 9.75 9.75 1.71 0 3.318-.43 4.72-1.19l3.53.94-.94-3.53A9.716 9.716 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8.25 9.75c0 1.946 1.554 3.5 3.5 3.5M11.75 13.25c1.946 0 3.5-1.554 3.5-3.5"
    />
  </svg>
);

/* --- Ubicación --- */
export const MapPinIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
  </svg>
);

/* --- Teléfono / Llamar --- */
export const PhoneIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M16.5 3.75h2.25m0 0v2.25m0-2.25l-6 6m-1.06 8.53a11.96 11.96 0 01-5.94-5.94c-.162-.441.004-.928.38-1.21l1.29-.97c.36-.27.53-.73.42-1.17L6.96 3.10A1.12 1.12 0 005.87 2.25H4.5A2.25 2.25 0 002.25 4.5c0 8.28 6.72 15 15 15a2.25 2.25 0 002.25-2.25v-1.37a1.12 1.12 0 00-.85-1.09L18 14.70"
    />
  </svg>
);

/* --- Horario / Tiempo --- */
export const ClockIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6.75 3.75h10.5m-10.5 0A3 3 0 003.75 6.75v10.5A3 3 0 006.75 20.25h10.5A3 3 0 0020.25 17.25V6.75A3 3 0 0017.25 3.75m-10.5 0V6m10.5-2.25V6m-5.25 4.5v4.5m0-4.5h3"
    />
  </svg>
);
