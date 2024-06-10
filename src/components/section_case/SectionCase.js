import './SectionCase.css'

export function SectionCase(
  {
    key, 
    width, 
    nCase, 
    onClick, 
    showingImage
  }
) {
  return (
    <section 
        onClick={onClick}
        key={key} 
        className='SectionCase' 
        style={nCase.link? {cursor: 'pointer'} : null}>
        <div style={{display: 'flex'}}>
            <div style={{width: width + '%'}}>
                <p style={{fontWeight: 'bold', color: 'var(--foursys-orange)', fontSize: '25px'}}>
                    {nCase.tecnology}
                </p>
                <p style={{marginBlock: '1rem', fontWeight: 'bold'}}>
                    {nCase.name}
                </p>
                <p>
                    {nCase.description}
                </p>
            </div>
            {
                showingImage.get() && (
                    <div 
                        className='text' 
                        style={{display: 'flex', width: width + '%', alignItems: 'center', justifyContent: 'center'}}>
                        <img className={nCase.className} src={nCase.src} alt="?"/>
                    </div>
                )
            }
        </div>
    </section>
  )
}