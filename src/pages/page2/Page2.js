import { CompetenceCard, Table } from "../../components/Components";
import { useResize, useStateAsObject } from "../../utils/Utils";
import './Page2.css'

export function Page2() {
    const itemsPerLine = useStateAsObject(4)
    useResize(
        window => {
            console.log(window.width*3/1366)
            itemsPerLine.set(Math.floor(window.width*4/1366))
        }
    )
    return(
        <div className='Page2'>
            <h2>CONHECIMENTOS <span style={{color: 'var(--foursys-orange)'}}>ADQUIRIDOS</span></h2>
            <Table
                itemsPerLine={itemsPerLine.get()}
                items={
                    [
                        {
                            title: 'IOS(Mobile)', 
                            items: [
                                'ViewCode',
                                'UIKit',
                                'SwiftUI',
                                'MVVM',
                                'URLSession',
                                'Xib',
                                'Alamofire',
                                'Core Data',
                                'CocoaPods',
                                'Firebase',
                                'MVVM-C',
                                'SwiftLint'
                            ]
                        },
                        {
                            title: 'React(Web)', 
                            items: [
                                'JSX',
                                'Composition',
                                'React Hook',
                                'ReactRouterDom',
                                'CSS Modules',
                                'Class Component'
                            ]
                        },
                        {
                            title: 'Java(BackEnd, Mobile)', 
                            items: [
                                'Android',
                                'Layout Programático',
                                'JavaFx',
                                'Java Swing',
                                'Spring Boot',
                                'SOLID'
                            ]
                        }
                    ].map(
                        $0 => (
                            <CompetenceCard 
                                items={$0.items}
                                title={$0.title}/>
                        )
                    )
                }>
                <div className='TableTitle'><h3>Hard Skills</h3></div>
            </Table>
        </div>
    )
}