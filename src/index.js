let userInput;

const searchText = document.getElementById('input-text');
const submitBtn = document.getElementById('input-btn');
const shelf = document.getElementById('div-shelf');

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  console.log(userInput);
});

searchText.addEventListener('input', (e) => {
  userInput = searchText.value;
});
