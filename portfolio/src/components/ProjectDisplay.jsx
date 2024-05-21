function ProjectDisplay(){
    return(
        <div className="relative border-2 border-slate-700 rounded-2xl bg-zinc-900 flex justify-center items-center flex-wrap m-6">
            <h1 className="w-[95%] font-bold text-3xl mt-4 text-zinc-50"><span className="material-symbols-outlined mx-5 text-3xl align-bottom leading-[2rem]">terminal</span><span className="align-text-middle">Projects</span></h1>
            <ul className="w-[95%]">
                <li className="rounded-xl mb-3 mt-3 w-full px-4 py-2 transition duration-300 hover:bg-zinc-800">
                    <p className="mx-5 text-zinc-400">l 2024-05-13</p>
                    <h3 className="mx-5 text-zinc-50">React Portfolio Website</h3>
                    <p className="mx-5 text-zinc-400">Built a portfoilio website using React, Tailwind css, and Framer Motion</p>
                    <a className="mx-5 align-text-top text-emerald-500 hover:underline" href="ProjectPage">See Details<span className="material-symbols-outlined leading-[1.5rem] align-bottom text-lg mx-1">arrow_forward</span></a>
                </li>
            </ul>
        </div>
    )
}

export default ProjectDisplay