import { useLocation } from 'react-router-dom'
import foursys_logo from '../../assets/foursys_logo.png'
import { Button } from '../Components'
import './NavigationBar.css'

export function NavigationBar() {
    const {pathname} = useLocation()
    return(
        <div className="NavigationBar">
          <a 
            href="home">
            <img 
              className='foursys_logo'
              src={foursys_logo} 
              alt='?'/>
          </a>
          {
            [
                {children: 'QUEM SOU', to: 'page_1', style: {marginLeft: '3.5vw'}}, 
                {children: 'O QUE EU FAÇO', to: 'page_2'}, 
                {children: 'CASES', to: 'page_3'}
            ].map(
                $0 => (
                    <Button 
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
    )
}