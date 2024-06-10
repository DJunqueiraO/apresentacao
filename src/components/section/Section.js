import './Section.css'
import check from '../../assets/check.png'

export function Section(
    {
        children, 
        title, 
        items
    }
) {
    return(
        <section className='Section'>
            <div className='SectionContainer'>
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
        </section>
    )
}