import { MdiIconType } from "./mdiIconTypes"
import * as Icons from 'mdi-material-ui'

export const getMdiIcon = (mdiIcon?: string) : MdiIconType => {
  // @ts-ignore
  return Icons[mdiIcon] || Icons.HelpCircleOutline
}