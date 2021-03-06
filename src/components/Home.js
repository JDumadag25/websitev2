import React from 'react'
import { Header, Button, Container, Divider } from 'semantic-ui-react'
import { Link, Route } from 'react-router-dom';

class Home extends React.Component {


  render(){
    return(
      <Container text textAlign='center'>
        <Header
          as='h1'
          content='Justin Dumadag'
          style={{
            fontWeight: 'normal',
            marginBottom: 0,
            paddingTop: '200px'
          }}
        />
      <Divider/>
        <Header
          as='h3'
          content='Software Engineer'
          style={{
            fontWeight: 'normal',
            paddingBottom: '25px'
          }}
        />
      <Link to='about'>
      <Button>Begin</Button>
      </Link>
      </Container>
    )
  }
}

export default Home
