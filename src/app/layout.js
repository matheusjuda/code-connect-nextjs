import { Prompt } from 'next/font/google'

import { Aside } from '@/Componentes/Asides';
import './globals.css'

export const metadata = {
  title: "Code connect",
  description: "Uma rede social para devs!",
};


const prompt = Prompt({
  // Pesos das fontes (documentação)
  weight: ['400', '600'],
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" className={prompt.className}>
      <body>
        <div className='app-container'>
          <div>
            <Aside />
          </div>
          <div className='main-content'>
            {children}
          </div>
        </div >

      </body>
    </html>
  );
}
