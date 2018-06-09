const getRandom = (maxOrder) => Math.floor(Math.random() * 10 ** maxOrder)

const fillArray = (param, arrayLength, isMatrix) => {
  const result = []
  for (let i = 0; i < arrayLength; i++) {
    let arrayItem = isMatrix ? fillArray(param, arrayLength) : getRandom(param)
    result.push(arrayItem)
  }
  return result
}

const passSpirally = (matrix) => {
  let row = (matrix.length - 1) / 2
  let col = (matrix.length - 1) / 2
  const result = []
  const writeValue = () => {
    result.push(matrix[row][col])
  }
  writeValue()
  for (let i = 1; i <= matrix.length; i++) {
    let steps = i
    let isStepsOdd = steps % 2 !== 0
    let step = isStepsOdd ? -1 : 1
    const stepOnCol = () => {
      for (let i = 0; i < steps; i++) {
        col = col + step
        writeValue()
      }
    }
    const stepOnRow = () => {
      for (let i = 0; i < steps; i++) {
        row = row - step
        writeValue()
      }
    }
    if (steps === matrix.length) {
      steps--
      stepOnCol()
      return result
    }
    stepOnCol()
    stepOnRow()
  }
}

export { fillArray, passSpirally }
