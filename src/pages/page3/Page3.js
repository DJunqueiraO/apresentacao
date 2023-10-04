import { collections, firestore, useResize, useStateAsObject } from '../../utils/Utils'
import './Page3.css'
import data from '../../utils/data/Data.json'
import { useEffect } from 'react'

export function Page3() {

    const projects = useStateAsObject([])
    const showingImage = useStateAsObject(true)

    useEffect(
        () => {
            const {documentIds, path} = collections.projects
            // firestore.post(path, documentIds[0], {projetos: data.projetos})
            firestore.get(path, documentIds[0])
                .then(result => projects.set(result.projetos))
                .catch(
                    error => {
                        projects.set(data.projetos)
                        console.log(error)
                    }
                )
        },
        []
    )

    useResize(
        window => {
            showingImage.set(window.width > 900)
        }
    )

    const desafioOnClickHandler = link => {
        if(!link || link === undefined || link === 'undefined') return
        const a = document.createElement('a')
        a.href = link
        a.click()
    }

    return(
        <div className='Page3'>
            <div className='container'>
                <div className="header">
                    {
                        showingImage.get() && (
                            <h2>CASES <br/><span style={{color: 'var(--foursys-orange)'}}>PROJETOS</span></h2>
                        )
                    }
                    <p style={showingImage.get()? {width:  '50%'} : null}>
                        Conheça abaixo como o Daniel implanta, com sucesso, 
                        desafios utilizando inovação e tecnologia em diversos segmentos 
                        de negócio e diferentes setores do mercado.
                    </p>
                </div>
                {
                    projects.get().map(
                        ($0, index) => {
                            const width = showingImage.get() ? 50 : 100
                            return (
                                <div 
                                    onClick={() => $0.link && desafioOnClickHandler($0.link)}
                                    key={index} 
                                    className='desafio' 
                                    style={$0.link? {cursor: 'pointer'} : null}>
                                    <div style={{display: 'flex'}}>
                                        <div style={{width: width + '%'}}>
                                            <p style={{fontWeight: 'bold', color: 'var(--foursys-orange)', fontSize: '25px'}}>
                                                {$0.tecnology}
                                            </p>
                                            <p style={{marginBlock: '1rem', fontWeight: 'bold'}}>
                                                {$0.name}
                                            </p>
                                            <p>
                                                {$0.description}
                                            </p>
                                        </div>
                                        {
                                            showingImage.get() && (
                                                <div 
                                                    className='text' 
                                                    style={{display: 'flex', width: width + '%', alignItems: 'center', justifyContent: 'center'}}>
                                                    <img className={$0.animation} src={$0.src} alt="?" />
                                                </div>
                                            )
                                        }
                                    </div>
                                </div>
                            )
                        }
                    )
                }
            </div>
        </div>
    )
}