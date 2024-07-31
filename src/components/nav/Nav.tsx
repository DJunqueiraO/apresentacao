import { RouteProps, useLocation } from 'react-router-dom'
import images from '../../assets/images.json'

import { Button } from '../Components'
import './Nav.css'
import { useResize, useStateAsObject } from '../../utils/Utils'
import { HTMLAttributes } from 'react'

type NavProps = HTMLAttributes<HTMLDivElement> & {
    home?: string,
    routes: RouteProps[],
    contacts: RouteProps[]
}

export function Nav(props: NavProps) {
    const {pathname} = useLocation()
    const mobile = useStateAsObject<boolean>(false)

    useResize(
        (window: Window) => {
            mobile.set(window.innerWidth > 600)
        }
    )

    return(
        <nav className="Nav">
            <div className='topics'>
                {
                    mobile.get() && (
                        <a 
                            href={props.home}>
                            <img 
                                width='156px'
                                className='foursys_logo'
                                src={`data:image/png;base64,${images.foursys_logo}`} 
                                alt='?'/>
                        </a>
                    )
                }
                {
                    [...props.routes, ...props.contacts]
                        .reduce(
                            (
                                $0: RouteProps[], 
                                $1: RouteProps
                            ) => {
                                if($1.children) $0.push($1)
                                return $0
                            },
                            []
                        )
                        .map(
                            ($0, index) => (
                                <Button 
                                    key={index}
                                    style={
                                        {
                                            textDecoration: pathname.includes($0.path || '')? 'underline' : 'none',
                                            // ...$0.style
                                        }
                                    } 
                                    href={$0.path} 
                                    children={$0.children}/>
                            )
                        )
                }
            </div>
            <div className='contacts'>
                {
                    props.contacts
                        .map(
                            ($0, index) => (
                                <a 
                                    key={index}
                                    href={$0.path}>
                                    in
                                </a>
                            )
                        )
                }
            </div>
        </nav>
    )
}