import { html } from 'https://unpkg.com/lit-html?module'
import trTemplate from './-Row/Table-Row.js'

const tableTemplate = (arr) => html`
  <table class='Table'>${arr.map(trTemplate)}</table>
`

export default tableTemplate
