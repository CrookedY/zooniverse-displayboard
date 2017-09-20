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
       name: 'Classification',
   }];

   var talkData = [{
          type: 'scattergeo',
          mode: 'markers',
          textposition: 'topright',
          color: '#000000',
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
          name: 'Talk',
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
var WIDTH_IN_PERCENT_OF_PARENT = 90,
    HEIGHT_IN_PERCENT_OF_PARENT = 90;

var gd3 = d3.select("div[id='graph']")
  .style({
    width: WIDTH_IN_PERCENT_OF_PARENT + '%',
    'margin-left': (100 - WIDTH_IN_PERCENT_OF_PARENT) / 2 + '%',
    height: HEIGHT_IN_PERCENT_OF_PARENT + 'vh',
    'margin-top': (100 - HEIGHT_IN_PERCENT_OF_PARENT) / 2 + 'vh'
});

var gd = gd3.node();

Plotly.plot('graph', classificationData, layout);

window.onresize = function() { Plotly.Plots.resize(gd); };

var updateEveryMS = 3000;

var interval = setInterval(function(){

  var newLocations = {lat: [lattitudes], lon: [longitudes], hovertext: [project_name_list]};
  // console.log(newLocations)
  Plotly.restyle('graph', newLocations, [0]);

  if (talkLatitudes.length !== 0) {
    console.log(talkLatitudes.length);
    var newLocationsTalk = {lat: [talkLatitudes], lon: [talkLongitudes]};
    console.log(newLocationsTalk);

    // add traces doesn't work for anything...just redraws a cartesian coord plot
    // extendTraces(graphDiv, {y: [[rand()], [rand()]]}, [0, 1])
    // Plotly.extendTraces('graph', newLocations);
    // Plotly.plot('graph', newLocations);
    // Plotly.plot('graph', newLocationsTalk);

    newLayout = {
      type: 'scattergeo',
      mode: 'markers',
      textposition: 'topright',
      color: '#ea81de',
      marker: {
          size: 7,
          line: {
              width: 1
          }
      },
      name: 'Talk',
      lon: [talkLatitudes],
      lat: [talkLongitudes],
    }
    // this doesn't quite work...the idea is to
    // add a new series with a different layout (color, etc)
    // TODO: best to figure out how to add a new series with a different
    // layout without running an update, i.e. static graph data
    // then modify that code that we know works
    // to run on a timer interval as w
    Plotly.restyle('graph', newLayout);
    // Plotly.plot('graph', newLocationsTalk, newLayout);
  }

  lattitudes = []
  longitudes = []
  project_name_list = []
  talkLattitudes = []
  talkLatituds = []

}, updateEveryMS);
