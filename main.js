const getRandomArbitrary = () => {
   return Math.floor(Math.random() * 200);
}

const getAdvice = () => {
   const advice = document.querySelector('.adviceBox__advice')
   const adviceNumber = document.querySelector('.adviceBox__number')
   const url = `https://api.adviceslip.com/advice/${getRandomArbitrary()}`
   fetch(url)
      .then(response => {
         return response.json()
      })
      .then(json => {
         adviceNumber.textContent = json.slip.id
         advice.textContent = `“${json.slip.advice}”`
      })
      .catch(err => console.log(err))
}

document.querySelector('.adviceBox__button').addEventListener('click', getAdvice)
window.onload = getAdvice()