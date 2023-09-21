import { Button } from '../../components/Components'
import './Page1.css'
import foursys_logo from '../../assets/foursys_logo.png'

export function Page1() {
    return(
        <div className='Page1'>
            <img 
            className='foursys_logo'
            src={foursys_logo} 
            alt='?'/>
            <h1>DANIEL JUNQUEIRA OLIVEIRA</h1>
            <p>Desenvolvedor Foursys</p>
            <Button>➔</Button>
        </div>
    )
}