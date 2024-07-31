import './Section.css'
import images from '../../assets/images.json'
import { HTMLAttributes } from 'react'

type SectionProps = HTMLAttributes<HTMLDivElement> & {
    title?: string
    items?: string[]
}

export function Section(props: SectionProps) {
    return(
        <section 
            {...props}
            className='Section'>
                {
                    props.title && <h5>{props.title}</h5>
                }
                {
                    props.items && props.items.map(
                        ($0, index) => (
                            <p key={index}>
                                <img 
                                    src={`data:image/png;base64,${images.check}`} 
                                    alt="?" />
                                {$0}
                            </p>
                        )
                    )
                }
                {props.children}
        </section>
    )
}