import {combineReducers} from 'redux';
import weatherReducer from './reducer_weater';
const rootReducer=combineReducers({
	weather:weatherReducer
})

export default rootReducer;