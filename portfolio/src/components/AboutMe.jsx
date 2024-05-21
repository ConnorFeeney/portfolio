import TypeWriter from './TypeWriter'
import ParticlesBg from 'particles-bg'

import ProggramingImg from '../assets/Proggraming.jpg'
import WhistlerImg from '../assets/Whistler.jpg'

function AboutMe(){
    return(
        <div className='relative'>
            <div className='mx-10 sm:mx-16 pt-6 pb-0'>
                    <h1 className='text-emerald-300 font-semibold text-5xl'>Hi, My Name Is</h1>
                    <div className='text-emerald-500 md:text-8xl text-6xl font-extrabold min-h-[10.5rem] pt-1 pb-8 md:min-h-[6rem]'><TypeWriter text="Connor Feeney."/></div> 
            </div>

            <div className='grid auto-fit-[350px] justify-items-center justify-center pb-6'>
                <p className='text-zinc-50 text-[1.08rem] sm:ml-20 sm:mr-0 pb-10 mx-10'>
                    At Lawrence Park CI, I'm a grade 11 student leading the charge in our robotics club's programming. As the head programmer, I code innovative 
                    solutions in Java, pushing our robots to conquer competition challenges. My coding skills extend beyond robots. At North PnD as a developer intern, 
                    I explored web development using React and Tailwind, building sleek websites. This broadened my programming horizons, showing how different 
                    areas work together. I love Coding, but balance is key. When I'm not glued to the screen, you'll find me carving down mountains on skis 
                    or out on my skateboard.
                </p>
                <img className='w-64 sm:w-72 rounded-xl shadow-[15px_15px_0px_0px_rgba(16,185,129,0.75)]' src={WhistlerImg}/>
            </div>
            <span className='sm:text-[2.75rem] text-[3rem] text-zinc-300 inline mx-10 sm:mx-16'>
                <a className='transition duration-300 hover:text-zinc-400'><i className="fa-brands fa-square-github pr-6"></i></a>
                <a className='transition duration-300 hover:text-zinc-400'><i className="fa-brands fa-linkedin pr-6"></i></a>
            </span>
            
            
            <div className='w-[95%] border-b-2 border-neutral-500 m-auto'/>

            <div className='flex flex-nowrap gap-8 sm:gap-12 translate-x-[-15%] py-10'>
                <div className='relative flex-none sm:w-72 rotate-[-8deg]'>
                    <img className='w-40 sm:w-72 rounded-xl' src={WhistlerImg}/>
                </div>
                <div className='relative flex-none rotate-[-6deg] '>
                    <img className='w-40 sm:w-72 rounded-xl' src={WhistlerImg}/>
                </div>
                <div className='relative flex-none rotate-[4deg]'>
                    <img className='w-40 sm:w-72 rounded-xl' src={WhistlerImg}/>
                </div>
                <div className='relative flex-none rotate-[-8deg]'>
                    <img className='w-40 sm:w-72 rounded-xl' src={WhistlerImg}/>
                </div>
                <div className='relative flex-none rotate-[-12deg]'>
                    <img className='w-40 sm:w-72 rounded-xl' src={WhistlerImg}/>
                </div>
            </div>
            
        </div>
    )
}

export default AboutMe