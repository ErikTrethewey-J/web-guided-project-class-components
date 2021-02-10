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
    console.log("toggling", itemId);
    // find the item in the groceries array (this.state.groceries)
    const newGroceries = this.state.groceries.map(item => {
      if (itemId === item.id) {
        return {
          ...item,
          purchased: !item.purchased
        }
      }
      else { return item;}
    })

    // update state to toggle purchased on this item, but keep all of the other items the same
  }

  // Class methods to update state
  render() {
    return (
      <div className="App">
        <div className="header">
           <h1>Shopping List</h1>
           <ListForm />
         </div>
        <GroceryList togglePurchased={this.togglePurchased} groceries={this.state.groceries} />
       </div>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);