import {
  CLOSE_MODAL,
  OPEN_MODAL,
  SEARCH_ENTITIES,
  IS_LOADING
} from "../actionTypes";

export function openModal(mediaId) {
  return {
    type: OPEN_MODAL,
    payload: {
      mediaId
    }
  };
}

export function closeModal() {
  return {
    type: CLOSE_MODAL
  };
}
export function searchEntities(query) {
  return {
    type: SEARCH_ENTITIES,
    payload: {
      query
    }
  };
}

export function searchAsyncEntities(query) {
  return dispatch => {
    // fetch or XHR or traer .... callback
    dispatch(isLoading(true));
    setTimeout(() => {
      dispatch(isLoading(false));
      dispatch(searchEntities(query));
    }, 5000);
  };
}

export function isLoading(value) {
  return {
    type: IS_LOADING,
    payload: {
      value
    }
  };
}
