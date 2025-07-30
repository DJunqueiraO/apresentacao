import { useEffect } from "react"
import { 
    Grid,
    Section
} from "../../components/Components"
import { 
    collections, 
    firestore, 
    squaret_array, 
    useResize, 
    useStateAsObject
} from "../../utils/Utils"
import data from '../../assets/data.json'
import './Knowledge.css'
import { Tecnology } from "../../models/Models"

export function Knowledge() {

    const itemsPerLine = useStateAsObject(4)
    const items = useStateAsObject<Tecnology[]>([])
    const mobile = useStateAsObject(false)

    useResize(
        window => {
            itemsPerLine.set(Math.floor(window.innerWidth*(4.5)/1366))
            mobile.set(window.innerWidth < 600)
        }
    )

    useEffect(
        () => {
            const {documentIds, path} = collections.ido
            firestore.post(path, documentIds[0], {tecnologias: data.tecnologias})
            firestore.get(path, documentIds[0])
                .then(result => {
                    items.set(result?.tecnologias)
                    if(data?.tecnologias?.length !== result?.tecnologias?.length) {
                        items.set(data?.tecnologias)
                        firestore.post(path, documentIds[0], {tecnologias: data.tecnologias})
                    }
                })
                .catch(
                    error => {
                        items.set(data?.tecnologias)
                        console.log(error)
                    }
                )
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        []
    )
    
    return(
        <div 
            className='Knowledge'>
            <h2
                style={mobile.get()? {fontSize:  '40px'} : {}}>
                CONHECIMENTOS <span style={{color: 'var(--foreground)'}}>ADQUIRIDOS</span>
            </h2>
            <div className='TableTitle'><h3>Tecnologias</h3></div>
            <Grid>
                {
                    squaret_array(
                        (
                            items.get()
                                .map(
                                    ($0, index) => (
                                        <Section 
                                            items={$0.items}
                                            title={$0.title}/>
                                    )
                                )
                        ), 
                        itemsPerLine.get()
                    )
                }
            </Grid>
        </div>
    )
}