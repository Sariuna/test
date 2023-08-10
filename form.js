const formContent = document.querySelector('.js__form-content')

if (formContent) {
  const button = formContent.querySelector('.js__form-content-button')

  const inputs = formContent.querySelectorAll('input')

  const inputChangeHandler = (e) => {
    button.style.top = parseFloat(e.target.offsetTop) + "px"
    button.classList.add('active')
  }

  const buttonHandler = () => {
    console.log('test')
    button.classList.remove('active')
  }

  const hideButton = () => {
    button.classList.remove('active')
  }

  button.addEventListener('click', buttonHandler)


  inputs.forEach((input) => input.addEventListener('click', inputChangeHandler)
}


