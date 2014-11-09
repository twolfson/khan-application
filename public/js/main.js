// Load in dependencies
var BadgeExplorer = require('./badge-explorer');
var badges = require('./badges.json');
var categories = require('./categories.json');

// Initialize our badge explorer against the body and render the virus badge
var explorer = new BadgeExplorer($('.badge-switcher'));

// Define a helper to keep track of the current badge
// DEV: This is used for the previous and next function
var currentBadge;
function renderBadge(badge) {
    currentBadge = badge;
    explorer.render(badge);
}

// Define helper to render a badge for a slug
function renderCurrentBadge() {
    // Find a matching badge for the hash (e.g. `#fact-checker` -> `fact-checker`)
    // TODO: Consider using a map for faster lookups `O(1)` (e.g. `badges['fact-checker']`)
    var matchingBadge = null;
    var i = 0;
    var len = badges.length;
    var slug = window.location.hash.slice(1);
    for (; i < len; i++) {
        // If the badge's slug matches our slug, save it and stop
        var badge = badges[i];
        if (badge.slug === slug) {
            matchingBadge = badge;
            break;
        }
    }

    // If we have a match, update the explorer
    if (matchingBadge) {
        renderBadge(matchingBadge);
    }

    // Return the result
    return matchingBadge;
}

// DEV: Use a closure to prevent conflict with `hashchange` listener
(function renderFirstBadge () {
    // Use the current badge from the URL
    var _badge = renderCurrentBadge();

    // If there is none, render the first badge
    // DEV: We have stable sorted the badges into categories for easy lookups like this
    if (_badge === null) {
        renderBadge(badges[0]);
    }
}());

// When the URL hash changes, update the badge to the one from the hash
// http://caniuse.com/#search=hashchange
window.addEventListener('hashchange', renderCurrentBadge);
