import IconGallery from "../../components/IconsGalerryHome";

export function Skills(){
    return(
        <div className='flex-col sm:mt-10 w-full mt-10 items-center text-center justify-center' id='skills'>
          <p className='text-xl'>
            🚀 Minhas principais habilidades são:
          </p>
          <IconGallery />
        </div>
    )
}