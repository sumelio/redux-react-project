import schema from "../schemas/index";
import { fromJS } from "immutable";

const initialState = fromJS({
  entities: schema.entities,
  categories: schema.result.categories,
  search: ""
});

function data(state = initialState, action) {
  switch (action.type) {
    case "SEARCH_ENTITIES":
      {
        // return {
        //   ...state,
        //   search: findByAuthor(state, action.payload.query)
        // };
      }
      return state.set("search", action.payload.query);
    default:
      return state;
  }
}

const findByAuthor = (state, query) =>
  state.data.categories.map(item => {
    return {
      ...item,
      playlist: item.playlist.filter(
        file =>
          !query || file.author.toLowerCase().includes(query.toLowerCase())
      )
    };
  });

export default data;
