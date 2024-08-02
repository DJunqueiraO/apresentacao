import { 
    collections, 
    firestore, 
    useResize, 
    useStateAsObject
} from '../../utils/Utils'
import './Cases.css'
import { useEffect } from 'react'
import { SectionCase } from '../../components/Components'
import { Project } from '../../models/Models'
import { data } from '../../assets/Assets'

export function Cases() {

    const projects = useStateAsObject<Project[]>([])
    const showingImage = useStateAsObject(true)

    useEffect(
        () => {
            const {documentIds, path} = collections.projects
            // firestore.post(path, documentIds[0], {projetos: data.projetos})
            firestore.get(path, documentIds[0])
                .then(result => projects.set(result?.projetos))
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
            showingImage.set(window.innerWidth > 900)
        }
    )

    const desafioOnClickHandler = (
        link: string
    ) => {
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
                            <h2>CASES <br/><span style={{color: 'var(--foreground)'}}>PROJETOS</span></h2>
                        )
                    }
                    <p style={showingImage.get()? {width:  '50%'} : {}}>
                        Conhe&ccedil;a abaixo como o Daniel implanta, com sucesso, 
                        desafios utilizando inova&ccedil;&atilde;o e tecnologia em diversos segmentos 
                        de neg&oacute;cio e diferentes setores do mercado.
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
                                    n_case={$0}
                                    onClick={() => $0.link && desafioOnClickHandler($0.link)}
                                    showing_image={showingImage}
                                    />
                            )
                        }
                    )
                }
            </div>
        </div>
    )
}