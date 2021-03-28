import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faClipboard,
  faEdit,
} from '@fortawesome/free-regular-svg-icons'

const make = (icon) => <FontAwesomeIcon icon={icon} />

export const clipboard = () => make(faClipboard)
export const edit = () => make(faEdit)

