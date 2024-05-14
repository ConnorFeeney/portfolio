import ProjectDisplay from './components/ProjectDisplay'
import ExperienceDisplay from './components/ExperienceDisplay'
import TypeWriter from './components/TypeWriter'

function App() {


  return (
    <div className='min-h-screen max-w-[1200px] m-auto bg-zinc-950'>
      <div className='text-emerald-500 md:text-8xl text-6xl font-extrabold min-h-[7.5rem] md:min-h-[6rem]'><TypeWriter text="Connor Feeney."/></div>
      <div className='grid auto-fit-[250px] justify-items-center justify-center'>
        <div><ProjectDisplay/></div>
        <div><ExperienceDisplay/></div>
      </div>
    </div>
  )
}

export default App
