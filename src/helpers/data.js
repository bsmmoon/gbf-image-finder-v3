
import _ from "lodash"

import Characters from "../content/characters.json"

// hardcode since it's just few
export const categories = ["R", "SR", "SSR", "NPC"]

export const characters = (category, byName=true) => _.map(characterIds(category, byName), (id) => ({ id, name: Characters[category][id] }))

export const characterIds = (category, byName=false) => {
  return _.keys(Characters[category]).sort(byName ? (a, b) =>  Characters[category][a].localeCompare(Characters[category][b]) : (a, b) => a - b)
}

