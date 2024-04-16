import { Aside } from '@/Componentes/Asides';
import './globals.css'

export const metadata = {
  title: "Code connect",
  description: "Uma rede social para devs!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <div className='app-container'>
          <Aside />
          {children}
        </div>

      </body>
    </html>
  );
}
