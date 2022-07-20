//import styles from '../styles/globals.css'
import Link from '../node_modules/next/link'
import MainLayout from '../comopnents/layouts/MainLayout'

export default function about () {
    return (
      <MainLayout>
            <h1>Contact</h1>
            <h1 className={'title'}>
            Ir a <Link href="/">Home</Link>
            </h1>
    
            <p className={'description'}>
              Get started by editing{' '}
              <code className={'code'}>pages/about.jsx</code>
            </p>
      </MainLayout>
      )            
}
