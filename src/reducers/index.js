import  {combineReducers}  from 'redux';
 import mainReducer from './main';

 const rootReducers = hisroty => combineReducers({
    main: mainReducer,
 });
export default rootReducers;