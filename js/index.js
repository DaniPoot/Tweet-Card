const $heart1 = document.getElementById('heart-1')
const $heart2 = document.getElementById('heart-2')
const $heart3 = document.getElementById('heart-3')
const $value = document.getElementById('value')


$heart1.addEventListener('click', () => {
  $heart1.classList.toggle('transparent')
  $heart1.classList.toggle('z')

  $heart2.classList.toggle('transparent')
  $value.classList.toggle('value-color')

  $heart3.classList.toggle('transparent')
  $heart3.classList.toggle('z')
  $heart2.classList.toggle('transparent')
})

$heart3.addEventListener('click', () => {
  $heart3.classList.toggle('transparent')
  $heart3.classList.toggle('z')

  $heart2.classList.toggle('transparent')
  $value.classList.toggle('value-color')

  $heart1.classList.toggle('transparent')
  $heart1.classList.toggle('z')
  $heart2.classList.toggle('transparent')
})