import './CompetenceCard.css'
import check from '../../assets/check.png'

export function CompetenceCard({children, title, items}) {
    return(
        <div className='CompetenceCard'>
            <div className="CompetenceCardContainer">
                {
                    title && <h5>{title}</h5>
                }
                {
                    items && items.map(
                        ($0, index) => <p key={index}><img src={check} alt="?" />{$0}</p>
                    )
                }
                {children}
            </div>
        </div>
    )
}