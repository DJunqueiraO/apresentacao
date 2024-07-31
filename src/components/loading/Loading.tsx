import { HTMLAttributes } from 'react'
import './Loading.css'

type LoadingProps = HTMLAttributes<HTMLDivElement> & {
    hidden?: boolean
    noCover?: boolean
}

export function Loading(props: LoadingProps) {
    if(!props.hidden) return(
        <div className={`${props.noCover? 'noCover' : 'loadingCover'}`}>
            <span className="loading">
                <div></div>
                <div></div>
                <div></div>
            </span>
        </div>
    )
}