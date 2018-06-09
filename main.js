import { html, render } from './bem/Lib/lit-html.js'
import tableTemplate from './bem/Table/Table.js'

const matrixContainer = document.querySelector('#matrix')
const spiralContainer = document.querySelector('#spiral')
const dimensionInput = document.querySelector('#dimension')
const orderInput = document.querySelector('#order')
const button = document.querySelector('#button')

const getRandom = (maxOrder) => Math.floor(Math.random() * 10 ** maxOrder)

const fillArray = (param, arrayLength, isMatrix) => {
  const result = []
  for (let i = 0; i < arrayLength; i++) {
    let arrayItem = isMatrix ? fillArray(param, arrayLength) : getRandom(param)
    result.push(arrayItem)
  }
  return result
}

const renderResult = () => {
  const numbersOrder = orderInput.value
  const matrixDimension = dimensionInput.value
  const matrixArray = fillArray(numbersOrder, matrixDimension, true)
  render(tableTemplate(matrixArray), matrixContainer)
}

renderResult()
button.addEventListener('click', () => { renderResult() })
