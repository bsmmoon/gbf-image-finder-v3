/*
 * Dialogue:
 * http://game-a.granbluefantasy.jp/assets_en/img/sp/quest/scene/character/body/3040053000.png
 * 
 * Characters:
 * http://game-a.granbluefantasy.jp/assets_en/img/sp/assets/npc/zoom/3040053000_01.png
 */
// const HOST="http://game-a.granbluefantasy.jp"
const HOST=process.env.IMAGE_PROXY_URL
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
  
  suffix += image.version === "01" ? "" :`_${image.version}`

  suffix += (!image.tag || image.tag === "default") ? "" : `_${image.tag}`

  return `${TYPE_DIALOGUE}/${image.id}${suffix}`
}

const playable = (image) => {
  let suffix = `${!!image.version ? `_${image.version}` : ''}`

  return `${TYPE_PLAYABLE}/${image.id}${suffix}`
}

export default UrlBuilder
