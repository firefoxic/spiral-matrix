import { html } from '../../Lib/lit-html.js'

const tdTemplate = (cellContent) => html`
  <td class='Table-Cell'>${cellContent}</td>
`

export default tdTemplate
