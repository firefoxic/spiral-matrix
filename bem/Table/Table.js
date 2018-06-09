import { html } from '../Lib/lit-html.js'
import trTemplate from './-Row/Table-Row.js'

const tableTemplate = (arr) => html`
  <table class='Table'>${arr.map(trTemplate)}</table>
`

export default tableTemplate
