import {
  RELOAD_DATA,
  LOADED_DATA,
  RELOAD_CHILDREN,
  LOADED_CHILDREN,
  LOAD_USER
} from './types';


export const loadData = () => {
  return (dispatch) => {
  	dispatch({ type: RELOAD_DATA });

    fetch('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty')
    .then(data => data.json())
    .then(data => {
      for (var i = 0; i < 20; i++) {
        getElement(data[i], dispatch, LOADED_DATA);
      }
    });

  };
};

export const loadChildren = (childrenId) => {
  return (dispatch) => {  
    dispatch({ type: RELOAD_CHILDREN });
    loadChildrenElements(childrenId, dispatch);
  };
};

export const loadUser = (userId) => {
  return (dispatch) => {
    fetch('https://hacker-news.firebaseio.com/v0/user/'+userId+'.json?print=pretty')
    .then(data => data.json())
    .then(data => {
      dispatch({ type: LOAD_USER, payload: data });
    });

  };
};


function getElement(id, dispatch, type) {
  fetch('https://hacker-news.firebaseio.com/v0/item/'+id+'.json?print=pretty')
    .then(data => data.json())
    .then(data => {
      dispatch({ type, payload: data });
    });
}

function loadChildrenElements(childrenId, dispatch) {
  fetch('https://hacker-news.firebaseio.com/v0/item/'+childrenId+'.json?print=pretty')
    .then(data => data.json())
    .then(data => {
      console.log(data);
      if (data.kids) {
        data.kids.map(e => {
          loadChildrenElements(e, dispatch);
          getElement(e, dispatch, LOADED_CHILDREN);
        });
      }
    });
}