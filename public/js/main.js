// Load in dependencies
var BadgeExplorer = require('./badge-explorer');
var badges = require('./badges.json');
var categories = require('./categories.json');

// Generate container for badge explorer
var $detailView = $(
     '<div class="detail-view"><div class="container clearfix">' +
         '<div class="badge-switcher">' +
         '</div>' +
     '</div></div>');

// Initialize our badge explorer against the body and render the virus badge
var explorer = new BadgeExplorer($detailView.find('.badge-switcher'));

// Define helper to render a badge for a slug
function renderCurrentBadge() {
    // Find a matching badge for the hash (e.g. `#fact-checker` -> `fact-checker`)
    // TODO: Consider using a map for faster lookups `O(1)` (e.g. `badges['fact-checker']`)
    var matchingBadgeIndex = null;
    var i = 0;
    var len = badges.length;
    var slug = window.location.hash.slice(1);
    for (; i < len; i++) {
        // If the badge's slug matches our slug, save it and stop
        var badge = badges[i];
        if (badge.slug === slug) {
            matchingBadgeIndex = i;
            break;
        }
    }

    // If we have a match, update the explorer
    if (matchingBadgeIndex !== null) {
        explorer.renderBadgeByIndex(i);
    }

    // Return the result
    return matchingBadgeIndex;
}

// DEV: Use a closure to prevent conflict with `hashchange` listener
(function renderFirstBadge () {
    // Use the current badge from the URL
    var _badge = renderCurrentBadge();

    // If there is none, render the first badge
    // DEV: We have stable sorted the badges into categories for easy lookups like this
    if (_badge === null) {
        explorer.renderBadgeByIndex(0);
    }
}());

// When the URL hash changes, update the badge to the one from the hash
// http://caniuse.com/#search=hashchange
window.addEventListener('hashchange', renderCurrentBadge);
