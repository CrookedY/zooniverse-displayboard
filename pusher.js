// Enable pusher logging - don't include this in production
//Pusher.logToConsole = true;

var pusherProdKey = '79e8e05ea522377ba6db';
var pusherStagKey = '95781402b5854a712a03';

var pusher = new Pusher(pusherProdKey, {
  encrypted: true
});

// a key:value object to store count of events
// TODO: instead of a global variable that we modify all over the place
// move this to an structure / class that manages it's own state
// that we can send messages to.
var counts = {}

var panoptesChannel = pusher.subscribe('panoptes');

// helper function to update the count key : value javascript object
var incrementCounts = function(attribute) {
  counts[attribute] = (counts[attribute] || 0) + 1
};

var resetCounts = function(attribute) {
  counts[attribute] = 0;
}

// This code runs each time a classification event comes down
// the panoptes pusher pipe
panoptesChannel.bind('classification', function(data) {
  // console.log(data);

  var projectId = data['project_id'];
  // console.log(projectId);

  var workflowId = data['workflow_id'];
  // console.log(workflowId);

  var userId = data['user_id'];
  // console.log(userId);

  // update the current counts object
  incrementCounts('classificationCount')
  incrementCounts('projectId')
  incrementCounts('workflowId')
  incrementCounts('userId')

  // DEBUG what does the counts look like?
  // console.log(counts);
});


// other channels in pusher from different API data sources
// talk vs prev gen API Ouroboros
// we can look at adding these in later for more event types

// var panoptesTalkChannel = pusher.subscribe('talk');
// panoptesTalkChannel.bind('comment', function(data) { });

// var ouroborosChannel = pusher.subscribe('ouroboros');
// ouroborosChannel.bind('classification', function(data) { });
