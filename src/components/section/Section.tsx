import './Section.css'
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
                                <span>
                                    &#x2713;&nbsp;
                                </span>
                                {$0}
                            </p>
                        )
                    )
                }
                {props.children}
        </section>
    )
}