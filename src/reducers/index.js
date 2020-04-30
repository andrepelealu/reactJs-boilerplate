import {combineReducers} from 'redux';

const yourreducer=(initialState=[], action)=>{
    if(action.type === 'YOUR_ACTION'){
        return action.data
    }

    return initialState
}

export default combineReducers({
    statename : yourreducer
})