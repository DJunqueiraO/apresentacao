export function Iframe(
    {
        style,
        src,
        title,
        frameBorder,
        allow,
        allowFullScreen
    }
) {
    return(
        <iframe 
            style={
                {
                    backgroundColor: 'black',
                    ...style
                }
            }
            src={src}
            title={title || "YouTube video player" }
            frameBorder={frameBorder || 0}
            allow={allow || "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"}
            allowFullScreen={allowFullScreen || true}/>
    )
}