import {useEffect} from 'react'

export const useResize = (
    effect: (window: Window) => void,
    deps: React.DependencyList = []
) => {
    useEffect(
        () => {
            function handleResize() {
                effect(window)
            }
            handleResize()
            window.addEventListener('resize', handleResize)
            return () => window.removeEventListener('resize', handleResize)
        }, 
        // eslint-disable-next-line react-hooks/exhaustive-deps
        deps
    )
}