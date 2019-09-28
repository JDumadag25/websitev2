import React from 'react'
import Intro from './Intro'

import { Container, Menu } from 'semantic-ui-react'
import { BrowserRouter as Router, Link, Redirect, withRouter } from 'react-router-dom'

class NavBar extends React.Component {



  handleAboutClick = () => {
    console.log('about has been clicked');
    this.props.history.push('/about')
  }

  render(){

    return (

      <Menu inverted>
        <Container>

          <Link to='/'>
            <Menu.Item as='h3' header>
              JUSTIN DUMADAG
            </Menu.Item>
          </Link>

          <Menu.Menu position='right'>
          <Link to='/about'>
            <Menu.Item name='about' as='a'  className='right-menu-btn'>
                About
            </Menu.Item>
          </Link>


          <Link to='/projects'>
            <Menu.Item name='projects'  as='a' className='right-menu-btn'>
              Projects
            </Menu.Item>
          </Link>

          <Link to='/contact'>
            <Menu.Item name='contact'  as='a'  className='right-menu-btn'>
              Contact
            </Menu.Item>
          </Link>

          </Menu.Menu>
        </Container>
      </Menu>

    )
  }
}

export default NavBar
