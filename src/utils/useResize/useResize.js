import {useEffect} from 'react'

export const useResize = effect => {
    useEffect(
        () => {
            function handleResize() {
                effect(
                    {
                        width: window.innerWidth,
                        height: window.innerHeight
                    }
                )
            }
            handleResize()
            window.addEventListener('resize', handleResize)
            return () => window.removeEventListener('resize', handleResize)
        }, 
        []
    )
}