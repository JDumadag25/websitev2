import React from 'react'
import { Grid, Menu, Segment } from 'semantic-ui-react'

class SideBar extends React.Component {

  state = {
    activeItem: 'Intro'
  }

 handleItemClick = (e, { name }) => {
   this.setState({ activeItem: name })
 }


  render(){

     const { activeItem } = this.state

    return (
      <Grid>
       <Grid.Column width={4}>
         <Menu fluid vertical tabular>
           <Menu.Item
             name='Intro'
             active={activeItem === 'Intro'}
             onClick={this.handleItemClick}
           />
           <Menu.Item
             name='Bio'
             active={activeItem === 'Bio'}
             onClick={this.handleItemClick}
           />
           <Menu.Item
             name='Projects'
             active={activeItem === 'Projects'}
             onClick={this.handleItemClick}
           />
           <Menu.Item
             name='Contact Me'
             active={activeItem === 'Contact Me'}
             onClick={this.handleItemClick}
           />
         </Menu>
       </Grid.Column>

       <Grid.Column stretched width={12}>
         <Segment>
           Holder for all the information
         </Segment>
       </Grid.Column>
     </Grid>
    )
  }
}

export default SideBar
