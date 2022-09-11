import { Component } from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component';


class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField:''
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(
        (users) => this.setState(() => {
          return { monsters: users }
        }
        ));
  }
  onSearchChange=(event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchField};
    })
  }

  render() {
    const filteredMonsters = this.state.monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(this.state.searchField);
    })
    return (
      <div className="App">
        <input className='search-box' type='search' placeholder='Search Monster'
          onChange={this.onSearchChange}
        />
        {/* {filteredMonsters.map((monster) => {
          return (
            <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
          );
        }) */}
        {/* } */}
        <CardList/>
      </div>
    );
  }
}



export default App;
