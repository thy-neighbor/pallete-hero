import {createStore} from 'redux'
import {paletteHeroReducer} from './reducers/reducers'

export default createStore(paletteHeroReducer);