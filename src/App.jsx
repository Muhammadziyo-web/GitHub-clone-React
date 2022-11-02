import { useState , useContext } from 'react'
import Aside from './assets/Components/Aside'
import Footer from './assets/Components/Footer'
import Navbar from './assets/Components/Navbar'
import Navs from './assets/Components/Navs'
import Overview from './assets/Components/Overview'
import reactLogo from './assets/react.svg'
import API from './assets/API'
import context from './assets/Context'
import { BrowserRouter,Routes ,Route, Navigate,useLocation } from 'react-router-dom'
import Repo from './assets/Components/Repo'
import Followers from './assets/Components/Followers'
import Following from './assets/Components/Following'


function App() {

  const location = useLocation().pathname;
  console.log(location);
  if(location.length<2){
    // Navigate('')
  }

  let userInfo = API.getUserInfo()
  let getFollowers = API.getFollowers()
  let getFollowing = API.getFollowing()


  return (
  
  <>
  {(window.location.pathname.length < 2) ? <Navigate to="/overview" /> : ''}

  <context.Provider value={{userInfo,getFollowers,getFollowing}}>

  <Navbar/>
  <Navs/>
  <div className='wrapper-all main'>
  <Aside/>

  <Routes>
    <Route path='/overview' element={<Overview/>} />
    <Route path='/followers' element={<Followers/>} />
    <Route path='/following' element={<Following/>} />
    <Route path='/repositories' element={<Repo/>} />
    <Route path='*' element={<h1 className='coming'>Coming soon</h1>} />
  </Routes>
  
  </div>
  <Footer/>
  </context.Provider>
  </>  )
}

export default App
