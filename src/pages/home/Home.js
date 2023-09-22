import { Button } from '../../components/Components'
import './Home.css'

export function Home() {
    return(
        <div className='Home'>
            <h1>DANIEL JUNQUEIRA OLIVEIRA</h1>
            <p>Desenvolvedor Foursys</p>
            <Button to='page_2'>➔</Button>
        </div>
    )
}