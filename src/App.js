import './App.css'
import { NavigationBar } from './components/Components'
import { Home, Page1, Page2, Page3 } from './pages/Pages'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

export default function App() {
  return (
    <Router>
      <div className='App'>
        <NavigationBar/>
        <Routes>
            {
              [
                {path: '/*', element: <Home/>},
                {path: '/page_1', element: <Page1/>},
                {path: '/page_2', element: <Page2/>},
                {path: '/page_3', element: <Page3/>}
              ].map(($0, index) => <Route key={index} path={$0.path} element={$0.element}/>)
            }
        </Routes>
      </div>
    </Router>
  )
}
