import { createStore, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk'
import { devToolsEnhancer } from 'redux-devtools-extension';
import { answerQuiz } from './reducers/index'


export default compose(applyMiddleware(thunk))(createStore)(answerQuiz)