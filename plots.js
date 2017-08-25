// add an empty plot to the dom element with id 'graph'
Plotly.plot('graph', [{
  y: [[]],
  mode: 'lines',
  line: {color: '#80CAF6'}
}]);

var updateEveryMS = 1000;

// every interval: update the graph data
var interval = setInterval(function(){

  // DEBUG what does the count look like before we format it up for graphing?
  console.log(counts);

  // single series classification count
  // https://plot.ly/javascript/plotlyjs-function-reference/#plotlyextendtraces
  var plotlyCountFormat = {y: [[counts.classificationCount]]};
  Plotly.extendTraces('graph', plotlyCountFormat, [0]);

  // reset the count datastructure to be empty for the particular series
  // this way we can fill it up again for the next interval

  // TODO: ?what differs with these two lines?
  resetCounts('classificationCount')
  // counts = {}

}, updateEveryMS);
