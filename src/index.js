import React, {Component}    from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
  render() {
    return (<h1>hello World</h1>);
  }
}


const app = document.querySelector('#app');
ReactDOM.render(<App />, app);