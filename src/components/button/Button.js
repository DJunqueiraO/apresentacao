import './Button.css'

export function Button({children}) {
    return(
        <button className='Button'>
            {children}
        </button>
    )
}