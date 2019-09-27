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

          <Link to='/about'>
            <Menu.Item position='right' name='about' as='a'>
                About
            </Menu.Item>
          </Link>


          <Link to='/projects'>
            <Menu.Item name='projects' position='right' as='a'>
              Projects
            </Menu.Item>
          </Link>

          <Link to='/contact'>
            <Menu.Item name='contact' position='right' as='a'>
              Contact
            </Menu.Item>
          </Link>

        </Container>
      </Menu>

    )
  }
}

export default NavBar
