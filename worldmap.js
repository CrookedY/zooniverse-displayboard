var classificationData = [{
       type: 'scattergeo',
       mode: 'markers+text',
       hovertext:[],
       textposition: 'topright',
       textfont: {
       family: 'sans serif',
       size: 18,
       color: '#1f77b4'
        },
       lon: [

       ],
       lat: [

       ],
       marker: {
           size: 7,
           line: {
               width: 1
           }
       },
       name: 'Classification Map',
   }];

   var talkData = [{
          type: 'scattergeo',
          mode: 'markers',
          textposition: 'topright',
          lon: [

          ],
          lat: [

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
      //  height: 1000,
      //  width: 1000,
       //updatemenus = updatemenu,
       geo: {
           scope: 'world',
           resolution: 50,
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


  // var updatemenu = [{
  //         y: 0.8,
  //         yanchor: 'top',
  //         buttons: [
  //             {method: 'relayout',
  //             args: ['scope', 'africa'],
  //             label: 'world'
  //         },{
  //             method: 'relayout',
  //             args: ['scope', 'europe'],
  //             label: 'Europe'
  //         }, {
  //             method: 'relayout',
  //             args: ['scope', 'north america'],
  //             label: 'North America'
  //         },{
  //             method: 'relayout',
  //             args: ['scope', 'asia'],
  //             label: 'Asia'
  //         },{
  //             method: 'relayout',
  //             args: ['scope', 'africa'],
  //             label: 'Africa'
  //         }, {
  //             method: 'relayout',
  //             args: ['scope', 'south america'],
  //             label: 'South America'}
  //         ]
  //       }]

  var d3 = Plotly.d3;
  var WIDTH_IN_PERCENT_OF_PARENT = 100,
      HEIGHT_IN_PERCENT_OF_PARENT = 100;

  var gd3 = d3.select("div[id='graph']")
    .style({
      width: WIDTH_IN_PERCENT_OF_PARENT + '%',
      'margin-left': (100 - WIDTH_IN_PERCENT_OF_PARENT) / 2 + '%',
      height: HEIGHT_IN_PERCENT_OF_PARENT + 'vh',
      'margin-top': (100 - HEIGHT_IN_PERCENT_OF_PARENT) / 2 + 'vh'
  });

data = classificationData

var graph =  gd3.node()

var countsProjects = {};

Plotly.plot(graph, data, layout);

window.onresize = function() { Plotly.Plots.resize( graph ) }


var updateEveryMS = 3000;

var interval = setInterval(function(){
  projectCounts(project_name_list)

  var newLocations = {lat: [lattitudes], lon: [longitudes], hovertext: [project_name_list]};
  //console.log(total)

  var newLocationsTalk = {lat: [talkLatitudes], lon: [talkLongitudes]};

  Plotly.restyle('graph', newLocations, [0]);
  //Plotly.restyle('graph', newLocationsTalk, [1]);

  lattitudes = []
  longitudes = []
  project_name_list = []
  talkLattitudes = []
  talkLatituds = []


}, updateEveryMS);
