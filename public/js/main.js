// Load in dependencies
var BadgeExplorer = require('./badge-explorer');
var badges = require('./badges.json');
var categories = require('./categories.json');

// Initialize our badge explorer against the body and render the virus badge
var explorer = new BadgeExplorer(document.body);

// TODO: If there is no badge selected
// DEV: Use a closure to prevent conflict with `hashchange` listener
(function renderFirstBadge () {
    if (true) {
        // DEV: We could query the DOM but that would be sloooow
        // Find the first badge and render it
        var badge;
        var i = 0;
        var len = badges.length;
        for (; i < len; i++) {
            badge = badges[i];
            if (badge.badgeCategory === categories[0].category) {
                break;
            }
        }
        explorer.render(badge);
    }
}());

// When the URL hash changes
// http://caniuse.com/#search=hashchange
window.addEventListener('hashchange', function () {
    // Find a matching badge
    var i = 0;
    var len = badges.length;
    var slug = window.hash.slice(1);
    for (; i < len; i++) {
        var badge = badges[i];
        if (badge.badgeCategory === categories[0].category) {
            break;
        }
    }
});
