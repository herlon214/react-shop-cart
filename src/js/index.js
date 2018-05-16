import React, {Component}    from 'react';
import ReactDOM from 'react-dom';
import ProductDashboard from './components/productDashboard';


class App extends Component {
  render() {
    return(
      <div className="grey  blue-grey lighten-4">
        <ProductDashboard />    
      </div>

    )
  }
}


const app = document.querySelector('#app');
ReactDOM.render(<App />, app);