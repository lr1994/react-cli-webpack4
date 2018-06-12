import React,{Component} from 'react';
import * as actionCreators from './actions';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {autobind} from 'core-decorators';

@autobind
class Home extends Component{

    addNumber(){
        this.props.add(2)
    }
    render(){
        const {number} = this.props;
        // console.log(number);
        return (
            <div>
                This is my app home.<br/>
                <button onClick={this.addNumber}>click to add number</button>:
                <label>{number}</label>
            </div>
        )
    }
}

const mapStoreToProps = (state) =>{
    return state.homeReducer.toJS();
}

const mapDispatchProps = (dispatch)=>{
    return bindActionCreators(actionCreators,dispatch);
}

export default connect(mapStoreToProps,mapDispatchProps)(Home);