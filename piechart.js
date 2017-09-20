var total = 0;
var percentProjects = []


//
// for (var i = 0; i < countsProjects.length; i++){
//   percentProjects.push(countsProjects[i] = (countsProjects[i] / total * 100));
// }


for(var i in countsProjects){
  total += parseInt(countsProjects[i]);
  }

for (var i in countsProjects){
  percentProjects.push(countsProjects[i] = (percentProjects[i] / total * 100))
  };


  var data = [{
    values: [19, 26, 55],
    labels: ['Residential', 'Non-Residential', 'Utility'],
    type: 'pie'
  }];

  Plotly.plot('piechart', data)

  var updateEveryMS = 3000;

  var interval = setInterval(function(){

    var newData = {values:percentages, labels:projects};
    console.log()

    Plotly.restyle('graph', newData, [0]);


  }, updateEveryMS);
