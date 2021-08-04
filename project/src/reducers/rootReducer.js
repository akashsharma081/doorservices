import {loading} from './loadingReducer';
import { cart } from './CartReducer';
import { user } from './UserReducer';

import {combineReducers} from 'redux'

var rootReducer = combineReducers({loading,user,cart});

