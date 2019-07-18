import React, {Component} from 'react';
import CardList from "./CardList/cardList";
import SearchBox from "./SearchBox/searchBox";
import './app.css';
import Scroll from "./scroll";
import ErrorBoundary from "./ErrorBoundary/errorBoundary";

class App extends Component{
  constructor() {
    super();
    this.state = {
      'robots': [],
      'searchField': ''
    }
  }

  onSearchChange = (event) => {
      this.setState({searchField: event.target.value})
  };

  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => {
        return users.map(user => {
          user['img'] = `https://robohash.org/${user.username}?200x200`;
          return user
        })})
      .then(users => this.setState({robots: users}));
  }

  render() {
    const filteredRobots = this.state.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase())
    });

    return (
      <div className='tc'>
        <h1>RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange}/>
        <ErrorBoundary>
          <CardList robots={filteredRobots}/>
        </ErrorBoundary>
      </div>
    )
  };
}

export default App;