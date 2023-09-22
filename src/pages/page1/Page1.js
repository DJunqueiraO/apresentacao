import './Page1.css'

export function Page1() {
    return(
        <div className='Page1'>
            <h2>QUEM <span style={{color: 'var(--foursys-orange)'}}>SOU</span></h2>
            <p>
                No dia 1 de abril de 2022, fui admitido pela <a href='https://www.foursys.com.br/'><strong>Foursys</strong></a>,
                participei do fourcamp para receber treinamento IOS. Desde então, aprimoro a cada dia meu portfólio de habilidades, HardSkills e SoftSkills, 
                pronto para atender qualquer desafio que for apresentado, independentemente do conjunto de conhecimentos e atuação necessária.
            </p>
            <p>
                Hoje também possuo conhecimentos em React Web, Java e Android.
            </p>
            <p>
              Sou apaixonado pelo que faço. <a href='https://www.foursys.com.br/'><strong>Sou Foursys!</strong></a> 
            </p>
            <iframe 
                style={{width: '60vw', height: '315px'}}
                src="https://www.youtube.com/embed/RTyLKIguReA?si=9C6pw4-p5RosGJmu" 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowfullscreen/>
        </div>
    )
}