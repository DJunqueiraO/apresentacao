import { collections, firestore, useResize, useStateAsObject } from '../../utils/Utils'
import './Cases.css'
import data from '../../assets/data.json'
import { useEffect } from 'react'
import { SectionCase } from '../../components/Components'

export function Cases() {

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
        [projects]
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
        <div className='Cases'>
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
                                <SectionCase
                                    key={index}
                                    width={width}
                                    nCase={$0}
                                    onClick={() => $0.link && desafioOnClickHandler($0.link)}
                                    showingImage={showingImage}
                                    />
                            )
                        }
                    )
                }
            </div>
        </div>
    )
}