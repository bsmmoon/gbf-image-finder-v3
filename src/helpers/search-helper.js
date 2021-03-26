import {
  setImage,
  setSearch,
} from "../state/app"

import Playable from "../content/playable.json"
import Tags from "../content/tags.json"

import _ from "lodash"

// Set default values when category changes
export const onCategoryChange = (search, value) => {
  switch (value) {
    case "R":
      search.id = "3020016000"
      break
    case "SR":
      search.id = "3030019000"
      break
    case "SSR":
      search.id = "3040040000"
      break
    default:
  }
  return search
}

export const handleChange = (dispatch, search, event) => {
  search = JSON.parse(JSON.stringify(search))
  
  const name = event.target.name
  const value = event.target.value
  
  search[name] = value

  switch(name) {
    case "category":
      search = onCategoryChange(search, value)
      break
    default:
  }

  dispatch(setSearch(search))
}

export const submit = (dispatch, search, image, event) => {
  event.preventDefault()
  if (JSON.stringify(search) === JSON.stringify(image)) return
  dispatch(setImage(search))
}

export const toggleDialogue = (dispatch, search, shift) => {
  search.dialogue = !search.dialogue
  dispatch(setSearch(search, { load: true }))
}

export const shiftImage = (dispatch, search, shift) => {
  let ids = _.keys(Playable[search.category])
  let id = ids[ids.indexOf(search.id) + shift]
  if (!id) return

  search.id = id
  dispatch(setSearch(search, { load: true }))
}

export const shiftTag = (dispatch, search, shift) => {
  let tags = ["default", ...Tags.list]
  let tag = tags[tags.indexOf(search.tag) + shift]
  if (!tag) return

  search.tag = tag
  dispatch(setSearch(search, { load: true }))
}

export const shiftUncap = (dispatch, search, shift) => {
  let uncaps = ["01", "02", "03"]
  let uncap = uncaps[uncaps.indexOf(search.uncap) + shift]
  if (!uncap) return

  search.uncap = uncap
  dispatch(setSearch(search, { load: true }))
}


