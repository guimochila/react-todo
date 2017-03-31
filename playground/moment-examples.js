var moment = require('moment');

console.log(moment().format());

var now = moment();
console.log('Current timestamp', now.unix());

var timestamp = 1490987784;
var currentMomment = moment.unix(timestamp);
console.log('Current moment', currentMomment.format('MMM D, YY @ h:mm a'));

console.log(currentMomment.format('MMMM Do, YYYY @ h:mm A'));
