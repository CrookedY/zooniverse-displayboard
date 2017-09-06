var data = [{
       type: 'scattergeo',
       mode: 'markers',
       lon: [
           -73.57
       ],
       lat: [
           45.5
       ],
       marker: {
           size: 7,
           line: {
               width: 1
           }
       },
       name: 'Classification',
   }];

   var layout = {
       title: 'Classification',
       font: {
           family: 'Droid Serif, serif',
           size: 6
       },
       titlefont: {
           size: 16
       },
       height: 1000,
       width: 1000,
       geo: {
           scope: 'world',
           resolution: 50,
           lonaxis: {
               'range': [-179, 179]
           },
           lataxis: {
               'range': [-179, 179]
           },
           showrivers: true,
           rivercolor: '#fff',
           showlakes: true,
           lakecolor: '#fff',
           showland: true,
           landcolor: '#EAEAAE',
           countrycolor: '#d3d3d3',
           countrywidth: 1.5,
           subunitcolor: '#d3d3d3'
       }
   };

Plotly.newPlot('graph', data, layout);


var updateEveryMS = 4000;

var interval = setInterval(function(){
  //console.log(lattitudes);
  // single series classification count
  // https://plot.ly/javascript/plotlyjs-function-reference/#plotlyextendtraces

//https://stackoverflow.com/questions/32116368/plotly-update-data
  var newLocations = {lat: [lattitudes], lon: [longitudes]};
  console.log(newLocations)
  // {
  //     data[0]['y'][0] = value;
  //     Plotly.redraw('PlotlyTest');

  Plotly.restyle('graph', newLocations, [0]);

  lattitudes = []
  longitudes = []

}, updateEveryMS);



/////need to get it to update but extend traces doesn't work. plotly restlyle?

//


//reset data
