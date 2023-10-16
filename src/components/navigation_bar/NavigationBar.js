import { useLocation } from 'react-router-dom'
import foursys_logo from '../../assets/foursys_logo.png'
import { Button } from '../Components'
import './NavigationBar.css'
import { useResize, useStateAsObject } from '../../utils/Utils'

export function NavigationBar() {
    const {pathname} = useLocation()
    const mobile = useStateAsObject()
    useResize(
        window => {
            mobile.set(window.width > 600)
        }
    )
    return(
        <div className="NavigationBar">
            <div className='topics'>
                {
                    mobile.get() && <a 
                        href="home">
                        <img 
                            className='foursys_logo'
                            src={foursys_logo} 
                            alt='?'/>
                    </a>
                }
                {
                    [
                        {children: 'QUEM SOU', to: 'page_1', style: mobile.get() && {marginLeft: '3rem'}}, 
                        {children: 'O QUE EU FAÇO', to: 'page_2'}, 
                        {children: 'CASES', to: 'page_3'}, 
                        {children: 'CARREIRA', to: 'https://www.linkedin.com/in/daniel-junqueira-oliveira-279960163/'}
                    ].map(
                        ($0, index) => (
                            <Button 
                                key={index}
                                style={
                                    {
                                        textDecoration: pathname.includes($0.to)? 'underline' : 'none',
                                        ...$0.style
                                    }
                                } 
                                to={$0.to} 
                                children={$0.children}/>
                        )
                    )
                }
            </div>
            <div className='contacts'>
                <a href="https://www.linkedin.com/in/daniel-junqueira-oliveira-279960163/">
                    in
                </a>
            </div>
        </div>
    )
}