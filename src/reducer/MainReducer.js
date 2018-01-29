import {
  LOADED_DATA,
  LOADED_CHILDREN,
  RELOAD_DATA,
  RELOAD_CHILDREN,
  LOAD_USER
} from '../action/types';

const INITIAL_STATE = {
  chapter: "00",
  heading: "00",
  subheading: "00"
};

export default (state = INITIAL_STATE, action) => {
	console.log(action);
  switch (action.type) {
    case LOADED_DATA:
      return { ...state, data: [...state.data, action.payload], loading: false };
    case LOADED_CHILDREN:
      return { ...state, children: [...state.children, action.payload], loading: false };
    case RELOAD_DATA:
      return { ...state, data: [], loading: false };
    case RELOAD_CHILDREN:
      return { ...state, children: [], loading: false };
    case LOAD_USER:
      return { ...state, user: action.payload, loading: false };        
    default:
      return state;
  }
};