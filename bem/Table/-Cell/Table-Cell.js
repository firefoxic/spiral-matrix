import { html } from 'https://unpkg.com/lit-html?module'

const tdTemplate = (cellContent) => html`
  <td class='Table-Cell'>${cellContent}</td>
`

export default tdTemplate
