import Home from './pages/Home'
import NavBar from './components/NavBar'


import { Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <div className=' bg-linear-to-tl from-slate-900 to-slate-400  min-h-screen text-black flex flex-col'>
      <div className='container mx-auto flex flex-col flex-1'>
        <NavBar />
        <main className='flex-1'>
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </main>
      </div>
    </div>
  )
}

export default App
