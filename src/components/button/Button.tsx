import './Button.css'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: string
}

export function Button(props: ButtonProps) {
    const onClickHandler: React.MouseEventHandler<HTMLButtonElement> = (event) => {
        if(props.onClick) props.onClick(event)
        if(props.href) {
            const link = document.createElement('a')
            link.href = props.href
            link.click()
        }
    }
    return(
        <button 
            {...props}
            style={props.style}
            onClick={onClickHandler}
            className='Button'>
            {props.children}
        </button>
    )
}