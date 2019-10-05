import React from 'react'

import { Container, Segment, Icon, Button, Grid } from 'semantic-ui-react'

import { Link } from 'react-router-dom'

class Intro extends React.Component {

  render(){
    return(

      <Container textAlign='center'>
        <Grid columns={2} divided>
          <Grid.Column>
        <h2>Who I am?</h2>
          <p>I build interactive and beautiful web pages and software with a goal of making the world a little better off.</p>
          </Grid.Column>
          <Grid.Column>
        <h3>Skills</h3>

      <Segment.Group horizontal>
        <Segment> <Icon name='code'/> </Segment>
        <Segment> <Icon name='code'/> </Segment>
        <Segment> <Icon name='code'/> </Segment>
      </Segment.Group>
  </Grid.Column>

      <Link to='/projects'>
        <Button>Check out my projects</Button>
      </Link>

      </Grid>
    </Container>

    )
  }
}

export default Intro
