import ProjectDisplay from './components/ProjectDisplay'
import ExperienceDisplay from './components/ExperienceDisplay'
import AboutMe from './components/AboutMe'
import NavBar from './components/NavBar'
import pdfURL from './assets/Connor Feeney - Resume June 2024.pdf'
import coopVideo from './assets/Coop Video.mp4'


function App() {
  return (
    <div className='min-h-screen max-w-[1200px] m-auto bg-neutral-950 overflow-hidden'>
      <div className='mb-20'>
        <NavBar/>
      </div>
      <div id='Home'>
        <AboutMe/>
      </div>
      <div id = 'Projects' className='grid auto-fit-[250px] justify-items-center justify-center'>
        <div><ProjectDisplay/></div>
        <div><ExperienceDisplay/></div>
      </div>

      <div id='Coop' className='m-auto py-10'>
        <video controls className='w-[85%] m-auto'>
          <source src={coopVideo} type='video/mp4'/>
        </video>
      </div>

      <div id='Resume'>
        <iframe className='m-auto'
          src={pdfURL}
            width="85%"
            height="950px"
        />
      </div>
    </div>
  )
}

export default App
