import React from "react";
// console.log('Hola mundo!' )
import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";

import Home from "../pages/containers/home";
// import Playlist from './src/playlist/components/playlist';
//import data from "../api.json";]
import reducer from "../reducers/index";
import data from "../schemas/index";
import { Map as map } from "immutable";
// Logger with default options
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";

import thunk from "redux-thunk";

//console.log("data", data);
console.log("normalizedData", data);

// const initialState = {
// data: {
//   //...data
//   entities: data.entities,
//   categories: data.result.categories,
//   search: []
// },
// modal: {
//   visibility: false,
//   mediaId: null
// }
// //search: data.categories
// };
//const reducer = function(state, action) {};

// function logger({ getState, dispatch}) {
//   return (next) => {
//     return (action) => {
//       console.log('este es mi viejo estado', getState().toJS())
//       console.log('vamos a enviar está acción', action);
//       const value = next(action)
//       console.log('este es mi nuevo estado', getState().toJS())
//       return value
//     }
//   }
// }

const loggerCustomer = ({ getState, dispatch }) => next => action => {
  console.log("este es mi viejo estado", getState().toJS());
  console.log("vamos a enviar está acción", action);
  const value = next(action);
  console.log("este es mi nuevo estado", getState().toJS());
  return value;
};
const store = createStore(
  reducer,
  map(),
  composeWithDevTools(
    applyMiddleware(
      logger,
      //loggerCustomer
      thunk
    )
  )
  //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
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
