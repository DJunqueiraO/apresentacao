import { useEffect } from "react"
import { 
    CompetenceCard, 
    Table 
} from "../../components/Components"
import { 
    collections, 
    firestore, 
    useResize, 
    useStateAsObject
} from "../../utils/Utils"
// import data from '../../utils/data/Data.json'
import './Page2.css'

export function Page2() {
    const itemsPerLine = useStateAsObject(4)
    const items = useStateAsObject([])
    useResize(
        window => {
            console.log(window.width*3/1366)
            itemsPerLine.set(Math.floor(window.width*4/1366))
        }
    )
    useEffect(
        () => {
            const {documentIds, path} = collections.ido
            firestore.get(path, documentIds[0])
                .then(result => items.set(result.tecnologias))
                .catch(error => console.log(error))
        },
        []
    )
    return(
        <div className='Page2'>
            <h2>CONHECIMENTOS <span style={{color: 'var(--foursys-orange)'}}>ADQUIRIDOS</span></h2>
            <Table
                itemsPerLine={itemsPerLine.get()}
                items={
                    items.get().map(
                    // data.tecnologias.map(
                        $0 => (
                            <CompetenceCard 
                                items={$0.items}
                                title={$0.title}/>
                        )
                    )
                }>
                <div className='TableTitle'><h3>Tecnologias</h3></div>
            </Table>
        </div>
    )
}