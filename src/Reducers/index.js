import userReducer from './userReducer';
import {combineReducers} from 'redux';
import ModalLoadingReducer from './ModalLoading';
import SnackReducer from './SnackReducer';
import ScreenInitReducer from './ScreenInit';
import languageReducer from './languageReducer';
import  CountReaducer from './CountReaducer';
import MyCartReaducer from './MyCartReducer';


// @ts-ignore
const rootReducer = combineReducers({
  userReducer,
  ModalLoadingReducer,
  SnackReducer,
  ScreenInitReducer,
  languageReducer,
  CountReaducer,
  MyCartReaducer
});

export default rootReducer;
