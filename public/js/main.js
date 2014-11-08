// Load in dependencies
var BadgeExplorer = require('./badge-explorer');
var badges = require('./badges.json');

// Initialize our badge explorer against the body and render the virus badge
var explorer = new BadgeExplorer(document.body);

// TODO: If there is no badge selected, display the first one
explorer.render(badges[0]);

// When the URL hash changes
