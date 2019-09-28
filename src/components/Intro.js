import React from 'react'

import { Container, Segment, Icon } from 'semantic-ui-react'

class Intro extends React.Component {

  render(){
    return(
      <div className='introduction'>
      <Container textAlign='center'>
        <h2>Who I am?</h2>
          <p>I build interactive and beautiful web pages and software with a goal of making the world a little better off.</p>
      </Container>

      <Container textAlign='center'>
        <h3>Skills</h3>
        <Segment.Group horizontal>
        <Segment> <Icon name='code'/> </Segment>
        <Segment> <Icon name='code'/> </Segment>
        <Segment> <Icon name='code'/> </Segment>
      </Segment.Group>
    </Container>
</div>
    )
  }
}

export default Intro
