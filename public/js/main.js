// Load in dependencies
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

// Define helper to render a badge for the hash (e.g. `#fact-checker` -> `fact-checker`)
function renderCurrentBadge() {
    var slug = window.location.hash.slice(1);
    return explorer.renderBadgeBySlug(slug);
}

// DEV: Use a closure to prevent conflict with `hashchange` listener
(function renderFirstBadge () {
    // Use the current badge from the URL
    var badge = renderCurrentBadge();

    // If there is none, render the first badge
    // DEV: We have stable sorted the badges into categories for easy lookups like this
    if (badge === null) {
        badge = badges[0];
        explorer.renderBadgeByIndex(0);
    // Otherwise, scroll to the badge
    } else {
        // Find the badge by its id
        var badgeEl = document.getElementById('badge-' + badge.slug);
        if (badgeEl) {
            // DEV: Use an offset to account for placeholder
            // TODO: In a responsive setting, detect media or placeholder height
            var elTop = $(badgeEl).offset().top;
            window.scrollTo(0, elTop - 355);
        }
    }
}());

// When the URL hash changes, update the badge to the one from the hash
// http://caniuse.com/#search=hashchange
window.addEventListener('hashchange', renderCurrentBadge);
