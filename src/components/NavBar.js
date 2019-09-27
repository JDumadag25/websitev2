import React from 'react'
import { Container, Menu } from 'semantic-ui-react'
import { BrowserRouter as Router, Link, Redirect } from 'react-router-dom'

class NavBar extends React.Component {


  handleAboutClick = () => {
    console.log('sdfsda');
  }

  render(){


    return (

      <Menu inverted>
        <Container>

          <Menu.Item as='h3' header>
            JUSTIN DUMADAG
          </Menu.Item>

          <Menu.Item position='right' name='about' as='a' onClick={this.handleAboutClick}>
              About
          </Menu.Item>

          <Menu.Item name='projects' as='a'>
            Projects
          </Menu.Item>

          <Menu.Item name='contact' as='a'>
            Contact
          </Menu.Item>

        </Container>
      </Menu>

    )
  }
}

export default NavBar
