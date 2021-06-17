let counterValue = 0;

const counterDOM = document.querySelector('.counter');

const increamentDOM = document.querySelector('#inc');
const decreamentDOM = document.querySelector('#dec');

increamentDOM.addEventListener('click', changeVariable);
decreamentDOM.addEventListener('click', changeVariable);

function changeVariable(){
  this.id == "inc" ? ++counterValue : --counterValue;
  counterDOM.innerHTML = counterValue;
}

