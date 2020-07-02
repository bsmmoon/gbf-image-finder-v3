/*
 * Quest:
 * http://game-a.granbluefantasy.jp/assets_en/img/sp/quest/scene/character/body/3040053000.png
 * 
 * Playable:
 * http://game-a.granbluefantasy.jp/assets_en/img/sp/assets/npc/zoom/3040053000_01.png
 */

const HOST="http://game-a.granbluefantasy.jp"
const REGION_JP="assets"
// const REGION_EN="assets_en"
const TYPE_QUEST="quest/scene/character/body"
// const TYPE_PLAYABLE="assets/npc/zoom"
const EXTENSION_PNG="png"

const UrlBuilder = ({ id, tag }) => {
  let url=`${HOST}/${REGION_JP}/img/sp/${TYPE_QUEST}/${id}${!!tag ? `_${tag}` : ''}.${EXTENSION_PNG}`
  return url
}

export default UrlBuilder

