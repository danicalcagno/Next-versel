import Head from '../node_modules/next/head';
import Image from '../node_modules/next/image';
//import styles from '../styles/globals.css'
import Link from '../node_modules/next/link';
import MainLayout from '../comopnents/layouts/MainLayout';

export default function Home() {
  return (
    <MainLayout>
      <h1>Home</h1>
      <h1 className={'title'}>
        {/* Ir a <a href="/about">About</a> */}
        Ir a <Link href="/about">About</Link><br/>
        Ir a <Link href="/contact">Contact Us</Link><br/>
        Ir a <Link href="/pricing">Pricing</Link>
      </h1>

      <p className={'description'}>
        Get started by editing{' '}
        <code className={'code'}>pages/index.jsx</code>
      </p>      
    </MainLayout>
  )
  
}
