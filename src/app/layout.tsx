import type { Metadata } from 'next';
import '@fontsource-variable/inter';
import '@fontsource-variable/space-grotesk';
import './globals.css';

export const metadata: Metadata = {
  title: 'Uriel Capdevila | Desarrollo web y datos',
  description:
    'Desarrollo plataformas web, productos SaaS y soluciones de datos orientadas a resultados de negocio.',
  applicationName: 'Portfolio de Uriel Capdevila',
  authors: [{ name: 'Uriel Capdevila' }],
  category: 'technology',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark scroll-smooth">
      <body className="font-body antialiased">
        {children}
      </body>
    </html>
  );
}
