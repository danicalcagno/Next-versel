
import Head from '../../node_modules/next/head';
import { FC } from 'react';
import { NavBar } from '../NavBar';
import styles from './MainLayout.module.css'

type Props = {
  children?: React.ReactNode
};

const MainLayout: FC<Props> = ({children}) => {
    return (
        <div className={styles.container}>
          
          {/* Head es un componente */}
          <Head>
            <title>Next App</title>
            <meta name="description" content="Home next app" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <NavBar/>
          <main className={styles.main}>
                {children}
          </main>
        </div>
      )
}

export default MainLayout
