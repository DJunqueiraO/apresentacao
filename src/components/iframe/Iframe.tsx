import { HTMLAttributes } from "react"

type IframeProps = HTMLAttributes<HTMLIFrameElement> & {
    src: string,
    frameBorder?: number,
    allow?: string,
    allowFullScreen?: boolean
}

export function Iframe(props: IframeProps) {
    return(
        <iframe 
            {...props}
            style={
                {
                    backgroundColor: 'black',
                    ...props.style
                }
            }
            src={props.src}
            title={props.title || "YouTube video player" }
            frameBorder={props.frameBorder || 0}
            allow={props.allow || "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"}
            allowFullScreen={props.allowFullScreen || true}/>
    )
}