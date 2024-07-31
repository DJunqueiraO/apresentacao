import { HTMLAttributes } from 'react'
import './SectionCase.css'
import { UseStateObject } from '../../utils/Utils'
import { Project } from '../../models/Models'

type SectionCaseProps = HTMLAttributes<HTMLDivElement> & {
    key: number,
    width: number,
    n_case: Project,
    showing_image: UseStateObject<boolean>
}

export function SectionCase(props: SectionCaseProps) {
  return (
    <section 
        {...props}
        className='SectionCase' 
        style={props.n_case.link? {cursor: 'pointer'} : {}}>
        <div style={{display: 'flex'}}>
            <div style={{width: props.width + '%'}}>
                <p style={{fontWeight: 'bold', color: 'var(--background)', fontSize: '25px'}}>
                    {props.n_case.tecnology}
                </p>
                <p style={{marginBlock: '1rem', fontWeight: 'bold'}}>
                    {props.n_case.name}
                </p>
                <p>
                    {props.n_case.description}
                </p>
            </div>
            {
                props.showing_image.get() && (
                    <div 
                        className='text' 
                        style={{
                            display: 'flex', 
                            width: props.width + '%', 
                            alignItems: 'center', 
                            justifyContent: 'center'
                        }}>
                        <img 
                            className={props.n_case.className} 
                            src={props.n_case.src} 
                            alt="?"/>
                    </div>
                )
            }
        </div>
    </section>
  )
}