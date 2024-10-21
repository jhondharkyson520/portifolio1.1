import { Outlet } from 'react-router-dom'
import { Header } from '../Header'
import { Footer } from '../Footer'
import imgBg from '../../assets/bgHero.svg';
import imgLine02 from '../../assets/Lines/Line02.svg';

export function Layout(){
    return(
        <>
            <Header/>   
            <Outlet/>            
            <Footer/>
        </>
    )
}
