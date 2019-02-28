import React from 'react';
import axios from 'axios';
import requiresAuth from './requiresAuth';

class Users extends React.Component {
  state = {
    users: [],
  };

  render() {
    return (
      <>
        <h2>List of Users</h2>
        <ul>
          {this.state.users.map(u => (
            <li key={u.id}>{u.username}</li>
          ))}
        </ul>
      </>
    );
  }

  componentDidMount() {
    axios.get('http://localhost:3300/api/users').then(res => {
      this.setState({ users: res.data.users });
    });
  }
}

export default requiresAuth(Users);
