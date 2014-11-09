// Define our badge explorer component
// TODO: Should we require a `badge` on initialization?
function BadgeExplorer(doc) {
    // Find and save the badge switcher
    this.$switcher = $('.badge-switcher');

    // Generate our content and append it to the DOM
    this.$badge = $(
        '<div class="full-badge clearfix">' +
            '<div class="full-badge-icon">' +
                '<img>' +
            '</div>' +
            '<div class="full-badge-title"></div>' +
            '<div class="full-badge-description"></div>' +
        '</div>'
    );
    this.$switcher.append(this.$badge);
}
BadgeExplorer.prototype = {
    // On a render call, update the content
    render: function (badge) {
        // DEV: Since the image could take a bit of time to load, set it to something else
        // DEV: We don't want to use a spritesheet because that would be *really* big and defeat the purpose
        this.$badge.find('.full-badge-icon img').attr('src', badge.icons.large);
        this.$badge.find('.full-badge-title').text(badge.description);
        this.$badge.find('.full-badge-description').text(badge.safeExtendedDescription);
    }
};

// Export our BadgeExplorer
module.exports = BadgeExplorer;
