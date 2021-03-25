/*
 * Dialogue:
 * http://game-a.granbluefantasy.jp/assets_en/img/sp/quest/scene/character/body/3040053000.png
 * 
 * Playable:
 * http://game-a.granbluefantasy.jp/assets_en/img/sp/assets/npc/zoom/3040053000_01.png
 */
const HOST="http://game-a.granbluefantasy.jp"
const REGION_JP="assets"
// const REGION_EN="assets_en"
const TYPE_DIALOGUE="quest/scene/character/body"
const TYPE_PLAYABLE="assets/npc/zoom"
const EXTENSION_PNG="png"

const UrlBuilder = (image) => { 
  return `${HOST}/${REGION_JP}/img/sp/${image.dialogue ? dialogue(image) : playable(image)
}.${EXTENSION_PNG}`
}

const dialogue = (image) => {
  let suffix = ""

  return `${TYPE_DIALOGUE}/${image.id}${suffix}`
}

const playable = (image) => {
  let suffix = `${!!image.uncap ? `_${image.uncap}` : ''}`

  return `${TYPE_PLAYABLE}/${image.id}${suffix}`
}

export default UrlBuilder
