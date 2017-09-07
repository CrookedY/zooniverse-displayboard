var data = [{
       type: 'scattergeo',
       mode: 'markers+text',
       text:['test'],
       textposition: 'topright',
       textfont: {
       family: 'sans serif',
       size: 18,
       color: '#1f77b4'
        },
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
           showrivers: false,
           showlakes: true,
           lakecolor: '#fff',
           showland: true,
           landcolor: 'rgba(198,205,197,1)',
           showcountries: true,
           countrycolor: '#d3d3d3',
           countrywidth: 1.5,
           subunitcolor: '#d3d3d3',
           showocean:true,
           oceancolor: 'rgba(250,250,250,1)'
       }
   };

Plotly.newPlot('graph', data, layout);


var updateEveryMS = 2000;

var interval = setInterval(function(){
  //console.log(lattitudes);
  // single series classification count
  // https://plot.ly/javascript/plotlyjs-function-reference/#plotlyextendtraces

  var newLocations = {lat: [lattitudes], lon: [longitudes], text: [project_name_list]};
  //console.log(newLocations)

  Plotly.restyle('graph', newLocations, [0]);

  lattitudes = []
  longitudes = []
  project_name_list = []

}, updateEveryMS);
