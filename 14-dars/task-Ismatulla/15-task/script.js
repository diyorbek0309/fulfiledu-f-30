const allbtns = document.querySelector('.buttons')
const input = document.querySelector('input')
let isCalculationDone = false
allbtns.addEventListener('click', (e) => {
  const { value } = e.target

  if (e.target.classList.contains('buttons')) return
  if (value == 'AC') {
    const newValue = ''
    input.value = newValue
    return
  }
  if (value === '=') {
    console.log(value)
    const expression = input.value
    const result = eval(expression)
    input.value = result
    isCalculationDone = true
    return
  }
  if (isCalculationDone) {
    input.value = ''
    isCalculationDone = false
  }

  input.value += value
})