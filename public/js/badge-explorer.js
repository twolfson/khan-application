// Define our badge explorer component
// TODO: Move to an object as the parameter for better future proofing
function BadgeExplorer(container, badges) {
    // Save the container and badges
    this.$container = $(container);
    this.badges = badges;

    // Generate our content, append them together, and add to our container
    // DEV: Create and memoize references to items once to prevent requerying
    this.$prevBtn = $(
        '<a class="badge-switch badge-switch-left" href="#">' +
            '<i class="fa fa-chevron-left"></i>' +
        '</a>'
    );
    this.$container.append(this.$prevBtn);
    this.$nextBtn = $(
        '<a class="badge-switch badge-switch-right" href="#">' +
            '<i class="fa fa-chevron-right"></i>' +
        '</a>'
    );
    this.$container.append(this.$nextBtn);
    this.$badge = $('<div class="full-badge clearfix">');
        this.$imgContainer = $('<div class="full-badge-icon">');
            this.$img = $('<img>');
            this.$imgContainer.append(this.$img);
        this.$badge.append(this.$imgContainer);
        this.$title = $('<div class="full-badge-title"></div>');
        this.$badge.append(this.$title);
        this.$description = $('<div class="full-badge-description"></div>');
        this.$badge.append(this.$description);
    this.$container.append(this.$badge);
}
BadgeExplorer.prototype = {
    renderBadgeBySlug: function (slug) {
        // Find a matching badge for the slug
        // TODO: Consider using a map for faster lookups `O(1)` (e.g. `badges['fact-checker']`)
        var i = 0;
        var len = this.badges.length;
        var matchingBadgeIndex;
        for (; i < len; i++) {
            // If the badge's slug matches our slug, save it and stop
            var badge = this.badges[i];
            if (badge.slug === slug) {
                matchingBadgeIndex = i;
                break;
            }
        }

        // If we have a match, update the explorer
        if (matchingBadgeIndex !== null) {
            return this.renderBadgeByIndex(i);
        }

        // Otherwwise, return `null`
        return null;
    },
    renderBadgeByIndex: function (index) {
        return this.render(index);
    },

    // On a render call, update the content
    render: function (index) {
        // If the badge doesn't exist at the index, return `null`
        var badges = this.badges;
        var badge = badges[index];
        if (badge === undefined) {
            return null;
        }

        // Update the arrows to match previous and next
        // DEV: Since we have stable sorted we can directly access the previous/next
        var prevBadge = badges[index - 1] || badges[badges.length - 1];
        var nextBadge = badges[index + 1] || badges[0];
        this.$prevBtn.attr('href', '#' + prevBadge.slug);
        this.$nextBtn.attr('href', '#' + nextBadge.slug);

        // DEV: Since the image could take a bit of time to load, set it to nothing (otherwise, we will have lag between content pieces)
        // DEV: We don't want to use a spritesheet because that would be *really* big and defeat the purpose
        // TODO: We could lazy load large images from the current set but that is killing bandwidth
        // TODO: Upload images to CDN
        this.$img.attr('src', null).attr('src', badge.icons.large);
        this.$title.text(badge.description);
        this.$description.text(badge.safeExtendedDescription);

        // Return the badge
        return badge;
    }
};

// Export our BadgeExplorer
module.exports = BadgeExplorer;
