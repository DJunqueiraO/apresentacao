import './App.css'
import { Nav, Pager } from './components/Components'
import { About, Home, Knowledge, Cases } from './pages/Pages'

export function App() {

  const routes = [
    {path: '/*', element: <Home/>}
  ].concat(
    [
      {children: 'QUEM SOU', element: <About/>},
      {children: 'O QUE EU FA&Ccedil;O', element: <Knowledge/>},
      {children: 'CASES', element: <Cases/>}
    ].map($0 => ({...$0, path: $0.element.type.name.toLowerCase()})),
  )

  const contacts = [
    {children: 'CARREIRA', path: 'https://www.linkedin.com/in/daniel-junqueira-oliveira-279960163/'}
  ]

  return (
    <Pager routes={routes}>
      <Nav 
        contacts={contacts}
        routes={routes}/>
    </Pager>
  )
}
