import './Button.css'

export function Button(
    {
        style, 
        children, 
        onClick, 
        to
    }
) {
    const onClickHandler = event => {
        if(onClick) onClick(event)
        console.log(to)
        if(to) {
            const link = document.createElement('a')
            link.href = to
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