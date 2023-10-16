import { Button } from '../../components/Components'
import './Home.css'

export function Home() {
    return(
        <div className='Home'>
            <h1>DANIEL JUNQUEIRA OLIVEIRA</h1>
            <p>
                Desenvolvedor<br/>
            </p>
            <Button to='page_1'>➔</Button>
        </div>
    )
}