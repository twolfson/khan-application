// Define our badge explorer component
function BadgeExplorer(doc) {
    // Find and save the badge switcher
    this.$switcher = $('.badge-switcher');
}
BadgeExplorer.prototype = {
    render: function (badge) {
        var $badge = $(
            '<div class="full-badge clearfix">' +
                '<div class="full-badge-icon">' +
                    '<img>' +
                '</div>' +
                '<div class="full-badge-title"></div>' +
                '<div class="full-badge-description"></div>' +
            '</div>'
        );

        $badge.find('.full-badge-icon img').attr('src', badge.icons.large);
        $badge.find('.full-badge-title').text(badge.description);
        $badge.find('.full-badge-description').text(badge.safeExtendedDescription);

        this.$switcher.append($badge);
    }
};

// Export our BadgeExplorer
module.exports = BadgeExplorer;
