import React from 'react'

import { Button, Segment, Grid } from 'semantic-ui-react'

import { Link } from 'react-router-dom'


class Projects extends React.Component {
  render(){
    return(
    <div className='projects-container'>
      <Segment textAlign='center' center aligned grid>
        <Grid columns={1} padded width='twelve'>
          <Grid.Column>
            <p>project 1</p>
          </Grid.Column>
          <Grid.Column>
            <p>project 2</p>
          </Grid.Column>
          <Grid.Column>
            <p>project 3</p>
          </Grid.Column>


        </Grid>
      </Segment>
      <Link to='/contact'>
        <Button >Get in Contact</Button>
      </Link>
    </div>
    )
  }
}

export default Projects
