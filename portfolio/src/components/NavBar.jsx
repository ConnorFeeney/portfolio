import WhistlerImg from '../assets/Whistler.jpg'

function NavBar(){
    return(
        <div className="py-1 flex flex-nowrap bg-zinc-900 m-auto mt-8 border-2 border-zinc-700 rounded-full justify-center items-center w-max sm:px-19 px-5">
            <button className='px-1 py-1 text-zinc-50 font-semibold rounded-full transition duration-300 hover:bg-zinc-700'><img className='sm:w-[2.2rem] w-[2.3rem] rounded-full' src={WhistlerImg}/></button>
            <button className='px-3 mx-1 py-2 text-zinc-50 font-semibold rounded-full transition duration-300 hover:bg-zinc-700'>Projects</button>
            <button className='px-3 mx-1 py-2 text-zinc-50 font-semibold rounded-full transition duration-300 hover:bg-zinc-700'>Contact Me</button>
        </div>
    )
}

export default NavBar