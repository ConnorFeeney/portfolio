import ProjectDisplay from './components/ProjectDisplay'
import ExperienceDisplay from './components/ExperienceDisplay'
import AboutMe from './components/AboutMe'


function App() {
  return (
    <div className='min-h-screen max-w-[1200px] m-auto bg-neutral-950 relative overflow-hidden'>
      
      <AboutMe/>
      <div className='grid auto-fit-[250px] justify-items-center justify-center'>
        <div><ProjectDisplay/></div>
        <div><ExperienceDisplay/></div>
      </div>
    </div>
  )
}

export default App
