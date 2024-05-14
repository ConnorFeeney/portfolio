import NorthPNDLogo from '../assets/northpnd.jpg'

function ExperienceDisplay(){
    return(
        <div className="relative border-2 border-slate-700 rounded-2xl bg-zinc-900 flex justify-center items-center flex-wrap m-6">
            <h1 className="w-[95%] font-bold text-3xl mt-4 text-zinc-50 flex"><span class="material-symbols-outlined mx-5 text-3xl align-bottom leading-[2rem]">hub</span><span className="align-text-middle">Work Experience</span></h1>
            <ul className="w-[95%] pt-3 pb-3">
                <li className='w-full my-3 mx-2'>
                    <div className='flex items-center'>
                        <img className='w-[3.5rem] rounded-full overflow-hidden' src={NorthPNDLogo}></img>
                        <div className='w-full'>
                            <a href='https://www.northpnd.com/' className='block mx-5 text-blue-500 font-semibold hover:underline'>North P&D</a>
                            <p className='inline float-left mx-5 text-zinc-50'>Developer</p>
                            <p className='inline float-right mx-5 text-zinc-400'>Feb 2024 - Present</p>
                        </div>
                    </div>
                </li>
            </ul>
            <button className='w-[95%] py-1 my-4 bg-blue-600 rounded-2xl font-bold transition duration-300 hover:bg-blue-500 align-top active:bg-blue-700'>Download Resume<span className="material-symbols-outlined mx-1 align-bottom leading-[1.5rem]">download</span></button>
        </div>
    )
}

export default ExperienceDisplay