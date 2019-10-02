import React from 'react'

import { Button } from 'semantic-ui-react'

import { Link } from 'react-router-dom'


class Projects extends React.Component {
  render(){
    return(
      <Link to='/contact'>
        <Button>Get in Contact</Button>
      </Link>
    )
  }
}

export default Projects
