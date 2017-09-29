
var percentCountries = function(total){
  //  console.log(Object.entries(countsProjects));
  var map = new Map(Object.entries(countryCount));
  var countryResults = []
  map.forEach(function(count_value, id){
   //console.log(id + " " + count_value)
    countryResults.push(
      { Country: id, percent: count_value *100 / total, total: total, proportion: count_value}
    );
  })
  //console.log(countryResults);
  return countryResults;
}


  var data = [{
    values: [100],
    labels: ['loading'],
    type: 'pie'
  }];

  //https://community.plot.ly/t/responsive-plotly-js-was-working-now-it-is-not/451/2

  var gd4 = d3.select("div[id='countriesChart']")
    .style({
      width: WIDTH_IN_PERCENT_OF_PARENT + '%',
      'margin-left': (100 - WIDTH_IN_PERCENT_OF_PARENT) / 2 + '%',
      height: HEIGHT_IN_PERCENT_OF_PARENT + 'vh',
      'margin-top': (100 - HEIGHT_IN_PERCENT_OF_PARENT) / 2 + 'vh'
  });

  var countriesChart = gd4.node()

  var countryCount = {}

  Plotly.plot(countriesChart, data)

  window.addEventListener('resize', function() { Plotly.Plots.resize(countriesChart); });

  var updateEveryMS = 3000;

  var interval = setInterval(function(){

    countryCounts(countryList)

var finalCountryPercentages = (percentCountries(total(countryList)))

  //  console.log(Object.entries(countryCount))
    var finalCountryPercentages = (percentCountries(total(countryCount)))
  //  console.log(countryCount)


    var countryPercentages = []
    var countryProjects = []

  //  console.log(countryCount)

    for (var i = 0; i < finalCountryPercentages.length; i++){
      var currentClassification = finalCountryPercentages[i]
    //  if (currentClassification['name'] != "unidentified") {
        countryPercentages.push(currentClassification['percent']);
        countryProjects.push(currentClassification['Country']);//}

    }


    var newData = {values:[countryPercentages], labels:[countryProjects]};
    //console.log(finalProjectPercentages)

    Plotly.restyle(countriesChart, newData, [0]);

  }, updateEveryMS);

  var resetCountries = setInterval(function(){
    countryList = [];
  },3000);
