import { Description } from '../description';
import { Skills } from '../skills';
import { Projects } from '../projects';

export function Home() { 

  return (
    <div className='w-full flex-col mx-auto px-4 mt-10 mb-10 sm:mt-20' style={{scrollBehavior: 'smooth'}}>
      <Description/>
      <Skills/>
      <Projects/>    
    </div>
  );
}
