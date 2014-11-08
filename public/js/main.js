// Load in dependencies
var BadgeExplorer = require('./badge-explorer');
var badges = require('./badges.json');
var categories = require('./categories.json');

// Initialize our badge explorer against the body and render the virus badge
var explorer = new BadgeExplorer(document.body);

// TODO: If there is no badge selected
if (true) {
    // DEV: We could query the DOM but that would be sloooow
    // Find the first badge and render it
    var i = 0;
    var len = badges.length;
    for (; i < len; i++) {
        var badge = badges[i];
        if (badge.badgeCategory === categories[0].category) {
            break;
        }
    }
    explorer.render(badge);
}

// When the URL hash changes
