import parse from 'html-react-parser'
import { decode } from 'html-entities'

const ParseHtml = ({ html }) => parse(decode(html))

export default ParseHtml
