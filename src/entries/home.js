import React from "react";
// console.log('Hola mundo!' )
import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import { createStore } from "redux";

import Home from "../pages/containers/home";
// import Playlist from './src/playlist/components/playlist';
import data from "../api.json";
import reducer from "../reducers/data";

console.log("data", data);

const initialState = {
  data: {
    ...data
  },
  search: data.categories
};
//const reducer = function(state, action) {};

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

console.log(store.getState());

const homeContainer = document.getElementById("home-container");

// ReactDOM.render(que voy a renderizar, donde lo haré);
// const holaMundo = <h1>hola Estudiante!</h1>;

ReactDOM.render(
  <Provider store={store}>
    <Home />
  </Provider>,
  homeContainer
);
