import { Iframe } from '../../components/Components'
import { useResize, useStateAsObject } from '../../utils/Utils'
import './About.css'

export function About() {

    const mobile = useStateAsObject(false)

    useResize(
        window => mobile.set(window.innerWidth < 600)
    )

    return(
        <div className='About'>
            <div className='container' style={mobile.get()? {width: '90%'} : {}}>
                <h2>QUEM <span style={{color: 'var(--foreground)'}}>SOU</span></h2>
                <p>
                    Sou Daniel, desenvolvedor mobile, web e dekstop.
                </p>
                <p>
                    Possuo conhecimento em Javascript, Python, Java, Swift e Kotlin. para o desenvolvimento
                    nas plataformas web, mobile e dekstop, sempre aberto a novas tecnologias.
                </p>
                <p>
                    Caso queira conferir meu portif&oacute;lio acesse meu <a href='https://github.com/DJunqueiraO/'><strong>Github</strong></a>.
                </p>
                {/* <Iframe 
                    style={{width: mobile.get()? '100%' : '60vw', height: '315px'}}
                    src="https://www.youtube.com/embed/RTyLKIguReA?si=9C6pw4-p5RosGJmu"/> */}
            </div>
        </div>
    )
}