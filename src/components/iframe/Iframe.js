export function Iframe(
    {
        style,
        src,
        title,
        frameborder,
        allow,
        allowfullscreen
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
            frameborder={frameborder || 0}
            allow={allow || "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"}
            allowfullscreen={allowfullscreen || true}/>
    )
}