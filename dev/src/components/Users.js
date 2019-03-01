import React from 'react';
import axios from 'axios';
import requiresAuth from './requiresAuth';

class Jokes extends React.Component {
  state = {
    jokes: [],
  };

  render() {
    return (
      <>
        <h2>Jokes</h2>
          {this.state.jokes.map(jokes => {
            return <p>{jokes.joke}</p>
          })}
      </>
    );
  }

  componentDidMount() {
    axios.get('http://localhost:5000/api/jokes').then(res => {
      this.setState({ jokes: res.data });
    });
  }
}

export default requiresAuth(Jokes);
