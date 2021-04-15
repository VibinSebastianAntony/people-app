import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { Search } from './components/search/search.component';
import '../src/App.css'


class App extends Component {
    state = {
        monsters: [],
        searchField:''
        
    }
    
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ monsters: users }));
    }
    render() {

        const { monsters, searchField } = this.state;
        const filteredMonsters = monsters.filter(monster =>
            monster.name.toLowerCase().includes(searchField.toLowerCase())
        );

        return (

            <div className='app'>
                <h1>Welcome People</h1>
                <Search
                    placeholder='Search'
                    handleChange={e => {
                        this.setState({ searchField: e.target.value })
                    }}
                />
                <CardList name={filteredMonsters}></CardList>
            </div>
                
            
         );
    }   
}

 
export default App;
