function data(state, action) {
  switch (action.type) {
    case "SEARCH_VIDEO": {
      return {
        ...state,
        search: findByAuthor(state, action.payload.query)
      };
    }
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
