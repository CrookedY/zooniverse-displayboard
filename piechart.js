var total = function (toCount) {
  return Object.values(toCount).reduce(function (a, b) {
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


  var data = [{
    values: [100],
    labels: ['loading'],
    type: 'pie'
  }];

  var gd4 = d3.select("div[id='piechart']")
    .style({
      width: WIDTH_IN_PERCENT_OF_PARENT + '%',
      'margin-left': (100 - WIDTH_IN_PERCENT_OF_PARENT) / 2 + '%',
      height: HEIGHT_IN_PERCENT_OF_PARENT + 'vh',
      'margin-top': (100 - HEIGHT_IN_PERCENT_OF_PARENT) / 2 + 'vh'
  });

  var piechart = gd4.node()

  Plotly.plot(piechart, data)

  window.addEventListener('resize', function() { Plotly.Plots.resize(piechart); });

  var updateEveryMS = 3000;

  var interval = setInterval(function(){


    //console.log(Object.entries(countsProjects))
    var finalProjectPercentages = (percentProjects(total(countsProjects)))

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

    Plotly.restyle(piechart, newData, [0]);


  }, updateEveryMS);
