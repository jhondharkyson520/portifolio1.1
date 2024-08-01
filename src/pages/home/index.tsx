import { Description } from '../description';
import { Skills } from '../skills';
import { Projects } from '../projects';
import { About } from '../about';
import { Projects02 } from '../projects02';
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
      <Projects02/>
      <About/>    
    </div>
  );
}
