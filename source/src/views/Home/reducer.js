import {fromJS} from 'immutable';

const initialState = fromJS({
    number:0
})

const reducer = {
    ADD(state,number){
        return state.set('number',state.get('number')+number);
    }
}

const homeReducer = (state = initialState,action)=>{
    if(reducer[action.type]){
        return reducer[action.type](state,action.param);
    }else{
        return state;
    }
}
export default homeReducer