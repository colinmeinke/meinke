import config from '../../config/style'
import css from 'next/css'

const { brandColor3 } = config

const main = css({ background: brandColor3, height: '44px' })

export default { main }
