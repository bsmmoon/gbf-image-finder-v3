import {
  setImage,
  setSearch,
} from "../state/app"

import {
  characters,
  versions,
} from "../helpers/data"

import Tags from "../content/tags.json"

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
    case "NPC":
      search.id = "3050000000"
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

  dispatch(setSearch(search, { load: true }))
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

export const shiftImage = (dispatch, search, settings, shift) => {
  let list = characters(search.category, settings.sortById)
  let index = list.findIndex((e) => e.id === search.id)
  let character = list[index + shift]
  
  if (!character) return

  search.id = character.id
  dispatch(setSearch(search, { load: true }))
}

export const shiftImageId = (dispatch, search, shift) => {
  search.id = (parseInt(search.id) + parseInt(shift)).toString()
  dispatch(setSearch(search, { load: true }))
}

export const shiftTag = (dispatch, search, shift) => {
  let tags = ["default", ...Tags.list]
  let tag = tags[tags.indexOf(search.tag) + shift]
  if (!tag) return

  search.tag = tag
  dispatch(setSearch(search, { load: true }))
}

export const shiftVersion = (dispatch, search, shift) => {
  let version = versions[versions.findIndex((e) => e.value === search.version) + shift]
  if (!version) return

  search.version = version.value
  dispatch(setSearch(search, { load: true }))
}


