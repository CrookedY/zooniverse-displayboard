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

//Panoptes global variables
var counts = {};
var lattitudes = [];
var longitudes = [];
var project_name_list = [];
var countryList = []





var panoptesChannel = pusher.subscribe('panoptes');

// helper function to update the count key : value javascript object
var incrementCounts = function(attribute) {
  counts[attribute] = (counts[attribute] || 0) + 1
};

var projectCounts = function(project_name_list){
  for (var i = 0; i < project_name_list.length; i++) {
     var project_name = project_name_list[i] || 'Private or Unidentified';
     //console.log(project_name);
     var inc_count = 0;
      if (project_name in countsProjects) {
        inc_count = countsProjects[project_name] + 1;
         }
         else {
           inc_count = 1;
             }
             countsProjects[project_name] = inc_count;
           }
         }


 var countryCounts = function(countryList){
   for (var i = 0; i < countryList.length; i++) {
      var countryName = countryList[i];
      //console.log(countryList[i]);
      var inc_count = 0;
       if (countryName in countryCount) {
         inc_count = countryCount[countryName] + 1;
          }
          else {
            inc_count = 1;
              }
              countryCount[countryName] = inc_count;
           }
          }


var resetCounts = function(attribute) {
  counts[attribute] = 0;
}

var projects = {};
var getProjectName = function(projectId) {
  if (projects[projectId]) {
    return projects[projectId].display_name
  }
  else {
    fetch('https://panoptes.zooniverse.org/api/projects/' + projectId, {
      headers: {'Content-Type': 'application/json',
                'Accept': 'application/vnd.api+json; version=1'}
    }).then((response) => {
      response.json().then((data) => {
        var project = data['projects'][0];
        // project.avatarSrc = 'https://placekitten.com/175/175';
        // this.loadAvatar(project);
        projects[projectId] = project;
        return projects[projectId].display_name
      });
    })
  }
}

// This code runs each time a classification event comes down
// the panoptes pusher pipe
panoptesChannel.bind('classification', function(data) {
  //  console.log(data);

  var projectId = data['project_id'];
  // console.log(projectId);

  var projectName = getProjectName(projectId);

  var workflowId = data['workflow_id'];
  // console.log(workflowId);

  var userId = data['user_id'];
  // console.log(userId);

  var latitude = data['geo'].latitude
  //console.log(latitude)

  var longitude = data['geo'].longitude

  var country = data['geo'].country_name
  //console.log(country)

  // update the current counts object
  incrementCounts('classificationCount')




  lattitudes.push(latitude)
  longitudes.push(longitude)
  project_name_list.push(projectName)
  countryList.push(country)


  // DEBUG what does the counts look like?
  // console.log(counts);
  // console.log(accumdata);
  //console.log(lattitudes)
});


// other channels in pusher from different API data sources
// talk vs prev gen API Ouroboros
// we can look at adding these in later for more event types


//talk global variables

var talkLatitudes = []
var talkLongitudes = []

 var panoptesTalkChannel = pusher.subscribe('talk');
 panoptesTalkChannel.bind('comment', function(Talkdata) {
//console.log(Talkdata)

var talkLatitude = Talkdata['geo'].latitude
var talkLongitude = Talkdata['geo'].longitude

talkLongitudes.push(talkLongitude)
talkLatitudes.push(talkLatitude)

 });

// var ouroborosChannel = pusher.subscribe('ouroboros');
// ouroborosChannel.bind('classification', function(data) { });
