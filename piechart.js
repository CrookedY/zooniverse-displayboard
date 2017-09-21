var total = function () {
  return Object.values(countsProjects).reduce(function (a, b) {
    return a + b; }, 0);
  }
//console.log(total)

var percentProjects = function(total){
  //  console.log(Object.entries(countsProjects));
  var map = new Map(Object.entries(countsProjects));
  var results = []
  map.forEach(function(count_value, id){
    //console.log(id + " " + count_value)
    results.push(
      { name: id, percent: count_value *100 / total, total: total, proportion: count_value}
    );
  })
//  console.log(results);
  return results;
}

//   return Object.entries(countsProjects).(function(project_id, countsofprojects) {
//     resultObj = {};
//     resultObj[project_id] = { percent: countsofprojects *100 / total, total: total, proportion: countsofprojects} ;
//     return resultObj;
//   })
// }

// var percentProjects = Object.keys(countsProjects).reduce(function(previous, current) {
//     previous[current] = countsProjects[current] / total * 100
//   return classificationcount / total * 100.0
// })


  var data = [{
    values: [100],
    labels: ['loading'],
    type: 'pie'
  }];

  Plotly.plot('piechart', data)

  var updateEveryMS = 3000;

  var interval = setInterval(function(){


    //console.log(Object.entries(countsProjects))
    var finalProjectPercentages = (percentProjects(total()))

    var percentages = []
    var projects = []

    for (var i = 0; i < finalProjectPercentages.length; i++){
      var currentClassification = finalProjectPercentages[i]
    //  if (currentClassification['name'] != "unidentified") {
        percentages.push(currentClassification['percent']);
        projects.push(currentClassification['name']);//}

    }

    console.log(percentages)
    console.log(projects)

    var newData = {values:[percentages], labels:[projects]};
    //console.log(finalProjectPercentages)

    Plotly.restyle('piechart', newData, [0]);


  }, updateEveryMS);
