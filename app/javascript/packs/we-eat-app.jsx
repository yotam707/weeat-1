import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux';
import App from './containers/App';
import store from './store';

class WeEatApp extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Provider store={store}>
                <App/>
            </Provider>
        );
    }
}

ReactDOM.render(
  <WeEatApp />,
  document.body.appendChild(document.getElementById('root')),
);