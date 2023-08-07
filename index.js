const firstDiv = document.querySelector('.first-step')
const secondDiv = document.querySelector('.second-step')
const finaldDiv = document.querySelector('.final-step')
//
//função para alternar de uma Div para outra
function go(currentStep, nextStep) {
  let dNone, dBlock
  if (currentStep == 1) {
    dNone = firstDiv
  } else if (currentStep == 2) {
    dNone = secondDiv
  } else {
    dNone = finalDiv
  }
  dNone.style.display = 'none'

  if (nextStep == 1) {
    dBlock = firstDiv
  } else if (nextStep == 2) {
    dBlock = secondDiv
  } else {
    dBlock = finalDiv
  }
  dBlock.style.display = 'block'
}
