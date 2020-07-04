
const DEFAULT = {
  id: "3040053000",
  category: "SSR",
  uncap: "01"
}

const initialState = {
  debug: false,
  searchById: false,
  search: JSON.parse(JSON.stringify(DEFAULT)),
  image: JSON.parse(JSON.stringify(DEFAULT))
}

// ACTIONS

const SET_DEBUG = "SET_DEBUG"
export const setDebug = (debug)  => ({
  type: SET_DEBUG, debug
})

const SET_SEARCH_BY_ID = "SET_SEARCH_BY_ID"
export const setSearchById = (searchById) => ({
  type: SET_SEARCH_BY_ID, searchById
})

const SET_SEARCH = "SET_SEARCH"
export const setSearch = (search, key, value) => {
  search[key] = value
  return { type: SET_SEARCH, search }
}

const SET_IMAGE = "SET_IMAGE"
export const setImage = (search) => ({
  type: SET_IMAGE, search
})

// REDUCER

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_DEBUG:
      return { ...state, debug: action.debug }
    case SET_SEARCH_BY_ID:
      return { ...state, searchById: action.searchById }
    case SET_SEARCH:
      return { ...state, search: action.search }
    case SET_IMAGE:
      return { ...state, image: action.search }
    default:
      return state
  }
}

