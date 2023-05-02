import{createStore} from 'redux';
import { reducer } from './tokens/TokensReducer';

const store = createStore(reducer);

export default store;