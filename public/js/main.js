// Load in dependencies
var $ = window.$;
var jQuerySmoothScroll = require('jquer-smooth-scroll');
var BadgeExplorer = require('./badge-explorer');
var badges = require('./badges.json');

// Generate container for badge explorer
var $detailViewPlaceholder = $('<div class="detail-view-placeholder">');
var $detailView = $(
     '<div class="detail-view"><div class="container clearfix">' +
         '<div class="badge-switcher">' +
         '</div>' +
     '</div></div>');
$('#page-contents').prepend($detailViewPlaceholder);
$('#page-contents').prepend($detailView);

// Initialize our badge explorer against the body and render the virus badge
var explorer = new BadgeExplorer($detailView.find('.badge-switcher'), badges);

// TODO: Consider building a component for smooth scrolling
// TODO: Would have liked to use `EventEmitter` but didn't trust its size
function scrollToBadge(badge) {
    // If there is a badge, scroll to it
    if (badge) {
        var $badge = $('#badge-' + badge.slug);
        if ($badge) {
            $badge.smoothScroll({offset: 300});
        }
    }

    // Return our badge
    return badge;
}

// Define helper to render a badge for the hash (e.g. `#fact-checker` -> `fact-checker`)
function renderCurrentBadge() {
    var slug = window.location.hash.slice(1);
    return explorer.renderBadgeBySlug(slug);
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
