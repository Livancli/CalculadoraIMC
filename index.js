const firstDiv = document.querySelector('.first-step')
const secondDiv = document.querySelector('.second-step')
const finaldDiv = document.querySelector('.final-step')
//
//
//função para alternar de uma Div para outra
function go(currentStep, nextStep) {
  let dNone, dBlock
  if (currentStep == 1) {
    dNone = firstDiv
  } else if (currentStep == 2) {
    dNone = secondDiv
  } else {
    dNone = finaldDiv
  }
  dNone.style.display = 'none'

  if (nextStep == 1) {
    dBlock = firstDiv
  } else if (nextStep == 2) {
    dBlock = secondDiv
  } else {
    dBlock = finaldDiv
  }
  dBlock.style.display = 'block'
}
//
//
//função para validação de campo peso e altura
function validate() {
  const peso = document.getElementById('peso')
  const altura = document.getElementById('altura')
  peso.style.border = 'none'
  altura.style.border = 'none'

  if (!peso.value || !altura.value) {
    if (!peso.value && !altura.value) {
      peso.style.border = '2px solid red'
      altura.style.border = '2px solid red'
    } else if (!peso.value) {
      peso.style.border = '2px solid red'
    } else {
      altura.style.border = '2px solid red'
    }
    //
    //validação de Obesidade
  } else {
    let imc = peso.value / (altura.value * altura.value)
    const result = document.getElementById('resultado')

    if (imc < 18.5) {
      console.log('Magreza | Obesidade: 0')
      result.style.color = 'yellow'
      result.innerHTML = 'Magreza | Obesidade: 0'
    } else if (imc >= 18.5 && imc < 24.9) {
      console.log('Normal | Obesidade: 0')
      result.style.color = 'green'
      result.innerHTML = 'Normal | Obesidade: 0'
    } else if (imc >= 24.9 && imc < 29.9) {
      console.log('Sobrepeso | Obesidade: I')
      result.style.color = 'red'
      result.innerHTML = 'Sobrepeso | Obesidade: I'
    } else if (imc >= 29.9 && imc < 39.9) {
      console.log('Obesidade | Obesidade: II')
      result.style.color = 'red'
      result.innerHTML = 'Obesidade | Obesidade: II'
    } else {
      console.log('Obesidade Grave | Obesidade: III')
      result.style.color = 'red'
      result.innerHTML = 'Obesidade Grave | Obesidade: III'
    }
    go(2, 3)
  }
}
