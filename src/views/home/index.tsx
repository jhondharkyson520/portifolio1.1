import { Description } from '../description';
import { Skills } from '../skills';
import { About } from '../about';
import { Projects } from '../projects';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


export function Home() { 

  useEffect(()=>{
      AOS.init();    
  },[]);
  return (
    <div className='w-full flex-col mx-auto  mt-10 mb-10 sm:mt-20' style={{scrollBehavior: 'smooth'}}>
      <Description/>
      <Skills/>      
      <Projects/>
      <About/>    
    </div>
  );
}
