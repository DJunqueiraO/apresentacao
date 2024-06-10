import { useLocation } from 'react-router-dom'
import foursys_logo from '../../assets/foursys_logo.png'
import { Button } from '../Components'
import './Nav.css'
import { useResize, useStateAsObject } from '../../utils/Utils'

export function Nav(
    {
        home = '/',
        routes = [],
        contacts = []
    }
) {
    const {pathname} = useLocation()
    const mobile = useStateAsObject()
    useResize(
        window => {
            mobile.set(window.width > 600)
        }
    )
    return(
        <nav className="Nav">
            <div className='topics'>
                {
                    mobile.get() && (
                        <a 
                            href={home}>
                            <img 
                                width='156px'
                                className='foursys_logo'
                                src={foursys_logo} 
                                alt='?'/>
                        </a>
                    )
                }
                {
                    [...routes, ...contacts]
                        .reduce(
                            ($0, $1) => {
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
                                            textDecoration: pathname.includes($0.href)? 'underline' : 'none',
                                            ...$0.style
                                        }
                                    } 
                                    href={$0.href} 
                                    children={$0.children}/>
                            )
                        )
                }
            </div>
            <div className='contacts'>
                {
                    contacts
                        .map(
                            ($0, index) => (
                                <a 
                                    key={index}
                                    href={$0.href}>
                                    in
                                </a>
                            )
                        )
                }
            </div>
        </nav>
    )
}