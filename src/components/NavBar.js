import React from 'react'
import { Grid, Menu, Segment } from 'semantic-ui-react'

class NavBar extends React.Component {

  state = {
    activeItem: 'Intro'
  }

 handleItemClick = (e, { name }) => {
   this.setState({ activeItem: name })
 }


  render(){

     const { activeItem } = this.state

    return (
      <div>
        <Menu inverted>
          <Menu.Item
            name='home'
            active={activeItem === 'home'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='messages'
            active={activeItem === 'messages'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='friends'
            active={activeItem === 'friends'}
            onClick={this.handleItemClick}
          />
        </Menu>
      </div>
    )
  }
}

export default NavBar
