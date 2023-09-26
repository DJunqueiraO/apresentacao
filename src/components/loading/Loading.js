import './Loading.css'

export function Loading({hidden, noCover}) {
    if(!hidden) return(
        <div className={`${noCover? 'noCover' : 'loadingCover'}`}>
            <span className="loading">
                <div></div>
                <div></div>
                <div></div>
            </span>
        </div>
    )
}