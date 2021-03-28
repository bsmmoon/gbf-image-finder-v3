
import _ from "lodash"

import Characters from "../content/characters.json"

// hardcode since it's just few
export const categories = ["R", "SR", "SSR", "NPC"]

export const characters = (category, byId=false) => _.map(characterIds(category, byId), (id) => ({ id, name: Characters[category][id] }))

export const characterIds = (category, byId=false) => {
  return _.keys(Characters[category]).sort(byId ? (a, b) => a - b : (a, b) =>  Characters[category][a].localeCompare(Characters[category][b]))
}

export const versions = [
  { label: "★", value: "01" },
  { label: "★★", value: "02" },
  { label: "★★★", value: "03" },
  { label: "School", value: "school" },
  { label: "Race", value: "race" },
]

