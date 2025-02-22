import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import {Route,Routes} from 'react-router-dom'
import FirstPage from './Components_site/First_page/FirstPg_build'
import Second from './Components_site/Second_page/SecondPg_build'
import SecondPg from './Components_site/Three_page/ThreePg_build'
import SevenPg from './Components_site/Seven_page/SevenPg'
import EightPage from './Components_site/Eight_page/Eight_page'
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
     </Routes>
    </HashRouter>
    
  </StrictMode>
)
