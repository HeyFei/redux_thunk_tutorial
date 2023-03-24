import {combineReducers} from 'redux';
import {movieList, movieDetail}  from './movies';

const reducers = combineReducers({
    movieList,
    movieDetail
})

export default reducers;