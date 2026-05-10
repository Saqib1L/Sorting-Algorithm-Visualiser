const n = 10;
const array =[];

init();

function init() {
  for(let i = 0; i < n; i++) {
    array[i] = Math.random();
  }
  showBars();
}

function bubbleSort(array) {
  let swapped;
  const swaps = [];
  do {
    swapped = false;
    for(let i = 0; i < array.length - 1 ; i++) {
      if(array[i] > array[i+1]){
        let temp = array[i];
        array[i] = array[i+1];
        array[i+1] = temp;

        swapped = true;
        swaps.push([i, i+1]);
      }
    }
  } while(swapped)
  return swaps;
}

function play(){
 const copy = [...array]
 const swaps = bubbleSort(copy);
 animate(swaps)
}

function animate(swaps) {
  if(swaps.length == 0) {
    return;
  }

  const [i, j] = swaps.shift();
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;

  showBars();

  setTimeout(() => {
    animate(swaps);
  }, 200)
}


function showBars() {
  container.innerHTML = '';
  for(let i = 0; i < array.length ; i++) {
    const bar = document.createElement('div');

    bar.style.height =  array[i]*100+'%';
    bar.classList.add('bar');

    container.appendChild(bar);
  }
}