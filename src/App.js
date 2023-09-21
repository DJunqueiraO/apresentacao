import './App.css'
import { Page1, PageNotFound } from './pages/Pages'
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import background_detail_1 from './assets/background_detail_1.png'
import background_detail_2 from './assets/background_detail_2.png'

export default function App() {
  return (
    <Router>
      <div className='App'>
        <img 
          className='background_detail_1'
          src={background_detail_1} 
          alt='?'/>
        <Routes>
            {
              [
                {path: '/*', element: <PageNotFound/>},
                {path: '/page_1', element: <Page1/>}
              ].map(($0, index) => <Route key={index} path={$0.path} element={$0.element}/>)
            }
        </Routes>
        <img 
          className='background_detail_2'
          src={background_detail_2} 
          alt='?'/>
      </div>
    </Router>
  )
}
