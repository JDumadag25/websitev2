import React from 'react'

import { Button, Segment, Grid } from 'semantic-ui-react'

import { Link } from 'react-router-dom'


class Projects extends React.Component {
  render(){
    return(
    <div>
      <Segment>
        <Grid columns={1} padded>
          <Grid.Column>
            <p>hello</p>
          </Grid.Column>
        
        </Grid>
      </Segment>
      <Link to='/contact'>
        <Button>Get in Contact</Button>
      </Link>
    </div>
    )
  }
}

export default Projects
