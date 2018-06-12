import React ,{Component} from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './store';
import Home from 'views/Home';

class Main extends Component {
    render(){
        return (
            <Provider store = {store}>
                <Home/>
            </Provider>
        )
    }
}

ReactDOM.render(<Main/>,document.getElementById('app'));
if(module.hot){
    module.hot.accept();
}