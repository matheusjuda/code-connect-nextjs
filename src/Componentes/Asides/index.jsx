import Image from 'next/image'
import styles from './aside.module.css'
import logo from './logo.png'

export const Aside = () => {
    return (
        <aside className={styles.aside}>
            {/* Componente Imge do Next.js */}
            <Image src={logo} alt="Logo da Code Connect" />
        </aside>
    )
}