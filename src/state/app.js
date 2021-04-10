import UrlBuilder from "../helpers/url-builder"

const DEFAULT_SEARCH = {
  id: "3040120000",
  category: "SSR",
  version: "01",
  dialogue: false,
  tag: "default",
}

const DEFAULT_SETTINGS = {
  searchById: false,
  searchTag: false,
  sortById: false,
}

const initialState = {
  debug: false,
  loading: false,
  notFound: false,
  search: JSON.parse(JSON.stringify(DEFAULT_SEARCH)),
  url: UrlBuilder(DEFAULT_SEARCH),
  settings: { ...DEFAULT_SETTINGS }
}

// ACTIONS

const SET_DEBUG = "SET_DEBUG"
export const setDebug = (debug)  => ({
  type: SET_DEBUG, debug
})

const SET_LOADING = "SET_LOADING"
export const setLoading = (loading) => ({
  type: SET_LOADING, loading
})

const SET_NOT_FOUND = "SET_NOT_FOUND"
export const setNotFound = (notFound) => ({
  type: SET_NOT_FOUND, notFound
})

const SET_SEARCH = "SET_SEARCH"
export const setSearch = (search, options={}) => {
  search = JSON.parse(JSON.stringify(search))
  return { type: SET_SEARCH, search, options }
}

const SET_SETTINGS = "SET_SETTINGS"
export const setSettings = (settings, options={}) => {
  settings = JSON.parse(JSON.stringify(settings))
  return { type: SET_SETTINGS, settings, options }
}

const SET_IMAGE = "SET_IMAGE"
export const setImage = (search) => ({
  type: SET_IMAGE, search
})

const SET_STATE = "SET_STATE"
export const setState = (state) => ({
  type: SET_STATE, state
})

// REDUCER

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_DEBUG:
      return { ...state, debug: action.debug }
    case SET_LOADING:
      return { ...state,
        loading: action.loading,
        notFound: false
      }
    case SET_NOT_FOUND:
      return { ...state,
        notFound: action.notFound,
        loading: false
      }
    case SET_SEARCH:
      let search = action.search

      if (action.options.load) {
        return { ...state, search,
          url: UrlBuilder(search),
          loading: true,
          notFound: false
        }
      } else {
        return { ...state, search }
      } 
    case SET_SETTINGS:
      return { ...state, settings: action.settings }
    case SET_STATE:
      return { ...state, ...action.state }
    default:
      return state
  }
}

