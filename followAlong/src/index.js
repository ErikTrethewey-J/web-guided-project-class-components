import React from 'react';
import ReactDOM from 'react-dom';

import GroceryList from './components/GroceryList';
import ListForm from './components/ListForm';
import './styles.scss';

const groceries = [
  {
    name: 'Bananas',
    id: 123,
    purchased: false
  },
  {
    name: 'Torillas',
    id: 124,
    purchased: false
  },
  {
    name: 'Milk',
    id: 1235,
    purchased: false
  },
  {
    name: 'Pizza Sauce',
    id: 1246,
    purchased: false
  },
  {
    name: 'Raw Honey',
    id: 1237,
    purchased: false
  },
  {
    name: 'Granola',
    id: 1248,
    purchased: false
  }
];

class App extends React.Component {
  // Constructor with state
  constructor() {
    super();
    this.state = {
      groceries: groceries
    }
  }

  togglePurchased = (itemId) => {
    // iterate through the groceries array (this.state.groceries) to toggle only the item in question
    const newGroceries = this.state.groceries.map(item => {
      if (itemId === item.id) {
        return {
          ...item,
          purchased: !item.purchased
        }
      }
      else { return item;}
    })
    // update "groceries" state value to this new array
    this.setState({
      ...this.state,
      groceries: newGroceries
    })
  }

  addItem = (itemName, e) => {
    e.preventDefault();
    const newItem = {
      id: Date.now(),
      name: itemName,
      purchased: false
    }
    this.setState({
      ...this.state,
      groceries: [...this.state.groceries, newItem]
    })
  }

  clearPurchased = () => {
    console.log('clearing purchased items');
  }

  // Class methods to update state
  render() {
    return (
      <div className="App">
        <div className="header">
           <h1>Shopping List</h1>
          <ListForm addItem={this.addItem} />
         </div>
        <GroceryList clearPurchased={this.clearPurchased} togglePurchased={this.togglePurchased} groceries={this.state.groceries} />
       </div>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);