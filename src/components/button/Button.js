import './Button.css'

export function Button(
    {
        style, 
        children, 
        onClick, 
        href
    }
) {
    const onClickHandler = event => {
        if(onClick) onClick(event)
        if(href) {
            const link = document.createElement('a')
            link.href = href
            link.click()
        }
    }
    return(
        <button 
            style={style}
            onClick={onClickHandler}
            className='Button'>
            {children}
        </button>
    )
}