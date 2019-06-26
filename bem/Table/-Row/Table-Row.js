import { html } from 'https://unpkg.com/lit-html?module'
import tdTemplate from '../-Cell/Table-Cell.js'

const trTemplate = (arr) => html`
  <tr class='Table-Row'>${arr.map(tdTemplate)}</tr>
`

export default trTemplate
