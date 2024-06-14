import portfolioIMG from '../assets/PortfolioPhoto.jpg'

function NavBar(){
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
        <div className="fixed z-10 top-0 left-[50%] translate-x-[-50%] py-1 flex flex-nowrap bg-zinc-900 m-auto mt-8 border-2 border-zinc-700 rounded-full justify-center items-center w-max sm:px-19 px-5">
            <button onClick={() => scrollToElement('Home')} className='px-1 py-1 text-zinc-50 font-semibold rounded-full transition duration-300 hover:bg-zinc-700'><img className='sm:w-[2.2rem] w-[2.3rem] rounded-full' src={portfolioIMG}/></button>
            <button onClick={() => scrollToElement('Projects')} className='px-3 mx-1 py-2 text-zinc-50 font-semibold rounded-full transition duration-300 hover:bg-zinc-700'>Projects</button>
            <button onClick={() => scrollToElement('Coop')} className='px-3 mx-1 py-2 text-zinc-50 font-semibold rounded-full transition duration-300 hover:bg-zinc-700'>Co-op  </button>
        </div>
    )
}

export default NavBar