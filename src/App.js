import './App.css'
import { NavigationBar, Pager } from './components/Components'
import { Home, Page1, Page2, Page3 } from './pages/Pages'
import { useResize } from './utils/Utils'

export default function App() {
  return (
    <Pager
      routes={
        [
          {path: '/*', element: <Home/>},
          {path: '/page_1', element: <Page1/>},
          {path: '/page_2', element: <Page2/>},
          {path: '/page_3', element: <Page3/>}
        ]
      }>
      <NavigationBar/>
    </Pager>
  )
}
