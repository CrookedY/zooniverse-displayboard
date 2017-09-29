var amount = document.getElementById('counter');
update();

function update(){
  amount.textContent ="Classifications since page load: " + counts.classificationCount;
}

console.log(counts.classificationCount)

  setInterval(function(){
    update();
},1000);
