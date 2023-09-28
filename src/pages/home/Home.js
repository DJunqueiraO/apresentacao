import { Button } from '../../components/Components'
import './Home.css'

export function Home() {
    return(
        <div className='Home'>
            <h1>DANIEL JUNQUEIRA OLIVEIRA</h1>
            <h2>26 anos, Pinheiral/RJ</h2>
            <p>
                Desenvolvedor Foursys<br/>
            </p>
            <Button to='page_1'>➔</Button>
        </div>
    )
}