import { Route,Routes } from 'react-router-dom'
import Home from './Components/Home'
import Trending from './Components/Trending'
import Popular from './Components/Popular'
import Movie from './Components/Movie'
import Tvshows from './Components/Tvshows'
import People from './Components/People'
import Moviedetails from './Components/Moviedetails'
import Peopledetails from './Components/Peopledetails'
import Tvdetails from './Components/Tvdetails'
import Trailer from './Components/partials/Trailer'
import Notfound from './Components/Notfound'
import Aboutme from './Components/Aboutme'
import Contactme from './Components/Contactme'


const App = () => {
  return (
    <div className='bg-[#1F1E24] w-screen h-screen flex'>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path='/trending' element={<Trending/>}/>
        <Route path='/popular' element={<Popular/>} />
        <Route path='/movie' element={<Movie/>} />
        <Route path='/tv' element={<Tvshows/>} />
        <Route path='/movie/details/:id' element={<Moviedetails/>} >
          <Route path='/movie/details/:id/trailer'element={<Trailer/> } />
        </Route>
        <Route path='/tv/details/:id' element={<Tvdetails/>} >
        <Route path='/tv/details/:id/trailer'element={<Trailer/> } />
        </Route>
        <Route path='/people/details/:id' element={<Peopledetails/>} />
        <Route path='/people' element={<People/>} />
        <Route path='/aboutus' element={<Aboutme/>} />
        <Route path='/contactme' element={<Contactme/>} />
        <Route path='*' element={<Notfound/>} />
       
      </Routes>
      
    </div>
  )
}

export default App