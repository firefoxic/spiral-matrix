import { html, render } from './bem/Lib/lit-html.js'
import { fillArray, passSpirally } from './bem/Root/Root.js'
import tableTemplate from './bem/Table/Table.js'

const matrixContainer = document.querySelector('#matrix')
const spiralContainer = document.querySelector('#spiral')
const dimensionInput = document.querySelector('#dimension')
const orderInput = document.querySelector('#order')
const button = document.querySelector('#button')

const spiralTemplate = (str) => html`
  <p>${str}</p>
`

const renderResult = () => {
  const numbersOrder = orderInput.value
  const matrixDimension = dimensionInput.value
  const matrixArray = fillArray(numbersOrder, matrixDimension, true)
  const spiralArray = passSpirally(matrixArray)
  const spiralString = spiralArray.join(', ')
  render(tableTemplate(matrixArray), matrixContainer)
  render(spiralTemplate(spiralString), spiralContainer)
}

renderResult()
button.addEventListener('click', () => { renderResult() })
