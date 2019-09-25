import React from 'react'
import { Grid, Menu, Segment } from 'semantic-ui-react'

class NavBar extends React.Component {

  state = { activeItem: '' }

 handleItemClick = (e, { name }) => this.setState({ activeItem: name })


  render(){
     const { activeItem } = this.state

    return (
      <Menu>
        <h2>JUSTIN DUMADAG</h2>
         <Menu.Item
           position='right'
           name='Projects'
           active={activeItem === 'Projects'}
           onClick={this.handleItemClick}
         />
         <Menu.Item
           name='Contact'
           active={activeItem === 'Contact'}
           onClick={this.handleItemClick}
         />
       </Menu>
    )
  }
}

export default NavBar
