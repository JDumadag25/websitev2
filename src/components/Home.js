import React from 'react'

class Home extends React.Component {

  

  render(){
    return(
    <div className='name'>
      <h1>Justin Dumadag</h1>
      <p>Software Engineer</p>
      <button onClick={this.props.handleClick}>Begin</button>
    </div>
    )
  }
}

export default Home
