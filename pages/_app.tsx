import '../styles/globals.css'
import { JSXElementConstructor, ReactElement, ReactNode } from 'react';
import { NextPage } from 'next';
import {AppProps} from 'next/app';

type NextPageWithLayout=NextPage & {
  getLayout?:(page:ReactElement)=>ReactNode;
}
type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}


function MyApp({ Component, pageProps }: AppPropsWithLayout) {
   // Usa el  layout definido en la pagina so es que esta disponible
  const getLayout = Component.getLayout || ((page: JSX.Element)=>page);

  return getLayout(<Component {...pageProps} />)
}

export default MyApp
