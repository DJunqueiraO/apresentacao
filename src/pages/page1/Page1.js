import { Iframe } from '../../components/Components'
import { useResize, useStateAsObject } from '../../utils/Utils'
import './Page1.css'

export function Page1() {
    const mobile = useStateAsObject()
    useResize(
        window => mobile.set(window.width < 600)
    )
    return(
        <div className='Page1'>
            <div className='container' style={mobile.get()? {width: '90%'} : null}>
            <h2>QUEM <span style={{color: 'var(--foursys-orange)'}}>SOU</span></h2>
            <p>
                Sou Daniel, desenvolvedor mobile, web e dekstop.
            </p>
            <p>
                Possuo conhecimento em Javascript, Java, Swift e Kotlin. para o desenvolvimento
                nas plataformas web, mobile e dekstop, sempre aberto a novas tecnologias.
            </p>
            <p>
                Caso queira conferir meu portifólio acesse meu <a href='https://github.com/BatataKente/'><strong>Github</strong></a>.
            </p>
            <Iframe 
                style={{width: mobile.get()? '100%' : '60vw', height: '315px'}}
                src="https://www.youtube.com/embed/RTyLKIguReA?si=9C6pw4-p5RosGJmu"/>

                </div>
        </div>
    )
}