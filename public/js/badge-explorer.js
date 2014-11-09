// Define our badge explorer component
// TODO: Should we require a `badge` on initialization?
function BadgeExplorer(container) {
    // Find and save the badge switcher
    this.$switcher = $(container);

    // Generate our content, append them together, and add to our container
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
        // DEV: Since the image could take a bit of time to load, set it to nothing (otherwise, we will have lag between content pieces)
        // DEV: We don't want to use a spritesheet because that would be *really* big and defeat the purpose
        // TODO: We could lazy load large images from the current set but that is killing bandwidth
        this.$badge.find('.full-badge-icon img').attr('src', null);
        this.$badge.find('.full-badge-icon img').attr('src', badge.icons.large);
        this.$badge.find('.full-badge-title').text(badge.description);
        this.$badge.find('.full-badge-description').text(badge.safeExtendedDescription);
    }
};

// Export our BadgeExplorer
module.exports = BadgeExplorer;
