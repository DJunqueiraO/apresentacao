import { Button } from '../../components/Components'
import './Home.css'

export function Home() {
    return(
        <div className='Home'>
            <h1>DANIEL JUNQUEIRA OLIVEIRA</h1>
            <h2>
                26 anos, Pinheiral/RJ<br/>
                Guitarra/Violão🎸, Jogos🕹️, Programar🖥️
            </h2>
            <p>
                Desenvolvedor Foursys<br/>
            </p>
            <Button to='page_1'>➔</Button>
        </div>
    )
}