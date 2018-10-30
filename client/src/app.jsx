import React from 'react';
import ReactDOM from 'react-dom';
import CustomerReview from './components/CustomerReview.jsx';

class App extends React.Component {
    render() {
        return (<div><CustomerReview productId={1} /></div>)
    }
}

ReactDOM.render(<App />, document.getElementById('app'));