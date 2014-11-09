// Define our badge explorer component
// TODO: Should we require a `badge` on initialization?
function BadgeExplorer(container) {
    // Find and save the badge switcher
    this.$switcher = $(container);

    // Generate our content, append them together, and add to our container
    // DEV: Create and memoize references to items once to prevent requerying
    this.$badge = $('<div class="full-badge clearfix">');
        this.$imgContainer = $('<div class="full-badge-icon">');
            this.$img = $('<img>');
            this.$imgContainer.append(this.$img);
        this.$badge.append(this.$imgContainer);
        this.$title = $('<div class="full-badge-title"></div>');
        this.$badge.append(this.$title);
        this.$description = $('<div class="full-badge-description"></div>');
        this.$badge.append(this.$description);
    this.$switcher.append(this.$badge);
}
BadgeExplorer.prototype = {
    // On a render call, update the content
    render: function (badge) {
        // DEV: Since the image could take a bit of time to load, set it to nothing (otherwise, we will have lag between content pieces)
        // DEV: We don't want to use a spritesheet because that would be *really* big and defeat the purpose
        // TODO: We could lazy load large images from the current set but that is killing bandwidth
        // TODO: Upload images to CDN
        this.$img.attr('src', null).attr('src', badge.icons.large);
        this.$title.text(badge.description);
        this.$description.text(badge.safeExtendedDescription);
    }
};

// Export our BadgeExplorer
module.exports = BadgeExplorer;
