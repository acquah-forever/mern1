import Home from './pages/Home';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Notifications from './pages/Notifications';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Login from './pages/Login';
import Signup from './pages/Signup';


import { Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <div className="relative min-h-screen flex flex-col bg-[url('https://cdn.pixabay.com/photo/2021/01/21/15/54/books-5937716_1280.jpg')] bg-cover bg-center bg-no-repeat bg-fixed text-black">
      <div className='pointer-events-none absolute inset-0 z-0 bg-black/30'></div>
      <div className='relative z-10'>
        <div className='container mx-auto flex flex-col flex-1'>
          <NavBar />
          <main className='flex-1'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/notifications' element={<Notifications />} />
              <Route path='/profile' element={<Profile />} />
              <Route path='/settings' element={<Settings />} />
              <Route path='/login' element={<Login />} />
              <Route path='/signup' element={<Signup />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default App
