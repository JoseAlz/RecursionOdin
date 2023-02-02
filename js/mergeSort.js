const mergeSortInput = document.querySelector('.mS-input');
const mergeSortOutput = document.querySelector('.mS-output');
const mergeSortResult = document.querySelector('.mS-results');
const mergeSortButton = document.querySelector('.mS-butt');
const stat = document.querySelector('.status');

//mergeSort

mergeSortInput.addEventListener('change', addValues);
let arr = [];
mergeSortButton.addEventListener('click', mergeSortInit);

function addValues() {
  mergeSortOutput.innerHTML = '';
  arr = [];

  for(let i = 1; i <= mergeSortInput.value; i++) {
    const div = document.createElement('div');
    div.textContent = randomValue();
    arr.push(div.textContent);
    mergeSortOutput.appendChild(div);
  }
}

function randomValue() {
  return Math.floor(Math.random() * 100)
}

function mergeSortInit() {
  mergeSortResult.textContent = mergeSort(arr);
}

function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  } 

  const half = Math.ceil(arr.length / 2); 
  
  let arrA = arr.slice(0, half);
  let arrB = arr.slice(half);

  return merge(mergeSort(arrA), mergeSort(arrB))
  
}

function merge(left, right) {
  let arr = [];

  while (left.length > 0 && right.length > 0) {
    
    if (parseInt(left[0]) < parseInt(right[0])) {
      arr.push(left.shift())
    } else {
      arr.push(right.shift())
    }
  }
  
  return [...arr, ...left, ...right];
}



