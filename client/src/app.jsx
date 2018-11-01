import React from 'react';
import ReactDOM from 'react-dom';
import CustomerReviews from './components/CustomerReviews.jsx';

class App extends React.Component {
    render() {
        return (<div><CustomerReviews productId={1} /></div>)
    }
}

ReactDOM.render(<App />, document.getElementById('app'));