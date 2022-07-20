//
import Link from '../node_modules/next/link';
import DarkLayout from '../comopnents/layouts/DarkLayout'
import MainLayout from '../comopnents/layouts/MainLayout'
import { ReactNode } from 'react';

export default function about () {
    return (
      <>
            <h1>About</h1>
            <h1 className={'title'}>
            Ir a <Link href="/">Home</Link>
            </h1>

            <p className={'description'}>
              Get started by editing{' '}
              <code className={'code'}>pages/about.jsx</code>
            </p>
      </>
      )    
    }      
      about.getLayout = function getLayout (page: ReactNode){
        return(
          <MainLayout>
          <DarkLayout>
            {page}
          </DarkLayout>
        </MainLayout>    

      )
    }

