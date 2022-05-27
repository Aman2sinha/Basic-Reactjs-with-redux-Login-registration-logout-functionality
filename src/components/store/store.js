import {createStore} from 'redux';

import PostReducer from '../reducer/PostReducer';

export const store = createStore(PostReducer);
