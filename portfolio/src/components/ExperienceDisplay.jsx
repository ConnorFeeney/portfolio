import NorthPNDLogo from '../assets/northpnd.jpg'
import theSignLogo from '../assets/theSignLogo.png'

function ExperienceDisplay(){
    const scrollToElement = (elementID) => {
        const element = document.getElementById(elementID);
        if(element){
            window.scrollTo({
                top: element.offsetTop - 5,
                behavior: 'smooth'
            });
        }
    };

    return(
        <div className="relative border-2 border-slate-700 rounded-2xl bg-zinc-900 flex justify-center items-center flex-wrap m-6">
            <h1 className="w-[95%] font-bold text-3xl mt-4 text-zinc-50 flex"><span className="material-symbols-outlined mx-5 text-3xl align-bottom leading-[2rem]">hub</span><span className="align-text-middle">Work Experience</span></h1>
            <ul className="w-[95%] pt-3 pb-3">
                <li className='w-full mb-3 mt-6 mx-2'>
                    <div className='flex items-center'>
                        <img className='w-[3.5rem] rounded-full overflow-hidden' src={NorthPNDLogo}></img>
                        <div className='w-full'>
                            <a href='https://www.northpnd.com/' className='block mx-5 text-blue-500 font-semibold hover:underline'>North P&D - Internship</a>
                            <p className='inline float-left mx-5 text-zinc-50'>Developer</p>
                            <p className='inline float-right mx-5 text-zinc-400'>Feb 2024 - Present</p>
                        </div>
                    </div>
                    <div className='w-[97%] border-b-2 border-slate-700 mt-8 mb-0'></div>
                </li>
                <li className='w-full mb-3 mt-6 mx-2'>
                    <div className='flex items-center'>
                        <img className='w-[3.5rem] rounded-full overflow-hidden' src={theSignLogo}></img>
                        <div className='w-full'>
                            <a href='https://thesigntoronto.com/' className='block mx-5 text-blue-500 font-semibold hover:underline'>Sign Of The Skier</a>
                            <p className='inline float-left mx-5 text-zinc-50'>Retail</p>
                            <p className='inline float-right mx-5 text-zinc-400'>Oct 2022 - Mar 2024</p>
                        </div>
                    </div>
                    <div className='w-[97%] border-b-2 border-slate-700 mt-8 mb-0'></div>
                </li>
            </ul>
            <button onClick={() => scrollToElement('Resume')} className='w-[95%] py-1 my-4 bg-blue-600 rounded-2xl font-bold transition duration-300 hover:bg-blue-500 align-top active:bg-blue-700'>Veiw Full Resume</button>
        </div>
    )
}

export default ExperienceDisplay