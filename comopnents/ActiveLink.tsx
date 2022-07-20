//COMPONENTE QUE ME PERMITE DARLE ESTILOS Y FUNCIONALIDAD A CADA ITEM DEL NAVBAR
import { CSSProperties, FC } from 'react';
import Link from "../node_modules/next/link";
import { useRouter } from "../node_modules/next/router";

const style: CSSProperties={
    color:'#0070f3',
    borderRadius: '2px'
}

interface Props{
  text: string;
  href: string;
}

const ActiveLink: FC <Props> = ({text, href}) => {
    
  const {asPath} = useRouter();
    
  return (
    <Link href={href}>
        <a style={asPath === href ? style : undefined}>{text}</a>
    </Link>
  )
}

export default ActiveLink