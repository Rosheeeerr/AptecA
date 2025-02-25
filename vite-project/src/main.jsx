import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import {Route,Routes} from 'react-router-dom'
import FirstPage from './Components_site/First_page/FirstPg_build'
import Second from './Components_site/Second_page/SecondPg_build'
import SecondPg from './Components_site/Three_page/ThreePg_build'
import SevenPg from './Components_site/Seven_page/SevenPg'
import EightPage from './Components_site/Eight_page/Eight_page'
import Favorite from './Components_site/Thirteen/Favorite'
import Lk from './Components_site/Sixteen_page/Lk'
import YourCart from './Components_site/Fourteen_page/CartPg'
import Blog from './Components_site/Five_pg/blog.jsx'
import ElevenPg from './Components_site/Eleven_page/ElevenPg.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
       <Routes>
     <Route index element={<FirstPage/>}/>
     <Route path='/home' element={<FirstPage/>}/>
     <Route path='/ToPagesTwo' element={<Second/>}/>
     <Route path='/ToPagesThree' element={<SecondPg/>}/>
     <Route path='/SevenPg' element={<SevenPg/>}/>
     <Route path='/Eight' element={<EightPage/>}/>
     <Route path="/favorite" element={<Favorite/>}/>
     <Route path="/lk" element={<Lk/>}/>
     <Route path="/YourCart" element={<YourCart/>}/>
     <Route path="/FivePg" element={<Blog/>}/>
     <Route path="/Elev" element={<ElevenPg/>}/>
     </Routes>
    </HashRouter>
    
  </StrictMode>
)
