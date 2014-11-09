(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
        this.$img.attr('src', null).attr('src', badge.icons.large);
        this.$title.text(badge.description);
        this.$description.text(badge.safeExtendedDescription);

        // Return the badge
        return badge;
    }
};

// Export our BadgeExplorer
module.exports = BadgeExplorer;

},{}],2:[function(require,module,exports){
module.exports=[
    {
        "iconSrc": "https://www.kastatic.org/images/badges/meteorite/act-1-scene-1-40x40.png",
        "hideContext": false,
        "description": "Act I Scene I",
        "relativeUrl": "/badges/act-i-scene-i",
        "icons": {
            "small": "https://www.kastatic.org/images/badges/meteorite/act-1-scene-1-40x40.png",
            "compact": "https://www.kastatic.org/images/badges/meteorite/act-1-scene-1-60x60.png",
            "large": "https://www.kastatic.org/images/badges/meteorite/act-1-scene-1-512x512.png",
            "email": "https://www.kastatic.org/images/badges/meteorite/act-1-scene-1-70x70.png"
        },
        "absoluteUrl": "https://www.khanacademy.org/badges/act-i-scene-i",
        "translatedSafeExtendedDescription": "Watch 20 minutes of video",
        "translatedDescription": "Act I Scene I",
        "isOwned": false,
        "badgeCategory": 0,
        "points": 0,
        "isRetired": false,
        "safeExtendedDescription": "Watch 20 minutes of video",
        "slug": "act-i-scene-i",
        "name": "actonesceneonebadge"
    },
    {
        "iconSrc": "https://www.kastatic.org/images/badges/meteorite/researcher-40x40.png",
        "hideContext": false,
        "description": "Researcher",
        "relativeUrl": "/badges/researcher",
        "icons": {
            "small": "https://www.kastatic.org/images/badges/meteorite/researcher-40x40.png",
            "compact": "https://www.kastatic.org/images/badges/meteorite/researcher-60x60.png",
            "large": "https://www.kastatic.org/images/badges/meteorite/researcher-512x512.png",
            "email": "https://www.kastatic.org/images/badges/meteorite/researcher-70x70.png"
        },
        "absoluteUrl": "https://www.khanacademy.org/badges/researcher",
        "translatedSafeExtendedDescription": "Reference a timestamp when answering a question on a video or program",
        "translatedDescription": "Researcher",
        "isOwned": false,
        "badgeCategory": 0,
        "points": 0,
        "isRetired": false,
        "safeExtendedDescription": "Reference a timestamp when answering a question on a video or program",
        "slug": "researcher",
        "name": "answertimestampreferencebadge"
    },
    {
        "iconSrc": "https://www.kastatic.org/images/badges/meteorite/awesome-streak-40x40.png",
        "hideContext": false,
        "description": "Awesome Streak",
        "relativeUrl": "/badges/awesome-streak",
        "icons": {
            "small": "https://www.kastatic.org/images/badges/meteorite/awesome-streak-40x40.png",
            "compact": "https://www.kastatic.org/images/badges/meteorite/awesome-streak-60x60.png",
            "large": "https://www.kastatic.org/images/badges/meteorite/awesome-streak-512x512.png",
            "email": "https://www.kastatic.org/images/badges/meteorite/awesome-streak-70x70.png"
        },
        "absoluteUrl": "https://www.khanacademy.org/badges/awesome-streak",
        "translatedSafeExtendedDescription": "Correctly answer 60 problems in a row in a single skill",
        "translatedDescription": "Awesome Streak",
        "isOwned": false,
        "badgeCategory": 0,
        "points": 0,
        "isRetired": false,
        "safeExtendedDescription": "Correctly answer 60 problems in a row in a single skill",
        "slug": "awesome-streak",
        "name": "awesomestreakbadge"
    },
    {
        "iconSrc": "https://www.kastatic.org/images/badges/meteorite/math-pretest-champion-40x40.png",
        "hideContext": false,
        "description": "Brain Builder",
        "relativeUrl": "/badges/brain-builder",
        "icons": {
            "small": "https://www.kastatic.org/images/badges/meteorite/math-pretest-champion-40x40.png",
            "compact": "https://www.kastatic.org/images/badges/meteorite/math-pretest-champion-60x60.png",
            "large": "https://www.kastatic.org/images/badges/meteorite/math-pretest-champion-512x512.png",
            "email": "https://www.kastatic.org/images/badges/meteorite/math-pretest-champion-70x70.png"
        },
        "absoluteUrl": "https://www.khanacademy.org/badges/brain-builder",
        "translatedSafeExtendedDescription": "You finished your first brain fitness test. Great job!",
        "translatedDescription": "Brain Builder",
        "isOwned": false,
        "badgeCategory": 0,
        "points": 1000,
        "isRetired": false,
        "safeExtendedDescription": "You finished your first brain fitness test. Great job!",
        "slug": "brain-builder",
        "name": "brainfitnesstestbadge"
    },
    {
        "iconSrc": "https://www.kastatic.org/images/badges/meteorite/tinkerer-40x40.png",
        "hideContext": false,
        "description": "Challenger",
        "relativeUrl": "/badges/challenger",
        "icons": {
            "small": "https://www.kastatic.org/images/badges/meteorite/tinkerer-40x40.png",
            "compact": "https://www.kastatic.org/images/badges/meteorite/tinkerer-60x60.png",
            "large": "https://www.kastatic.org/images/badges/meteorite/tinkerer-512x512.png",
            "email": "https://www.kastatic.org/images/badges/meteorite/tinkerer-70x70.png"
        },
        "absoluteUrl": "https://www.khanacademy.org/badges/challenger",
        "translatedSafeExtendedDescription": "Complete a Computer Science Challenge",
        "translatedDescription": "Challenger",
        "isOwned": false,
        "badgeCategory": 0,
        "points": 0,
        "isRetired": false,
        "safeExtendedDescription": "Complete a Computer Science Challenge",
        "slug": "challenger",
        "name": "completechallengebadge"
    },
    {
        "iconSrc": "https://www.kastatic.org/images/badges/meteorite/apprentice-programmer-40x40.png",
        "hideContext": false,
        "description": "Apprentice Programmer",
        "relativeUrl": "/badges/apprentice-programmer",
        "icons": {
            "small": "https://www.kastatic.org/images/badges/meteorite/apprentice-programmer-40x40.png",
            "compact": "https://www.kastatic.org/images/badges/meteorite/apprentice-programmer-60x60.png",
            "large": "https://www.kastatic.org/images/badges/meteorite/apprentice-programmer-512x512.png",
            "email": "https://www.kastatic.org/images/badges/meteorite/apprentice-programmer-70x70.png"
        },
        "absoluteUrl": "https://www.khanacademy.org/badges/apprentice-programmer",
        "translatedSafeExtendedDescription": "Create a program from scratch",
        "translatedDescription": "Apprentice Programmer",
        "isOwned": false,
        "badgeCategory": 0,
        "points": 0,
        "isRetired": false,
        "safeExtendedDescription": "Create a program from scratch",
        "slug": "apprentice-programmer",
        "name": "creatednewscratchpadbadge"
    },
    {
        "iconSrc": "https://www.kastatic.org/images/badges/meteorite/high-five-40x40.png",
        "hideContext": false,
        "description": "High Five",
        "relativeUrl": "/badges/high-five",
        "icons": {
            "small": "https://www.kastatic.org/images/badges/meteorite/high-five-40x40.png",
            "compact": "https://www.kastatic.org/images/badges/meteorite/high-five-60x60.png",
            "large": "https://www.kastatic.org/images/badges/meteorite/high-five-512x512.png",
            "email": "https://www.kastatic.org/images/badges/meteorite/high-five-70x70.png"
        },
        "absoluteUrl": "https://www.khanacademy.org/badges/high-five",
        "translatedSafeExtendedDescription": "Five mastery challenges completed.",
        "translatedDescription": "High Five",
        "isOwned": false,
        "badgeCategory": 0,
        "points": 0,
        "isRetired": false,
        "safeExtendedDescription": "Five mastery challenges completed.",
        "slug": "high-five",
        "name": "fifthmasterytaskbadge"
    },
    {
        "iconSrc": "https://www.kastatic.org/images/badges/meteorite/five-is-alive-40x40.png",
        "hideContext": false,
        "description": "Five is Alive!",
        "relativeUrl": "/badges/five-is-alive",
        "icons": {
            "small": "https://www.kastatic.org/images/badges/meteorite/five-is-alive-40x40.png",
            "compact": "https://www.kastatic.org/images/badges/meteorite/five-is-alive-60x60.png",
            "large": "https://www.kastatic.org/images/badges/meteorite/five-is-alive-512x512.png",
            "email": "https://www.kastatic.org/images/badges/meteorite/five-is-alive-70x70.png"
        },
        "absoluteUrl": "https://www.khanacademy.org/badges/five-is-alive",
        "translatedSafeExtendedDescription": "Finish five practice tasks.",
        "translatedDescription": "Five is Alive!",
        "isOwned": false,
        "badgeCategory": 0,
        "points": 0,
        "isRetired": false,
        "safeExtendedDescription": "Finish five practice tasks.",
        "slug": "five-is-alive",
        "name": "fifthpracticetaskbadge"
    },
    {
        "iconSrc": "https://www.kastatic.org/images/badges/meteorite/thumbs-down-40x40.png",
        "hideContext": false,
        "description": "Thumbs Down",
        "relativeUrl": "/badges/thumbs-down",
        "icons": {
            "small": "https://www.kastatic.org/images/badges/meteorite/thumbs-down-40x40.png",
            "compact": "https://www.kastatic.org/images/badges/meteorite/thumbs-down-60x60.png",
            "large": "https://www.kastatic.org/images/badges/meteorite/thumbs-down-512x512.png",
            "email": "https://www.kastatic.org/images/badges/meteorite/thumbs-down-70x70.png"
        },
        "absoluteUrl": "https://www.khanacademy.org/badges/thumbs-down",
        "translatedSafeExtendedDescription": "Cast your first down vote for an unhelpful discussion post or program",
        "translatedDescription": "Thumbs Down",
        "isOwned": false,
        "badgeCategory": 0,
        "points": 0,
        "isRetired": false,
        "safeExtendedDescription": "Cast your first down vote for an unhelpful discussion post or program",
        "slug": "thumbs-down",
        "name": "firstdownvotebadge"
    },
    {
        "iconSrc": "https://www.kastatic.org/images/badges/meteorite/flag-duty-40x40.png",
        "hideContext": false,
        "description": "Flag Duty",
        "relativeUrl": "/badges/flag-duty",
        "icons": {
            "small": "https://www.kastatic.org/images/badges/meteorite/flag-duty-40x40.png",
            "compact": "https://www.kastatic.org/images/badges/meteorite/flag-duty-60x60.png",
            "large": "https://www.kastatic.org/images/badges/meteorite/flag-duty-512x512.png",
            "email": "https://www.kastatic.org/images/badges/meteorite/flag-duty-70x70.png"
        },
        "absoluteUrl": "https://www.khanacademy.org/badges/flag-duty",
        "translatedSafeExtendedDescription": "Flag your first discussion post on a video or program for a Guardian's attention",
        "translatedDescription": "Flag Duty",
        "isOwned": false,
        "badgeCategory": 0,
        "points": 0,
        "isRetired": false,
        "safeExtendedDescription": "Flag your first discussion post on a video or program for a Guardian's attention",
        "slug": "flag-duty",
        "name": "firstflagbadge"
    },
    {
        "iconSrc": "https://www.kastatic.org/images/badges/meteorite/challenge-accepted-40x40.png",
        "hideContext": false,
        "description": "Challenge Accepted",
        "relativeUrl": "/badges/challenge-accepted",
        "icons": {
            "small": "https://www.kastatic.org/images/badges/meteorite/challenge-accepted-40x40.png",
            "compact": "https://www.kastatic.org/images/badges/meteorite/challenge-accepted-60x60.png",
            "large": "https://www.kastatic.org/images/badges/meteorite/challenge-accepted-512x512.png",
            "email": "https://www.kastatic.org/images/badges/meteorite/challenge-accepted-70x70.png"
        },
        "absoluteUrl": "https://www.khanacademy.org/badges/challenge-accepted",
        "translatedSafeExtendedDescription": "You finished your first mastery challenge.",
        "translatedDescription": "Challenge Accepted",
        "isOwned": false,
        "badgeCategory": 0,
        "points": 0,
        "isRetired": false,
        "safeExtendedDescription": "You finished your first mastery challenge.",
        "slug": "challenge-accepted",
        "name": "firstmasterytaskbadge"
    },
    {
        "iconSrc": "https://www.kastatic.org/images/badges/meteorite/makes-perfect-40x40.png",
        "hideContext": false,
        "description": "Makes Perfect",
        "relativeUrl": "/badges/makes-perfect",
        "icons": {
            "small": "https://www.kastatic.org/images/badges/meteorite/makes-perfect-40x40.png",
            "compact": "https://www.kastatic.org/images/badges/meteorite/makes-perfect-60x60.png",
            "large": "https://www.kastatic.org/images/badges/meteorite/makes-perfect-512x512.png",
            "email": "https://www.kastatic.org/images/badges/meteorite/makes-perfect-70x70.png"
        },
        "absoluteUrl": "https://www.khanacademy.org/badges/makes-perfect",
        "translatedSafeExtendedDescription": "You finished your first practice task.",
        "translatedDescription": "Makes Perfect",
        "isOwned": false,
        "badgeCategory": 0,
        "points": 0,
        "isRetired": false,
        "safeExtendedDescription": "You finished your first practice task.",
        "slug": "makes-perfect",
        "name": "firstpracticetaskbadge"
    },
    {
        "iconSrc": "https://www.kastatic.org/images/badges/meteorite/thumbs-up-40x40.png",
        "hideContext": false,
        "description": "Thumbs Up",
        "relativeUrl": "/badges/thumbs-up",
        "icons": {
            "small": "https://www.kastatic.org/images/badges/meteorite/thumbs-up-40x40.png",
            "compact": "https://www.kastatic.org/images/badges/meteorite/thumbs-up-60x60.png",
            "large": "https://www.kastatic.org/images/badges/meteorite/thumbs-up-512x512.png",
            "email": "https://www.kastatic.org/images/badges/meteorite/thumbs-up-70x70.png"
        },
        "absoluteUrl": "https://www.khanacademy.org/badges/thumbs-up",
        "translatedSafeExtendedDescription": "Cast your first up vote for a helpful discussion post or program",
        "translatedDescription": "Thumbs Up",
        "isOwned": false,
        "badgeCategory": 0,
        "points": 0,
        "isRetired": false,
        "safeExtendedDescription": "Cast your first up vote for a helpful discussion post or program",
        "slug": "thumbs-up",
        "name": "firstupvotebadge"
    },
    {
        "iconSrc": "https://www.kastatic.org/images/badges/meteorite/good-habits-40x40.png",
        "hideContext": false,
        "description": "Good Habits",
        "relativeUrl": "/badges/good-habits",
        "icons": {
            "small": "https://www.kastatic.org/images/badges/meteorite/good-habits-40x40.png",
            "compact": "https://www.kastatic.org/images/badges/meteorite/good-habits-60x60.png",
            "large": "https://www.kastatic.org/images/badges/meteorite/good-habits-512x512.png",
            "email": "https://www.kastatic.org/images/badges/meteorite/good-habits-70x70.png"
        },
        "absoluteUrl": "https://www.khanacademy.org/badges/good-habits",
        "translatedSafeExtendedDescription": "Watch part of any video or work on any skill each day for 5 consecutive days",
        "translatedDescription": "Good Habits",
        "isOwned": false,
        "badgeCategory": 0,
        "points": 0,
        "isRetired": false,
        "safeExtendedDescription": "Watch part of any video or work on any skill each day for 5 consecutive days",
        "slug": "good-habits",
        "name": "fivedayconsecutiveactivitybadge"
    },
    {
        "iconSrc": "https://www.kastatic.org/images/badges/meteorite/mad-scientist-40x40.png",
        "hideContext": false,
        "description": "Mad Scientist",
        "relativeUrl": "/badges/mad-scientist",
        "icons": {
            "small": "https://www.kastatic.org/images/badges/meteorite/mad-scientist-40x40.png",
            "compact": "https://www.kastatic.org/images/badges/meteorite/mad-scientist-60x60.png",
            "large": "https://www.kastatic.org/images/badges/meteorite/mad-scientist-512x512.png",
            "email": "https://www.kastatic.org/images/badges/meteorite/mad-scientist-70x70.png"
        },
        "absoluteUrl": "https://www.khanacademy.org/badges/mad-scientist",
        "translatedSafeExtendedDescription": "Make changes to an official program",
        "translatedDescription": "Mad Scientist",
        "isOwned": false,
        "badgeCategory": 0,
        "points": 0,
        "isRetired": false,
        "safeExtendedDescription": "Make changes to an official program",
        "slug": "mad-scientist",
        "name": "forkedofficialscratchpadbadge"
    },
    {
        "iconSrc": "https://www.kastatic.org/images/badges/meteorite/collaborator-40x40.png",
        "hideContext": false,
        "description": "Collaborator",
        "relativeUrl": "/badges/collaborator",
        "icons": {
            "small": "https://www.kastatic.org/images/badges/meteorite/collaborator-40x40.png",
            "compact": "https://www.kastatic.org/images/badges/meteorite/collaborator-60x60.png",
            "large": "https://www.kastatic.org/images/badges/meteorite/collaborator-512x512.png",
            "email": "https://www.kastatic.org/images/badges/meteorite/collaborator-70x70.png"
        },
        "absoluteUrl": "https://www.khanacademy.org/badges/collaborator",
        "translatedSafeExtendedDescription": "Make changes to another user's program",
        "translatedDescription": "Collaborator",
        "isOwned": false,
        "badgeCategory": 0,
        "points": 0,
        "isRetired": false,
        "safeExtendedDescription": "Make changes to another user's program",
        "slug": "collaborator",
        "name": "forkeduserscratchpadbadge"
    },
    {
        "iconSrc": "https://www.kastatic.org/images/badges/meteorite/inspiration-40x40.png",
        "hideContext": false,
        "description": "Inspiration",
        "relativeUrl": "/badges/inspiration",
        "icons": {
            "small": "https://www.kastatic.org/images/badges/meteorite/inspiration-40x40.png",
            "compact": "https://www.kastatic.org/images/badges/meteorite/inspiration-60x60.png",
            "large": "https://www.kastatic.org/images/badges/meteorite/inspiration-512x512.png",
            "email": "https://www.kastatic.org/images/badges/meteorite/inspiration-70x70.png"
        },
        "absoluteUrl": "https://www.khanacademy.org/badges/inspiration",
        "translatedSafeExtendedDescription": "Another user created a program based on one of yours",
        "translatedDescription": "Inspiration",
        "isOwned": false,
        "badgeCategory": 0,
        "points": 500,
        "isRetired": false,
        "safeExtendedDescription": "Another user created a program based on one of yours",
        "slug": "inspiration",
        "name": "getforkedoncebadge"
    },
    {
        "iconSrc": "https://www.kastatic.org/images/badges/meteorite/just-getting-started-40x40.png",
        "hideContext": false,
        "description": "Just Getting Started",
        "relativeUrl": "/badges/just-getting-started",
        "icons": {
            "small": "https://www.kastatic.org/images/badges/meteorite/just-getting-started-40x40.png",
            "compact": "https://www.kastatic.org/images/badges/meteorite/just-getting-started-60x60.png",
            "large": "https://www.kastatic.org/images/badges/meteorite/just-getting-started-512x512.png",
            "email": "https://www.kastatic.org/images/badges/meteorite/just-getting-started-70x70.png"
        },
        "absoluteUrl": "https://www.khanacademy.org/badges/just-getting-started",
        "translatedSafeExtendedDescription": "Achieve mastery in 3 unique skills",
        "translatedDescription": "Just Getting Started",
        "isOwned": false,
        "badgeCategory": 0,
        "points": 100,
        "isRetired": false,
        "safeExtendedDescription": "Achieve mastery in 3 unique skills",
        "slug": "just-getting-started",
        "name": "gettingstartedmasterybadge"
    },
    {
        "iconSrc": "https://www.kastatic.org/images/badges/meteorite/great-listener-40x40.png",
        "hideContext": false,
        "description": "Great Listener",
        "relativeUrl": "/badges/great-listener",
        "icons": {
            "small": "https://www.kastatic.org/images/badges/meteorite/great-listener-40x40.png",
            "compact": "https://www.kastatic.org/images/badges/meteorite/great-listener-60x60.png",
            "large": "https://www.kastatic.org/images/badges/meteorite/great-listener-512x512.png",
            "email": "https://www.kastatic.org/images/badges/meteorite/great-listener-70x70.png"
        },
        "absoluteUrl": "https://www.khanacademy.org/badges/great-listener",
        "translatedSafeExtendedDescription": "Watch 30 minutes of video in a single topic",
        "translatedDescription": "Great Listener",
        "isOwned": false,
        "badgeCategory": 0,
        "points": 0,
        "isRetired": false,
        "safeExtendedDescription": "Watch 30 minutes of video in a single topic",
        "slug": "great-listener",
        "name": "greatplaylisttimebadge"
    },
    {
        "iconSrc": "https://www.kastatic.org/images/badges/meteorite/great-streak-40x40.png",
        "hideContext": false,
        "description": "Great Streak",
        "relativeUrl": "/badges/great-streak",
        "icons": {
            "small": "https://www.kastatic.org/images/badges/meteorite/great-streak-40x40.png",
            "compact": "https://www.kastatic.org/images/badges/meteorite/great-streak-60x60.png",
            "large": "https://www.kastatic.org/images/badges/meteorite/great-streak-512x512.png",
            "email": "https://www.kastatic.org/images/badges/meteorite/great-streak-70x70.png"
        },
        "absoluteUrl": "https://www.khanacademy.org/badges/great-streak",
        "translatedSafeExtendedDescription": "Correctly answer 40 problems in a row in a single skill",
        "translatedDescription": "Great Streak",
        "isOwned": false,
        "badgeCategory": 0,
        "points": 0,
        "isRetired": false,
        "safeExtendedDescription": "Correctly answer 40 problems in a row in a single skill",
        "slug": "great-streak",
        "name": "greatstreakbadge"
    },
    {
        "iconSrc": "https://www.kastatic.org/images/badges/meteorite/making-progress-40x40.png",
        "hideContext": false,
        "description": "Making Progress",
        "relativeUrl": "/badges/making-progress",
        "icons": {
            "small": "https://www.kastatic.org/images/badges/meteorite/making-progress-40x40.png",
            "compact": "https://www.kastatic.org/images/badges/meteorite/making-progress-60x60.png",
            "large": "https://www.kastatic.org/images/badges/meteorite/making-progress-512x512.png",
            "email": "https://www.kastatic.org/images/badges/meteorite/making-progress-70x70.png"
        },
        "absoluteUrl": "https://www.khanacademy.org/badges/making-progress",
        "translatedSafeExtendedDescription": "Achieve mastery in 7 unique skills",
        "translatedDescription": "Making Progress",
        "isOwned": false,
        "badgeCategory": 0,
        "points": 1000,
        "isRetired": false,
        "safeExtendedDescription": "Achieve mastery in 7 unique skills",
        "slug": "making-progress",
        "name": "makingprogressmasterybadge"
    },
    {
        "iconSrc": "https://www.kastatic.org/images/badges/meteorite/great-listener-40x40.png",
        "hideContext": false,
        "description": "Nice Listener",
        "relativeUrl": "/badges/nice-listener",
        "icons": {
            "small": "https://www.kastatic.org/images/badges/meteorite/great-listener-40x40.png",
            "compact": "https://www.kastatic.org/images/badges/meteorite/great-listener-60x60.png",
            "large": "https://www.kastatic.org/images/badges/meteorite/great-listener-512x512.png",
            "email": "https://www.kastatic.org/images/badges/meteorite/great-listener-70x70.png"
        },
        "absoluteUrl": "https://www.khanacademy.org/badges/nice-listener",
        "translatedSafeExtendedDescription": "Watch 15 minutes of video in a single topic",
        "translatedDescription": "Nice Listener",
        "isOwned": false,
        "badgeCategory": 0,
        "points": 0,
        "isRetired": false,
        "safeExtendedDescription": "Watch 15 minutes of video in a single topic",
        "slug": "nice-listener",
        "name": "niceplaylisttimebadge"
    },
    {
        "iconSrc": "https://www.kastatic.org/images/badges/meteorite/nice-streak-40x40.png",
        "hideContext": false,
        "description": "Nice Streak",
        "relativeUrl": "/badges/nice-streak",
        "icons": {
            "small": "https://www.kastatic.org/images/badges/meteorite/nice-streak-40x40.png",
            "compact": "https://www.kastatic.org/images/badges/meteorite/nice-streak-60x60.png",
            "large": "https://www.kastatic.org/images/badges/meteorite/nice-streak-512x512.png",
            "email": "https://www.kastatic.org/images/badges/meteorite/nice-streak-70x70.png"
        },
        "absoluteUrl": "https://www.khanacademy.org/badges/nice-streak",
        "translatedSafeExtendedDescription": "Correctly answer 20 problems in a row in a single skill",
        "translatedDescription": "Nice Streak",
        "isOwned": false,
        "badgeCategory": 0,
        "points": 0,
        "isRetired": false,
        "safeExtendedDescription": "Correctly answer 20 problems in a row in a single skill",
        "slug": "nice-streak",
        "name": "nicestreakbadge"
    },
    {
        "iconSrc": "https://www.kastatic.org/images/badges/meteorite/picking-up-steam-40x40.png",
        "hideContext": false,
        "description": "Picking Up Steam",
        "relativeUrl": "/badges/picking-up-steam",
        "icons": {
            "small": "https://www.kastatic.org/images/badges/meteorite/picking-up-steam-40x40.png",
            "compact": "https://www.kastatic.org/images/badges/meteorite/picking-up-steam-60x60.png",
            "large": "https://www.kastatic.org/images/badges/meteorite/picking-up-steam-512x512.png",
            "email": "https://www.kastatic.org/images/badges/meteorite/picking-up-steam-70x70.png"
        },
        "absoluteUrl": "https://www.khanacademy.org/badges/picking-up-steam",
        "translatedSafeExtendedDescription": "Quickly & correctly answer 5 skill problems in a row (time limit depends on skill difficulty)",
        "translatedDescription": "Picking Up Steam",
        "isOwned": false,
        "badgeCategory": 0,
        "points": 100,
        "isRetired": false,
        "safeExtendedDescription": "Quickly & correctly answer 5 skill problems in a row (time limit depends on skill difficulty)",
        "slug": "picking-up-steam",
        "name": "nicetimedproblembadge"
    },
    {
        "iconSrc": "https://www.kastatic.org/images/badges/meteorite/inspired-15-minutes-40x40.png",
        "hideContext": false,
        "description": "Inspired 15 Minutes",
        "relativeUrl": "/badges/inspired-15-minutes",
        "icons": {
            "small": "https://www.kastatic.org/images/badges/meteorite/inspired-15-minutes-40x40.png",
            "compact": "https://www.kastatic.org/images/badges/meteorite/inspired-15-minutes-60x60.png",
            "large": "https://www.kastatic.org/images/badges/meteorite/inspired-15-minutes-512x512.png",
            "email": "https://www.kastatic.org/images/badges/meteorite/inspired-15-minutes-70x70.png"
        },
        "absoluteUrl": "https://www.khanacademy.org/badges/inspired-15-minutes",
        "translatedSafeExtendedDescription": "Correctly answer 10 problems and watch 10 minutes of video in 15 minutes",
        "translatedDescription": "Inspired 15 Minutes",
        "isOwned": false,
        "badgeCategory": 0,
        "points": 0,
        "isRetired": false,
        "safeExtendedDescription": "Correctly answer 10 problems and watch 10 minutes of video in 15 minutes",
        "slug": "inspired-15-minutes",
        "name": "powerfifteenminutesbadge"
    },
    {
        "iconSrc": "https://www.kastatic.org/images/badges/meteorite/express-yourself-40x40.png",
        "hideContext": false,
        "description": "Express Yourself",
        "relativeUrl": "/badges/express-yourself",
        "icons": {
            "small": "https://www.kastatic.org/images/badges/meteorite/express-yourself-40x40.png",
            "compact": "https://www.kastatic.org/images/badges/meteorite/express-yourself-60x60.png",
            "large": "https://www.kastatic.org/images/badges/meteorite/express-yourself-512x512.png",
            "email": "https://www.kastatic.org/images/badges/meteorite/express-yourself-70x70.png"
        },
        "absoluteUrl": "https://www.khanacademy.org/badges/express-yourself",
        "translatedSafeExtendedDescription": "Customize your profile avatar and fill up your display case",
        "translatedDescription": "Express Yourself",
        "isOwned": false,
        "badgeCategory": 0,
        "points": 0,
        "isRetired": false,
        "safeExtendedDescription": "Customize your profile avatar and fill up your display case",
        "slug": "express-yourself",
        "name": "profilecustomizationbadge"
    },
    {
        "iconSrc": "https://www.kastatic.org/images/badges/meteorite/bibliographer-40x40.png",
        "hideContext": false,
        "description": "Bibliographer",
        "relativeUrl": "/badges/bibliographer",
        "icons": {
            "small": "https://www.kastatic.org/images/badges/meteorite/bibliographer-40x40.png",
            "compact": "https://www.kastatic.org/images/badges/meteorite/bibliographer-60x60.png",
            "large": "https://www.kastatic.org/images/badges/meteorite/bibliographer-512x512.png",
            "email": "https://www.kastatic.org/images/badges/meteorite/bibliographer-70x70.png"
        },
        "absoluteUrl": "https://www.khanacademy.org/badges/bibliographer",
        "translatedSafeExtendedDescription": "Reference a timestamp when asking a question on a video or program",
        "translatedDescription": "Bibliographer",
        "isOwned": false,
        "badgeCategory": 0,
        "points": 0,
        "isRetired": false,
        "safeExtendedDescription": "Reference a timestamp when asking a question on a video or program",
        "slug": "bibliographer",
        "name": "questiontimestampreferencebadge"
    },
    {
        "iconSrc": "https://www.kastatic.org/images/badges/meteorite/perseverance-40x40.png",
        "hideContext": false,
        "description": "Persistence",
        "relativeUrl": "/badges/persistence",
        "icons": {
            "small": "https://www.kastatic.org/images/badges/meteorite/perseverance-40x40.png",
            "compact": "https://www.kastatic.org/images/badges/meteorite/perseverance-60x60.png",
            "large": "https://www.kastatic.org/images/badges/meteorite/perseverance-512x512.png",
            "email": "https://www.kastatic.org/images/badges/meteorite/perseverance-70x70.png"
        },
        "absoluteUrl": "https://www.khanacademy.org/badges/persistence",
        "translatedSafeExtendedDescription": "Answer a problem correctly after having some trouble with a few problems and sticking with the skill",
        "translatedDescription": "Persistence",
        "isOwned": false,
        "badgeCategory": 0,
        "points": 0,
        "isRetired": false,
        "safeExtendedDescription": "Answer a problem correctly after having some trouble with a few problems and sticking with the skill",
        "slug": "persistence",
        "name": "recoverybadge"
    },
    {
        "iconSrc": "https://www.kastatic.org/images/badges/meteorite/tinkerer-40x40.png",
        "hideContext": false,
        "description": "Tinkerer",
        "relativeUrl": "/badges/tinkerer",
        "icons": {
            "small": "https://www.kastatic.org/images/badges/meteorite/tinkerer-40x40.png",
            "compact": "https://www.kastatic.org/images/badges/meteorite/tinkerer-60x60.png",
            "large": "https://www.kastatic.org/images/badges/meteorite/tinkerer-512x512.png",
            "email": "https://www.kastatic.org/images/badges/meteorite/tinkerer-70x70.png"
        },
        "absoluteUrl": "https://www.khanacademy.org/badges/tinkerer",
        "translatedSafeExtendedDescription": "Pause a tutorial and tinker with the code",
        "translatedDescription": "Tinkerer",
        "isOwned": false,
        "badgeCategory": 0,
        "points": 0,
        "isRetired": false,
        "safeExtendedDescription": "Pause a tutorial and tinker with the code",
        "slug": "tinkerer",
        "name": "scratchpadtinkererbadge"
    },
    {
        "iconSrc": "https://www.kastatic.org/images/badges/meteorite/virus-40x40.png",
        "hideContext": false,
        "description": "Virus",
        "relativeUrl": "/badges/virus",
        "icons": {
            "small": "https://www.kastatic.org/images/badges/meteorite/virus-40x40.png",
            "compact": "https://www.kastatic.org/images/badges/meteorite/virus-60x60.png",
            "large": "https://www.kastatic.org/images/badges/meteorite/virus-512x512.png",
            "email": "https://www.kastatic.org/images/badges/meteorite/virus-70x70.png"
        },
        "absoluteUrl": "https://www.khanacademy.org/badges/virus",
        "translatedSafeExtendedDescription": "Share a program you've created via Facebook, Twitter, or email",
        "translatedDescription": "Virus",
        "isOwned": false,
        "badgeCategory": 0,
        "points": 0,
        "isRetired": false,
        "safeExtendedDescription": "Share a program you've created via Facebook, Twitter, or email",
        "slug": "virus",
        "name": "sharedscratchpadbadge"
    },
    {
        "iconSrc": "https://www.kastatic.org/images/badges/meteorite/hang-ten-40x40.png",
        "hideContext": false,
        "description": "Hang Ten",
        "relativeUrl": "/badges/hang-ten",
        "icons": {
            "small": "https://www.kastatic.org/images/badges/meteorite/hang-ten-40x40.png",
            "compact": "https://www.kastatic.org/images/badges/meteorite/hang-ten-60x60.png",
            "large": "https://www.kastatic.org/images/badges/meteorite/hang-ten-512x512.png",
            "email": "https://www.kastatic.org/images/badges/meteorite/hang-ten-70x70.png"
        },
        "absoluteUrl": "https://www.khanacademy.org/badges/hang-ten",
        "translatedSafeExtendedDescription": "Ten mastery challenges completed.",
        "translatedDescription": "Hang Ten",
        "isOwned": false,
        "badgeCategory": 0,
        "points": 0,
        "isRetired": false,
        "safeExtendedDescription": "Ten mastery challenges completed.",
        "slug": "hang-ten",
        "name": "tenthmasterytaskbadge"
    },
    {
        "iconSrc": "https://www.kastatic.org/images/badges/meteorite/ten-to-fourth-40x40.png",
        "hideContext": false,
        "description": "Ten to the Fourth",
        "relativeUrl": "/badges/ten-to-the-fourth",
        "icons": {
            "small": "https://www.kastatic.org/images/badges/meteorite/ten-to-fourth-40x40.png",
            "compact": "https://www.kastatic.org/images/badges/meteorite/ten-to-fourth-60x60.png",
            "large": "https://www.kastatic.org/images/badges/meteorite/ten-to-fourth-512x512.png",
            "email": "https://www.kastatic.org/images/badges/meteorite/ten-to-fourth-70x70.png"
        },
        "absoluteUrl": "https://www.khanacademy.org/badges/ten-to-the-fourth",
        "translatedSafeExtendedDescription": "Earn 10,000 energy points",
        "translatedDescription": "Ten to the Fourth",
        "isOwned": false,
        "badgeCategory": 0,
        "points": 0,
        "isRetired": false,
        "safeExtendedDescription": "Earn 10,000 energy points",
        "slug": "ten-to-the-fourth",
        "name": "tenthousandairebadge"
    },
    {
        "iconSrc": "https://www.kastatic.org/images/badges/meteorite/fingers-or-toes-40x40.png",
        "hideContext": false,
        "description": "Fingers or Toes",
        "relativeUrl": "/badges/fingers-or-toes",
        "icons": {
            "small": "https://www.kastatic.org/images/badges/meteorite/fingers-or-toes-40x40.png",
            "compact": "https://www.kastatic.org/images/badges/meteorite/fingers-or-toes-60x60.png",
            "large": "https://www.kastatic.org/images/badges/meteorite/fingers-or-toes-512x512.png",
            "email": "https://www.kastatic.org/images/badges/meteorite/fingers-or-toes-70x70.png"
        },
        "absoluteUrl": "https://www.khanacademy.org/badges/fingers-or-toes",
        "translatedSafeExtendedDescription": "Ten practice tasks!? Already?",
        "translatedDescription": "Fingers or Toes",
        "isOwned": false,
        "badgeCategory": 0,
        "points": 0,
        "isRetired": false,
        "safeExtendedDescription": "Ten practice tasks!? Already?",
        "slug": "fingers-or-toes",
        "name": "tenthpracticetaskbadge"
    },
    {
        "iconSrc": "https://www.kastatic.org/images/badges/meteorite/cs-scholar-40x40.png",
        "hideContext": false,
        "description": "CS Scholar",
        "relativeUrl": "/badges/cs-scholar",
        "icons": {
            "small": "https://www.kastatic.org/images/badges/meteorite/cs-scholar-40x40.png",
            "compact": "https://www.kastatic.org/images/badges/meteorite/cs-scholar-60x60.png",
            "large": "https://www.kastatic.org/images/badges/meteorite/cs-scholar-512x512.png",
            "email": "https://www.kastatic.org/images/badges/meteorite/cs-scholar-70x70.png"
        },
        "absoluteUrl": "https://www.khanacademy.org/badges/cs-scholar",
        "translatedSafeExtendedDescription": "Finish watching a CS tutorial",
        "translatedDescription": "CS Scholar",
        "isOwned": false,
        "badgeCategory": 0,
        "points": 0,
        "isRetired": false,
        "safeExtendedDescription": "Finish watching a CS tutorial",
        "slug": "cs-scholar",
        "name": "watchedscratchpadplaybackbadge"
    },
    {
        "iconSrc": "https://www.kastatic.org/images/badges/meteorite/perseverance-40x40.png",
        "hideContext": false,
        "description": "You Can Learn Anything",
        "relativeUrl": "/badges/you-can-learn-anything",
        "icons": {
            "small": "https://www.kastatic.org/images/badges/meteorite/perseverance-40x40.png",
            "compact": "https://www.kastatic.org/images/badges/meteorite/perseverance-60x60.png",
            "large": "https://www.kastatic.org/images/badges/meteorite/perseverance-512x512.png",
            "email": "https://www.kastatic.org/images/badges/meteorite/perseverance-70x70.png"
        },
        "absoluteUrl": "https://www.khanacademy.org/badges/you-can-learn-anything",
        "translatedSafeExtendedDescription": "You only have to know one thing -- You can learn anything. Join the movement.",
        "translatedDescription": "You Can Learn Anything",
        "isOwned": false,
        "badgeCategory": 0,
        "points": 0,
        "isRetired": false,
        "safeExtendedDescription": "You only have to know one thing -- You can learn anything. Join the movement.",
        "slug": "you-can-learn-anything",
        "name": "yclaadvocatebadge"
    },
    {
        "iconSrc": "https://www.kastatic.org/images/badges/meteorite/cypress-40x40.png",
        "hideContext": false,
        "description": "Cypress",
        "relativeUrl": "/badges/cypress",
        "icons": {
            "small": "https://www.kastatic.org/images/badges/meteorite/cypress-40x40.png",
            "compact": "https://www.kastatic.org/images/badges/meteorite/cypress-60x60.png",
            "large": "https://www.kastatic.org/images/badges/meteorite/cypress-512x512.png",
            "email": "https://www.kastatic.org/images/badges/meteorite/cypress-70x70.png"
        },
        "absoluteUrl": "https://www.khanacademy.org/badges/cypress",
        "translatedSafeExtendedDescription": "Remain a member of Khan Academy for 1 year",
        "translatedDescription": "Cypress",
        "isOwned": false,
        "badgeCategory": 0,
        "points": 0,
        "isRetired": false,
        "safeExtendedDescription": "Remain a member of Khan Academy for 1 year",
        "slug": "cypress",
        "name": "yearonebadge"
    },
    {
        "iconSrc": "https://www.kastatic.org/images/badges/moon/fact-checker-40x40.png",
        "hideContext": false,
        "description": "Fact Checker",
        "relativeUrl": "/badges/fact-checker",
        "icons": {
            "small": "https://www.kastatic.org/images/badges/moon/fact-checker-40x40.png",
            "compact": "https://www.kastatic.org/images/badges/moon/fact-checker-60x60.png",
            "large": "https://www.kastatic.org/images/badges/moon/fact-checker-512x512.png",
            "email": "https://www.kastatic.org/images/badges/moon/fact-checker-70x70.png"
        },
        "absoluteUrl": "https://www.khanacademy.org/badges/fact-checker",
        "translatedSafeExtendedDescription": "Have a clarification officially accepted",
        "translatedDescription": "Fact Checker",
        "isOwned": false,
        "badgeCategory": 1,
        "points": 0,
        "isRetired": false,
        "safeExtendedDescription": "Have a clarification officially accepted",
        "slug": "fact-checker",
        "name": "acceptclarificationbadge"
    },
    {
        "iconSrc": "https://www.kastatic.org/images/badges/moon/awesome-listener-40x40.png",
        "hideContext": false,
        "description": "Awesome Listener",
        "relativeUrl": "/badges/awesome-listener",
        "icons": {
            "small": "https://www.kastatic.org/images/badges/moon/awesome-listener-40x40.png",
            "compact": "https://www.kastatic.org/images/badges/moon/awesome-listener-60x60.png",
            "large": "https://www.kastatic.org/images/badges/moon/awesome-listener-512x512.png",
            "email": "https://www.kastatic.org/images/badges/moon/awesome-listener-70x70.png"
        },
        "absoluteUrl": "https://www.khanacademy.org/badges/awesome-listener",
        "translatedSafeExtendedDescription": "Watch 1 hour of video in a single topic",
        "translatedDescription": "Awesome Listener",
        "isOwned": false,
        "badgeCategory": 1,
        "points": 0,
        "isRetired": false,
        "safeExtendedDescription": "Watch 1 hour of video in a single topic",
        "slug": "awesome-listener",
        "name": "awesomeplaylisttimebadge"
    },
    {
        "iconSrc": "https://www.kastatic.org/images/badges/moon/going-supersonic-40x40.png",
        "hideContext": false,
        "description": "Going Supersonic",
        "relativeUrl": "/badges/going-supersonic",
        "icons": {
            "small": "https://www.kastatic.org/images/badges/moon/going-supersonic-40x40.png",
            "compact": "https://www.kastatic.org/images/badges/moon/going-supersonic-60x60.png",
            "large": "https://www.kastatic.org/images/badges/moon/going-supersonic-512x512.png",
            "email": "https://www.kastatic.org/images/badges/moon/going-supersonic-70x70.png"
        },
        "absoluteUrl": "https://www.khanacademy.org/badges/going-supersonic",
        "translatedSafeExtendedDescription": "Quickly & correctly answer 20 skill problems in a row (time limit depends on skill difficulty)",
        "translatedDescription": "Going Supersonic",
        "isOwned": false,
        "badgeCategory": 1,
        "points": 750,
        "isRetired": false,
        "safeExtendedDescription": "Quickly & correctly answer 20 skill problems in a row (time limit depends on skill difficulty)",
        "slug": "going-supersonic",
        "name": "awesometimedproblembadge"
    },
    {
        "iconSrc": "https://www.kastatic.org/images/badges/moon/like-clockwork-40x40.png",
        "hideContext": false,
        "description": "Like Clockwork",
        "relativeUrl": "/badges/like-clockwork",
        "icons": {
            "small": "https://www.kastatic.org/images/badges/moon/like-clockwork-40x40.png",
            "compact": "https://www.kastatic.org/images/badges/moon/like-clockwork-60x60.png",
            "large": "https://www.kastatic.org/images/badges/moon/like-clockwork-512x512.png",
            "email": "https://www.kastatic.org/images/badges/moon/like-clockwork-70x70.png"
        },
        "absoluteUrl": "https://www.khanacademy.org/badges/like-clockwork",
        "translatedSafeExtendedDescription": "Watch part of any video or work on any skill each day for 15 consecutive days",
        "translatedDescription": "Like Clockwork",
        "isOwned": false,
        "badgeCategory": 1,
        "points": 0,
        "isRetired": false,
        "safeExtendedDescription": "Watch part of any video or work on any skill each day for 15 consecutive days",
        "slug": "like-clockwork",
        "name": "fifteendayconsecutiveactivitybadge"
    },
    {
        "iconSrc": "https://www.kastatic.org/images/badges/moon/good-inspiration-40x40.png",
        "hideContext": false,
        "description": "Good Inspiration",
        "relativeUrl": "/badges/good-inspiration",
        "icons": {
            "small": "https://www.kastatic.org/images/badges/moon/good-inspiration-40x40.png",
            "compact": "https://www.kastatic.org/images/badges/moon/good-inspiration-60x60.png",
            "large": "https://www.kastatic.org/images/badges/moon/good-inspiration-512x512.png",
            "email": "https://www.kastatic.org/images/badges/moon/good-inspiration-70x70.png"
        },
        "absoluteUrl": "https://www.khanacademy.org/badges/good-inspiration",
        "translatedSafeExtendedDescription": "Other users created 10 programs based on one of yours",
        "translatedDescription": "Good Inspiration",
        "isOwned": false,
        "badgeCategory": 1,
        "points": 1000,
        "isRetired": false,
        "safeExtendedDescription": "Other users created 10 programs based on one of yours",
        "slug": "good-inspiration",
        "name": "getforkedtentimesbadge"
    },
    {
        "iconSrc": "https://www.kastatic.org/images/badges/moon/going-transonic-40x40.png",
        "hideContext": false,
        "description": "Going Transonic",
        "relativeUrl": "/badges/going-transonic",
        "icons": {
            "small": "https://www.kastatic.org/images/badges/moon/going-transonic-40x40.png",
            "compact": "https://www.kastatic.org/images/badges/moon/going-transonic-60x60.png",
            "large": "https://www.kastatic.org/images/badges/moon/going-transonic-512x512.png",
            "email": "https://www.kastatic.org/images/badges/moon/going-transonic-70x70.png"
        },
        "absoluteUrl": "https://www.khanacademy.org/badges/going-transonic",
        "translatedSafeExtendedDescription": "Quickly & correctly answer 10 skill problems in a row (time limit depends on skill difficulty)",
        "translatedDescription": "Going Transonic",
        "isOwned": false,
        "badgeCategory": 1,
        "points": 500,
        "isRetired": false,
        "safeExtendedDescription": "Quickly & correctly answer 10 skill problems in a row (time limit depends on skill difficulty)",
        "slug": "going-transonic",
        "name": "greattimedproblembadge"
    },
    {
        "iconSrc": "https://www.kastatic.org/images/badges/moon/hard-at-work-40x40.png",
        "hideContext": false,
        "description": "Hard at Work",
        "relativeUrl": "/badges/hard-at-work",
        "icons": {
            "small": "https://www.kastatic.org/images/badges/moon/hard-at-work-40x40.png",
            "compact": "https://www.kastatic.org/images/badges/moon/hard-at-work-60x60.png",
            "large": "https://www.kastatic.org/images/badges/moon/hard-at-work-512x512.png",
            "email": "https://www.kastatic.org/images/badges/moon/hard-at-work-70x70.png"
        },
        "absoluteUrl": "https://www.khanacademy.org/badges/hard-at-work",
        "translatedSafeExtendedDescription": "Achieve mastery in 25 unique skills",
        "translatedDescription": "Hard at Work",
        "isOwned": false,
        "badgeCategory": 1,
        "points": 6000,
        "isRetired": false,
        "safeExtendedDescription": "Achieve mastery in 25 unique skills",
        "slug": "hard-at-work",
        "name": "hardatworkmasterybadge"
    },
    {
        "iconSrc": "https://www.kastatic.org/images/badges/moon/ten-to-fifth-40x40.png",
        "hideContext": false,
        "description": "Ten to the Fifth",
        "relativeUrl": "/badges/ten-to-the-fifth",
        "icons": {
            "small": "https://www.kastatic.org/images/badges/moon/ten-to-fifth-40x40.png",
            "compact": "https://www.kastatic.org/images/badges/moon/ten-to-fifth-60x60.png",
            "large": "https://www.kastatic.org/images/badges/moon/ten-to-fifth-512x512.png",
            "email": "https://www.kastatic.org/images/badges/moon/ten-to-fifth-70x70.png"
        },
        "absoluteUrl": "https://www.khanacademy.org/badges/ten-to-the-fifth",
        "translatedSafeExtendedDescription": "Earn 100,000 energy points",
        "translatedDescription": "Ten to the Fifth",
        "isOwned": false,
        "badgeCategory": 1,
        "points": 0,
        "isRetired": false,
        "safeExtendedDescription": "Earn 100,000 energy points",
        "slug": "ten-to-the-fifth",
        "name": "hundredthousandairebadge"
    },
    {
        "iconSrc": "https://www.kastatic.org/images/badges/moon/1000-kelvin-40x40.png",
        "hideContext": false,
        "description": "1000 Kelvin",
        "relativeUrl": "/badges/1000-kelvin",
        "icons": {
            "small": "https://www.kastatic.org/images/badges/moon/1000-kelvin-40x40.png",
            "compact": "https://www.kastatic.org/images/badges/moon/1000-kelvin-60x60.png",
            "large": "https://www.kastatic.org/images/badges/moon/1000-kelvin-512x512.png",
            "email": "https://www.kastatic.org/images/badges/moon/1000-kelvin-70x70.png"
        },
        "absoluteUrl": "https://www.khanacademy.org/badges/1000-kelvin",
        "translatedSafeExtendedDescription": "Have a red-hot program at the top of the Community Programs list",
        "translatedDescription": "1000 Kelvin",
        "isOwned": false,
        "badgeCategory": 1,
        "points": 1000,
        "isRetired": false,
        "safeExtendedDescription": "Have a red-hot program at the top of the Community Programs list",
        "slug": "1000-kelvin",
        "name": "kelvinbadge"
    },
    {
        "iconSrc": "https://www.kastatic.org/images/badges/moon/good-answer-40x40.png",
        "hideContext": true,
        "description": "Good Answer",
        "relativeUrl": "/badges/good-answer",
        "icons": {
            "small": "https://www.kastatic.org/images/badges/moon/good-answer-40x40.png",
            "compact": "https://www.kastatic.org/images/badges/moon/good-answer-60x60.png",
            "large": "https://www.kastatic.org/images/badges/moon/good-answer-512x512.png",
            "email": "https://www.kastatic.org/images/badges/moon/good-answer-70x70.png"
        },
        "absoluteUrl": "https://www.khanacademy.org/badges/good-answer",
        "translatedSafeExtendedDescription": "Post an answer that earns 10+ votes",
        "translatedDescription": "Good Answer",
        "isOwned": false,
        "badgeCategory": 1,
        "points": 0,
        "isRetired": false,
        "safeExtendedDescription": "Post an answer that earns 10+ votes",
        "slug": "good-answer",
        "name": "leveloneanswervotecountbadge"
    },
    {
        "iconSrc": "https://www.kastatic.org/images/badges/moon/good-question-40x40.png",
        "hideContext": true,
        "description": "Good Question",
        "relativeUrl": "/badges/good-question",
        "icons": {
            "small": "https://www.kastatic.org/images/badges/moon/good-question-40x40.png",
            "compact": "https://www.kastatic.org/images/badges/moon/good-question-60x60.png",
            "large": "https://www.kastatic.org/images/badges/moon/good-question-512x512.png",
            "email": "https://www.kastatic.org/images/badges/moon/good-question-70x70.png"
        },
        "absoluteUrl": "https://www.khanacademy.org/badges/good-question",
        "translatedSafeExtendedDescription": "Ask a question that earns 10+ votes",
        "translatedDescription": "Good Question",
        "isOwned": false,
        "badgeCategory": 1,
        "points": 0,
        "isRetired": false,
        "safeExtendedDescription": "Ask a question that earns 10+ votes",
        "slug": "good-question",
        "name": "levelonequestionvotecountbadge"
    },
    {
        "iconSrc": "https://www.kastatic.org/images/badges/moon/ludicrous-streak-40x40.png",
        "hideContext": false,
        "description": "Ludicrous Streak",
        "relativeUrl": "/badges/ludicrous-streak",
        "icons": {
            "small": "https://www.kastatic.org/images/badges/moon/ludicrous-streak-40x40.png",
            "compact": "https://www.kastatic.org/images/badges/moon/ludicrous-streak-60x60.png",
            "large": "https://www.kastatic.org/images/badges/moon/ludicrous-streak-512x512.png",
            "email": "https://www.kastatic.org/images/badges/moon/ludicrous-streak-70x70.png"
        },
        "absoluteUrl": "https://www.khanacademy.org/badges/ludicrous-streak",
        "translatedSafeExtendedDescription": "Correctly answer 100 problems in a row in a single skill",
        "translatedDescription": "Ludicrous Streak",
        "isOwned": false,
        "badgeCategory": 1,
        "points": 0,
        "isRetired": false,
        "safeExtendedDescription": "Correctly answer 100 problems in a row in a single skill",
        "slug": "ludicrous-streak",
        "name": "ludicrousstreakbadge"
    },
    {
        "iconSrc": "https://www.kastatic.org/images/badges/moon/hard-at-work-40x40.png",
        "hideContext": false,
        "description": "Brain Bonanza",
        "relativeUrl": "/badges/brain-bonanza",
        "icons": {
            "small": "https://www.kastatic.org/images/badges/moon/hard-at-work-40x40.png",
            "compact": "https://www.kastatic.org/images/badges/moon/hard-at-work-60x60.png",
            "large": "https://www.kastatic.org/images/badges/moon/hard-at-work-512x512.png",
            "email": "https://www.kastatic.org/images/badges/moon/hard-at-work-70x70.png"
        },
        "absoluteUrl": "https://www.khanacademy.org/badges/brain-bonanza",
        "translatedSafeExtendedDescription": "By taking the same brain fitness test several times, you are watching yourself learn!",
        "translatedDescription": "Brain Bonanza",
        "isOwned": false,
        "badgeCategory": 1,
        "points": 2000,
        "isRetired": false,
        "safeExtendedDescription": "By taking the same brain fitness test several times, you are watching yourself learn!",
        "slug": "brain-bonanza",
        "name": "monthlyfitnesstestbadge"
    },
    {
        "iconSrc": "https://www.kastatic.org/images/badges/moon/power-hour-40x40.png",
        "hideContext": false,
        "description": "Power Hour",
        "relativeUrl": "/badges/power-hour",
        "icons": {
            "small": "https://www.kastatic.org/images/badges/moon/power-hour-40x40.png",
            "compact": "https://www.kastatic.org/images/badges/moon/power-hour-60x60.png",
            "large": "https://www.kastatic.org/images/badges/moon/power-hour-512x512.png",
            "email": "https://www.kastatic.org/images/badges/moon/power-hour-70x70.png"
        },
        "absoluteUrl": "https://www.khanacademy.org/badges/power-hour",
        "translatedSafeExtendedDescription": "Correctly answer 90 problems and watch 15 minutes of video in 1 hour",
        "translatedDescription": "Power Hour",
        "isOwned": false,
        "badgeCategory": 1,
        "points": 0,
        "isRetired": false,
        "safeExtendedDescription": "Correctly answer 90 problems and watch 15 minutes of video in 1 hour",
        "slug": "power-hour",
        "name": "powerhourbadge"
    },
    {
        "iconSrc": "https://www.kastatic.org/images/badges/moon/productive-40x40.png",
        "hideContext": false,
        "description": "Productive",
        "relativeUrl": "/badges/productive",
        "icons": {
            "small": "https://www.kastatic.org/images/badges/moon/productive-40x40.png",
            "compact": "https://www.kastatic.org/images/badges/moon/productive-60x60.png",
            "large": "https://www.kastatic.org/images/badges/moon/productive-512x512.png",
            "email": "https://www.kastatic.org/images/badges/moon/productive-70x70.png"
        },
        "absoluteUrl": "https://www.khanacademy.org/badges/productive",
        "translatedSafeExtendedDescription": "Achieve mastery in 15 unique skills",
        "translatedDescription": "Productive",
        "isOwned": false,
        "badgeCategory": 1,
        "points": 2000,
        "isRetired": false,
        "safeExtendedDescription": "Achieve mastery in 15 unique skills",
        "slug": "productive",
        "name": "productivemasterybadge"
    },
    {
        "iconSrc": "https://www.kastatic.org/images/badges/moon/tenacity-40x40.png",
        "hideContext": false,
        "description": "Sticktoitiveness",
        "relativeUrl": "/badges/sticktoitiveness",
        "icons": {
            "small": "https://www.kastatic.org/images/badges/moon/tenacity-40x40.png",
            "compact": "https://www.kastatic.org/images/badges/moon/tenacity-60x60.png",
            "large": "https://www.kastatic.org/images/badges/moon/tenacity-512x512.png",
            "email": "https://www.kastatic.org/images/badges/moon/tenacity-70x70.png"
        },
        "absoluteUrl": "https://www.khanacademy.org/badges/sticktoitiveness",
        "translatedSafeExtendedDescription": "Answer a problem correctly after having some trouble with many problems and sticking with the skill",
        "translatedDescription": "Sticktoitiveness",
        "isOwned": false,
        "badgeCategory": 1,
        "points": 0,
        "isRetired": false,
        "safeExtendedDescription": "Answer a problem correctly after having some trouble with many problems and sticking with the skill",
        "slug": "sticktoitiveness",
        "name": "resurrectionbadge"
    },
    {
        "iconSrc": "https://www.kastatic.org/images/badges/moon/ridiculous-streak-40x40.png",
        "hideContext": false,
        "description": "Ridiculous Streak",
        "relativeUrl": "/badges/ridiculous-streak",
        "icons": {
            "small": "https://www.kastatic.org/images/badges/moon/ridiculous-streak-40x40.png",
            "compact": "https://www.kastatic.org/images/badges/moon/ridiculous-streak-60x60.png",
            "large": "https://www.kastatic.org/images/badges/moon/ridiculous-streak-512x512.png",
            "email": "https://www.kastatic.org/images/badges/moon/ridiculous-streak-70x70.png"
        },
        "absoluteUrl": "https://www.khanacademy.org/badges/ridiculous-streak",
        "translatedSafeExtendedDescription": "Correctly answer 80 problems in a row in a single skill",
        "translatedDescription": "Ridiculous Streak",
        "isOwned": false,
        "badgeCategory": 1,
        "points": 0,
        "isRetired": false,
        "safeExtendedDescription": "Correctly answer 80 problems in a row in a single skill",
        "slug": "ridiculous-streak",
        "name": "ridiculousstreakbadge"
    },
    {
        "iconSrc": "https://www.kastatic.org/images/badges/moon/atomic-clockwork-40x40.png",
        "hideContext": false,
        "description": "Atomic Clockwork",
        "relativeUrl": "/badges/atomic-clockwork",
        "icons": {
            "small": "https://www.kastatic.org/images/badges/moon/atomic-clockwork-40x40.png",
            "compact": "https://www.kastatic.org/images/badges/moon/atomic-clockwork-60x60.png",
            "large": "https://www.kastatic.org/images/badges/moon/atomic-clockwork-512x512.png",
            "email": "https://www.kastatic.org/images/badges/moon/atomic-clockwork-70x70.png"
        },
        "absoluteUrl": "https://www.khanacademy.org/badges/atomic-clockwork",
        "translatedSafeExtendedDescription": "Watch part of any video or work on any skill each day for 30 consecutive days",
        "translatedDescription": "Atomic Clockwork",
        "isOwned": false,
        "badgeCategory": 1,
        "points": 0,
        "isRetired": false,
        "safeExtendedDescription": "Watch part of any video or work on any skill each day for 30 consecutive days",
        "slug": "atomic-clockwork",
        "name": "thirtydayconsecutiveactivitybadge"
    },
    {
        "iconSrc": "https://www.kastatic.org/images/badges/moon/weekly-mastery-40x40.png",
        "hideContext": false,
        "description": "Geek of the week: mastery",
        "relativeUrl": "/badges/geek-of-the-week-mastery",
        "icons": {
            "small": "https://www.kastatic.org/images/badges/moon/weekly-mastery-40x40.png",
            "compact": "https://www.kastatic.org/images/badges/moon/weekly-mastery-60x60.png",
            "large": "https://www.kastatic.org/images/badges/moon/weekly-mastery-512x512.png",
            "email": "https://www.kastatic.org/images/badges/moon/weekly-mastery-70x70.png"
        },
        "absoluteUrl": "https://www.khanacademy.org/badges/geek-of-the-week-mastery",
        "translatedSafeExtendedDescription": "Finish 5 mastery challenges in a week",
        "translatedDescription": "Geek of the week: mastery",
        "isOwned": false,
        "badgeCategory": 1,
        "points": 0,
        "isRetired": false,
        "safeExtendedDescription": "Finish 5 mastery challenges in a week",
        "slug": "geek-of-the-week-mastery",
        "name": "weeklymasterybadge"
    },
    {
        "iconSrc": "https://www.kastatic.org/images/badges/moon/weekly-goal-40x40.png",
        "hideContext": false,
        "description": "Geek of the week: practice",
        "relativeUrl": "/badges/geek-of-the-week-practice",
        "icons": {
            "small": "https://www.kastatic.org/images/badges/moon/weekly-goal-40x40.png",
            "compact": "https://www.kastatic.org/images/badges/moon/weekly-goal-60x60.png",
            "large": "https://www.kastatic.org/images/badges/moon/weekly-goal-512x512.png",
            "email": "https://www.kastatic.org/images/badges/moon/weekly-goal-70x70.png"
        },
        "absoluteUrl": "https://www.khanacademy.org/badges/geek-of-the-week-practice",
        "translatedSafeExtendedDescription": "Finish 5 practice tasks in a week",
        "translatedDescription": "Geek of the week: practice",
        "isOwned": false,
        "badgeCategory": 1,
        "points": 0,
        "isRetired": false,
        "safeExtendedDescription": "Finish 5 practice tasks in a week",
        "slug": "geek-of-the-week-practice",
        "name": "weeklypracticebadge"
    },
    {
        "iconSrc": "https://www.kastatic.org/images/badges/moon/redwood-40x40.png",
        "hideContext": false,
        "description": "Redwood",
        "relativeUrl": "/badges/redwood",
        "icons": {
            "small": "https://www.kastatic.org/images/badges/moon/redwood-40x40.png",
            "compact": "https://www.kastatic.org/images/badges/moon/redwood-60x60.png",
            "large": "https://www.kastatic.org/images/badges/moon/redwood-512x512.png",
            "email": "https://www.kastatic.org/images/badges/moon/redwood-70x70.png"
        },
        "absoluteUrl": "https://www.khanacademy.org/badges/redwood",
        "translatedSafeExtendedDescription": "Remain a member of Khan Academy for 2 years",
        "translatedDescription": "Redwood",
        "isOwned": false,
        "badgeCategory": 1,
        "points": 0,
        "isRetired": false,
        "safeExtendedDescription": "Remain a member of Khan Academy for 2 years",
        "slug": "redwood",
        "name": "yeartwobadge"
    },
    {
        "iconSrc": "https://www.kastatic.org/images/badges/earth/power-hour-40x40.png",
        "hideContext": false,
        "description": "Double Power Hour",
        "relativeUrl": "/badges/double-power-hour",
        "icons": {
            "small": "https://www.kastatic.org/images/badges/earth/power-hour-40x40.png",
            "compact": "https://www.kastatic.org/images/badges/earth/power-hour-60x60.png",
            "large": "https://www.kastatic.org/images/badges/earth/power-hour-512x512.png",
            "email": "https://www.kastatic.org/images/badges/earth/power-hour-70x70.png"
        },
        "absoluteUrl": "https://www.khanacademy.org/badges/double-power-hour",
        "translatedSafeExtendedDescription": "Correctly answer 180 problems and watch 30 minutes of video in 2 hours",
        "translatedDescription": "Double Power Hour",
        "isOwned": false,
        "badgeCategory": 2,
        "points": 0,
        "isRetired": false,
        "safeExtendedDescription": "Correctly answer 180 problems and watch 30 minutes of video in 2 hours",
        "slug": "double-power-hour",
        "name": "doublepowerhourbadge"
    },
    {
        "iconSrc": "https://www.kastatic.org/images/badges/earth/5x10-40x40.png",
        "hideContext": false,
        "description": "Five Times Ten to the Fifth",
        "relativeUrl": "/badges/five-times-ten-to-the-fifth",
        "icons": {
            "small": "https://www.kastatic.org/images/badges/earth/5x10-40x40.png",
            "compact": "https://www.kastatic.org/images/badges/earth/5x10-60x60.png",
            "large": "https://www.kastatic.org/images/badges/earth/5x10-512x512.png",
            "email": "https://www.kastatic.org/images/badges/earth/5x10-70x70.png"
        },
        "absoluteUrl": "https://www.khanacademy.org/badges/five-times-ten-to-the-fifth",
        "translatedSafeExtendedDescription": "Earn 500,000 energy points",
        "translatedDescription": "Five Times Ten to the Fifth",
        "isOwned": false,
        "badgeCategory": 2,
        "points": 0,
        "isRetired": false,
        "safeExtendedDescription": "Earn 500,000 energy points",
        "slug": "five-times-ten-to-the-fifth",
        "name": "fivehundredthousandairebadge"
    },
    {
        "iconSrc": "https://www.kastatic.org/images/badges/earth/incredible-inspiration-40x40.png",
        "hideContext": false,
        "description": "Incredible Inspiration",
        "relativeUrl": "/badges/incredible-inspiration",
        "icons": {
            "small": "https://www.kastatic.org/images/badges/earth/incredible-inspiration-40x40.png",
            "compact": "https://www.kastatic.org/images/badges/earth/incredible-inspiration-60x60.png",
            "large": "https://www.kastatic.org/images/badges/earth/incredible-inspiration-512x512.png",
            "email": "https://www.kastatic.org/images/badges/earth/incredible-inspiration-70x70.png"
        },
        "absoluteUrl": "https://www.khanacademy.org/badges/incredible-inspiration",
        "translatedSafeExtendedDescription": "Other users created 50 programs based on one of yours",
        "translatedDescription": "Incredible Inspiration",
        "isOwned": false,
        "badgeCategory": 2,
        "points": 5000,
        "isRetired": false,
        "safeExtendedDescription": "Other users created 50 programs based on one of yours",
        "slug": "incredible-inspiration",
        "name": "getforkedfiftytimesbadge"
    },
    {
        "iconSrc": "https://www.kastatic.org/images/badges/earth/great-inspiration-40x40.png",
        "hideContext": false,
        "description": "Great Inspiration",
        "relativeUrl": "/badges/great-inspiration",
        "icons": {
            "small": "https://www.kastatic.org/images/badges/earth/great-inspiration-40x40.png",
            "compact": "https://www.kastatic.org/images/badges/earth/great-inspiration-60x60.png",
            "large": "https://www.kastatic.org/images/badges/earth/great-inspiration-512x512.png",
            "email": "https://www.kastatic.org/images/badges/earth/great-inspiration-70x70.png"
        },
        "absoluteUrl": "https://www.khanacademy.org/badges/great-inspiration",
        "translatedSafeExtendedDescription": "Other users created 25 programs based on one of yours",
        "translatedDescription": "Great Inspiration",
        "isOwned": false,
        "badgeCategory": 2,
        "points": 2500,
        "isRetired": false,
        "safeExtendedDescription": "Other users created 25 programs based on one of yours",
        "slug": "great-inspiration",
        "name": "getforkedtwentyfivetimesbadge"
    },
    {
        "iconSrc": "https://www.kastatic.org/images/badges/earth/10000-year-clock-40x40.png",
        "hideContext": false,
        "description": "10,000 Year Clock",
        "relativeUrl": "/badges/10000-year-clock",
        "icons": {
            "small": "https://www.kastatic.org/images/badges/earth/10000-year-clock-40x40.png",
            "compact": "https://www.kastatic.org/images/badges/earth/10000-year-clock-60x60.png",
            "large": "https://www.kastatic.org/images/badges/earth/10000-year-clock-512x512.png",
            "email": "https://www.kastatic.org/images/badges/earth/10000-year-clock-70x70.png"
        },
        "absoluteUrl": "https://www.khanacademy.org/badges/10000-year-clock",
        "translatedSafeExtendedDescription": "Watch part of any video or work on any skill each day for 100 consecutive days",
        "translatedDescription": "10,000 Year Clock",
        "isOwned": false,
        "badgeCategory": 2,
        "points": 0,
        "isRetired": false,
        "safeExtendedDescription": "Watch part of any video or work on any skill each day for 100 consecutive days",
        "slug": "10000-year-clock",
        "name": "hundreddayconsecutiveactivitybadge"
    },
    {
        "iconSrc": "https://www.kastatic.org/images/badges/earth/guru-40x40.png",
        "hideContext": false,
        "description": "Guru",
        "relativeUrl": "/badges/guru",
        "icons": {
            "small": "https://www.kastatic.org/images/badges/earth/guru-40x40.png",
            "compact": "https://www.kastatic.org/images/badges/earth/guru-60x60.png",
            "large": "https://www.kastatic.org/images/badges/earth/guru-512x512.png",
            "email": "https://www.kastatic.org/images/badges/earth/guru-70x70.png"
        },
        "absoluteUrl": "https://www.khanacademy.org/badges/guru",
        "translatedSafeExtendedDescription": "Post 10 answers that earn 3+ votes",
        "translatedDescription": "Guru",
        "isOwned": false,
        "badgeCategory": 2,
        "points": 0,
        "isRetired": false,
        "safeExtendedDescription": "Post 10 answers that earn 3+ votes",
        "slug": "guru",
        "name": "leveloneanswerqualitycountbadge"
    },
    {
        "iconSrc": "https://www.kastatic.org/images/badges/earth/investigator-40x40.png",
        "hideContext": false,
        "description": "Investigator",
        "relativeUrl": "/badges/investigator",
        "icons": {
            "small": "https://www.kastatic.org/images/badges/earth/investigator-40x40.png",
            "compact": "https://www.kastatic.org/images/badges/earth/investigator-60x60.png",
            "large": "https://www.kastatic.org/images/badges/earth/investigator-512x512.png",
            "email": "https://www.kastatic.org/images/badges/earth/investigator-70x70.png"
        },
        "absoluteUrl": "https://www.khanacademy.org/badges/investigator",
        "translatedSafeExtendedDescription": "Ask 10 questions that earn 3+ votes",
        "translatedDescription": "Investigator",
        "isOwned": false,
        "badgeCategory": 2,
        "points": 0,
        "isRetired": false,
        "safeExtendedDescription": "Ask 10 questions that earn 3+ votes",
        "slug": "investigator",
        "name": "levelonequestionqualitycountbadge"
    },
    {
        "iconSrc": "https://www.kastatic.org/images/badges/earth/incredible-answer-40x40.png",
        "hideContext": true,
        "description": "Incredible Answer",
        "relativeUrl": "/badges/incredible-answer",
        "icons": {
            "small": "https://www.kastatic.org/images/badges/earth/incredible-answer-40x40.png",
            "compact": "https://www.kastatic.org/images/badges/earth/incredible-answer-60x60.png",
            "large": "https://www.kastatic.org/images/badges/earth/incredible-answer-512x512.png",
            "email": "https://www.kastatic.org/images/badges/earth/incredible-answer-70x70.png"
        },
        "absoluteUrl": "https://www.khanacademy.org/badges/incredible-answer",
        "translatedSafeExtendedDescription": "Post an answer that earns 50+ votes",
        "translatedDescription": "Incredible Answer",
        "isOwned": false,
        "badgeCategory": 2,
        "points": 0,
        "isRetired": false,
        "safeExtendedDescription": "Post an answer that earns 50+ votes",
        "slug": "incredible-answer",
        "name": "levelthreeanswervotecountbadge"
    },
    {
        "iconSrc": "https://www.kastatic.org/images/badges/earth/incredible-question-40x40.png",
        "hideContext": true,
        "description": "Incredible Question",
        "relativeUrl": "/badges/incredible-question",
        "icons": {
            "small": "https://www.kastatic.org/images/badges/earth/incredible-question-40x40.png",
            "compact": "https://www.kastatic.org/images/badges/earth/incredible-question-60x60.png",
            "large": "https://www.kastatic.org/images/badges/earth/incredible-question-512x512.png",
            "email": "https://www.kastatic.org/images/badges/earth/incredible-question-70x70.png"
        },
        "absoluteUrl": "https://www.khanacademy.org/badges/incredible-question",
        "translatedSafeExtendedDescription": "Ask a question that earns 50+ votes",
        "translatedDescription": "Incredible Question",
        "isOwned": false,
        "badgeCategory": 2,
        "points": 0,
        "isRetired": false,
        "safeExtendedDescription": "Ask a question that earns 50+ votes",
        "slug": "incredible-question",
        "name": "levelthreequestionvotecountbadge"
    },
    {
        "iconSrc": "https://www.kastatic.org/images/badges/earth/great-answer-40x40.png",
        "hideContext": true,
        "description": "Great Answer",
        "relativeUrl": "/badges/great-answer",
        "icons": {
            "small": "https://www.kastatic.org/images/badges/earth/great-answer-40x40.png",
            "compact": "https://www.kastatic.org/images/badges/earth/great-answer-60x60.png",
            "large": "https://www.kastatic.org/images/badges/earth/great-answer-512x512.png",
            "email": "https://www.kastatic.org/images/badges/earth/great-answer-70x70.png"
        },
        "absoluteUrl": "https://www.khanacademy.org/badges/great-answer",
        "translatedSafeExtendedDescription": "Post an answer that earns 25+ votes",
        "translatedDescription": "Great Answer",
        "isOwned": false,
        "badgeCategory": 2,
        "points": 0,
        "isRetired": false,
        "safeExtendedDescription": "Post an answer that earns 25+ votes",
        "slug": "great-answer",
        "name": "leveltwoanswervotecountbadge"
    },
    {
        "iconSrc": "https://www.kastatic.org/images/badges/earth/great-question-40x40.png",
        "hideContext": true,
        "description": "Great Question",
        "relativeUrl": "/badges/great-question",
        "icons": {
            "small": "https://www.kastatic.org/images/badges/earth/great-question-40x40.png",
            "compact": "https://www.kastatic.org/images/badges/earth/great-question-60x60.png",
            "large": "https://www.kastatic.org/images/badges/earth/great-question-512x512.png",
            "email": "https://www.kastatic.org/images/badges/earth/great-question-70x70.png"
        },
        "absoluteUrl": "https://www.khanacademy.org/badges/great-question",
        "translatedSafeExtendedDescription": "Ask a question that earns 25+ votes",
        "translatedDescription": "Great Question",
        "isOwned": false,
        "badgeCategory": 2,
        "points": 0,
        "isRetired": false,
        "safeExtendedDescription": "Ask a question that earns 25+ votes",
        "slug": "great-question",
        "name": "leveltwoquestionvotecountbadge"
    },
    {
        "iconSrc": "https://www.kastatic.org/images/badges/earth/299-meters-40x40.png",
        "hideContext": false,
        "description": "299,792,458 Meters per Second",
        "relativeUrl": "/badges/299792458-meters-per-second",
        "icons": {
            "small": "https://www.kastatic.org/images/badges/earth/299-meters-40x40.png",
            "compact": "https://www.kastatic.org/images/badges/earth/299-meters-60x60.png",
            "large": "https://www.kastatic.org/images/badges/earth/299-meters-512x512.png",
            "email": "https://www.kastatic.org/images/badges/earth/299-meters-70x70.png"
        },
        "absoluteUrl": "https://www.khanacademy.org/badges/299792458-meters-per-second",
        "translatedSafeExtendedDescription": "Quickly & correctly answer 75 skill problems in a row (time limit depends on skill difficulty)",
        "translatedDescription": "299,792,458 Meters per Second",
        "isOwned": false,
        "badgeCategory": 2,
        "points": 5000,
        "isRetired": false,
        "safeExtendedDescription": "Quickly & correctly answer 75 skill problems in a row (time limit depends on skill difficulty)",
        "slug": "299792458-meters-per-second",
        "name": "ludicroustimedproblembadge"
    },
    {
        "iconSrc": "https://www.kastatic.org/images/badges/earth/patron-2014-40x40.png",
        "hideContext": false,
        "description": "2014 Patron",
        "relativeUrl": "/badges/2014-patron",
        "icons": {
            "small": "https://www.kastatic.org/images/badges/earth/patron-2014-40x40.png",
            "compact": "https://www.kastatic.org/images/badges/earth/patron-2014-60x60.png",
            "large": "https://www.kastatic.org/images/badges/earth/patron-2014-512x512.png",
            "email": "https://www.kastatic.org/images/badges/earth/patron-2014-70x70.png"
        },
        "absoluteUrl": "https://www.khanacademy.org/badges/2014-patron",
        "translatedSafeExtendedDescription": "Support Khan Academy with a donation in 2014",
        "translatedDescription": "2014 Patron",
        "isOwned": false,
        "badgeCategory": 2,
        "points": 0,
        "isRetired": false,
        "safeExtendedDescription": "Support Khan Academy with a donation in 2014",
        "slug": "2014-patron",
        "name": "patron2014badge"
    },
    {
        "iconSrc": "https://www.kastatic.org/images/badges/earth/ridiculous-listener-40x40.png",
        "hideContext": false,
        "description": "Ridiculous Listener",
        "relativeUrl": "/badges/ridiculous-listener",
        "icons": {
            "small": "https://www.kastatic.org/images/badges/earth/ridiculous-listener-40x40.png",
            "compact": "https://www.kastatic.org/images/badges/earth/ridiculous-listener-60x60.png",
            "large": "https://www.kastatic.org/images/badges/earth/ridiculous-listener-512x512.png",
            "email": "https://www.kastatic.org/images/badges/earth/ridiculous-listener-70x70.png"
        },
        "absoluteUrl": "https://www.khanacademy.org/badges/ridiculous-listener",
        "translatedSafeExtendedDescription": "Watch 4 hours of video in a single topic",
        "translatedDescription": "Ridiculous Listener",
        "isOwned": false,
        "badgeCategory": 2,
        "points": 0,
        "isRetired": false,
        "safeExtendedDescription": "Watch 4 hours of video in a single topic",
        "slug": "ridiculous-listener",
        "name": "ridiculousplaylisttimebadge"
    },
    {
        "iconSrc": "https://www.kastatic.org/images/badges/earth/sublight-speed-40x40.png",
        "hideContext": false,
        "description": "Sub-light Speed",
        "relativeUrl": "/badges/sub-light-speed",
        "icons": {
            "small": "https://www.kastatic.org/images/badges/earth/sublight-speed-40x40.png",
            "compact": "https://www.kastatic.org/images/badges/earth/sublight-speed-60x60.png",
            "large": "https://www.kastatic.org/images/badges/earth/sublight-speed-512x512.png",
            "email": "https://www.kastatic.org/images/badges/earth/sublight-speed-70x70.png"
        },
        "absoluteUrl": "https://www.khanacademy.org/badges/sub-light-speed",
        "translatedSafeExtendedDescription": "Quickly & correctly answer 42 skill problems in a row (time limit depends on skill difficulty)",
        "translatedDescription": "Sub-light Speed",
        "isOwned": false,
        "badgeCategory": 2,
        "points": 1500,
        "isRetired": false,
        "safeExtendedDescription": "Quickly & correctly answer 42 skill problems in a row (time limit depends on skill difficulty)",
        "slug": "sub-light-speed",
        "name": "ridiculoustimedproblembadge"
    },
    {
        "iconSrc": "https://www.kastatic.org/images/badges/earth/work-horse-40x40.png",
        "hideContext": false,
        "description": "Work Horse",
        "relativeUrl": "/badges/work-horse",
        "icons": {
            "small": "https://www.kastatic.org/images/badges/earth/work-horse-40x40.png",
            "compact": "https://www.kastatic.org/images/badges/earth/work-horse-60x60.png",
            "large": "https://www.kastatic.org/images/badges/earth/work-horse-512x512.png",
            "email": "https://www.kastatic.org/images/badges/earth/work-horse-70x70.png"
        },
        "absoluteUrl": "https://www.khanacademy.org/badges/work-horse",
        "translatedSafeExtendedDescription": "Achieve mastery in 50 unique skills",
        "translatedDescription": "Work Horse",
        "isOwned": false,
        "badgeCategory": 2,
        "points": 14000,
        "isRetired": false,
        "safeExtendedDescription": "Achieve mastery in 50 unique skills",
        "slug": "work-horse",
        "name": "workhorsemasterybadge"
    },
    {
        "iconSrc": "https://www.kastatic.org/images/badges/earth/sequoia-40x40.png",
        "hideContext": false,
        "description": "Bristlecone",
        "relativeUrl": "/badges/bristlecone",
        "icons": {
            "small": "https://www.kastatic.org/images/badges/earth/sequoia-40x40.png",
            "compact": "https://www.kastatic.org/images/badges/earth/sequoia-60x60.png",
            "large": "https://www.kastatic.org/images/badges/earth/sequoia-512x512.png",
            "email": "https://www.kastatic.org/images/badges/earth/sequoia-70x70.png"
        },
        "absoluteUrl": "https://www.khanacademy.org/badges/bristlecone",
        "translatedSafeExtendedDescription": "Remain a member of Khan Academy for 4 years",
        "translatedDescription": "Bristlecone",
        "isOwned": false,
        "badgeCategory": 2,
        "points": 0,
        "isRetired": false,
        "safeExtendedDescription": "Remain a member of Khan Academy for 4 years",
        "slug": "bristlecone",
        "name": "yearfourbadge"
    },
    {
        "iconSrc": "https://www.kastatic.org/images/badges/earth/sequoia-40x40.png",
        "hideContext": false,
        "description": "Sequoia",
        "relativeUrl": "/badges/sequoia",
        "icons": {
            "small": "https://www.kastatic.org/images/badges/earth/sequoia-40x40.png",
            "compact": "https://www.kastatic.org/images/badges/earth/sequoia-60x60.png",
            "large": "https://www.kastatic.org/images/badges/earth/sequoia-512x512.png",
            "email": "https://www.kastatic.org/images/badges/earth/sequoia-70x70.png"
        },
        "absoluteUrl": "https://www.khanacademy.org/badges/sequoia",
        "translatedSafeExtendedDescription": "Remain a member of Khan Academy for 3 years",
        "translatedDescription": "Sequoia",
        "isOwned": false,
        "badgeCategory": 2,
        "points": 0,
        "isRetired": false,
        "safeExtendedDescription": "Remain a member of Khan Academy for 3 years",
        "slug": "sequoia",
        "name": "yearthreebadge"
    },
    {
        "iconSrc": "https://www.kastatic.org/images/badges/sun/copernicus-40x40.png",
        "hideContext": false,
        "description": "Copernicus",
        "relativeUrl": "/badges/copernicus",
        "icons": {
            "small": "https://www.kastatic.org/images/badges/sun/copernicus-40x40.png",
            "compact": "https://www.kastatic.org/images/badges/sun/copernicus-60x60.png",
            "large": "https://www.kastatic.org/images/badges/sun/copernicus-512x512.png",
            "email": "https://www.kastatic.org/images/badges/sun/copernicus-70x70.png"
        },
        "absoluteUrl": "https://www.khanacademy.org/badges/copernicus",
        "translatedSafeExtendedDescription": "Achieve mastery in 200 unique skills",
        "translatedDescription": "Copernicus",
        "isOwned": false,
        "badgeCategory": 3,
        "points": 80000,
        "isRetired": false,
        "safeExtendedDescription": "Achieve mastery in 200 unique skills",
        "slug": "copernicus",
        "name": "copernicusmasterybadge"
    },
    {
        "iconSrc": "https://www.kastatic.org/images/badges/sun/davinci-40x40.png",
        "hideContext": false,
        "description": "Da Vinci",
        "relativeUrl": "/badges/da-vinci",
        "icons": {
            "small": "https://www.kastatic.org/images/badges/sun/davinci-40x40.png",
            "compact": "https://www.kastatic.org/images/badges/sun/davinci-60x60.png",
            "large": "https://www.kastatic.org/images/badges/sun/davinci-512x512.png",
            "email": "https://www.kastatic.org/images/badges/sun/davinci-70x70.png"
        },
        "absoluteUrl": "https://www.khanacademy.org/badges/da-vinci",
        "translatedSafeExtendedDescription": "Achieve mastery in 500 unique skills",
        "translatedDescription": "Da Vinci",
        "isOwned": false,
        "badgeCategory": 3,
        "points": 200000,
        "isRetired": false,
        "safeExtendedDescription": "Achieve mastery in 500 unique skills",
        "slug": "da-vinci",
        "name": "davincimasterybadge"
    },
    {
        "iconSrc": "https://www.kastatic.org/images/badges/sun/hypatia-40x40.png",
        "hideContext": false,
        "description": "Hypatia",
        "relativeUrl": "/badges/hypatia",
        "icons": {
            "small": "https://www.kastatic.org/images/badges/sun/hypatia-40x40.png",
            "compact": "https://www.kastatic.org/images/badges/sun/hypatia-60x60.png",
            "large": "https://www.kastatic.org/images/badges/sun/hypatia-512x512.png",
            "email": "https://www.kastatic.org/images/badges/sun/hypatia-70x70.png"
        },
        "absoluteUrl": "https://www.khanacademy.org/badges/hypatia",
        "translatedSafeExtendedDescription": "Achieve mastery in 350 unique skills",
        "translatedDescription": "Hypatia",
        "isOwned": false,
        "badgeCategory": 3,
        "points": 125000,
        "isRetired": false,
        "safeExtendedDescription": "Achieve mastery in 350 unique skills",
        "slug": "hypatia",
        "name": "hypatiamasterybadge"
    },
    {
        "iconSrc": "https://www.kastatic.org/images/badges/sun/kepler-40x40.png",
        "hideContext": false,
        "description": "Kepler",
        "relativeUrl": "/badges/kepler",
        "icons": {
            "small": "https://www.kastatic.org/images/badges/sun/kepler-40x40.png",
            "compact": "https://www.kastatic.org/images/badges/sun/kepler-60x60.png",
            "large": "https://www.kastatic.org/images/badges/sun/kepler-512x512.png",
            "email": "https://www.kastatic.org/images/badges/sun/kepler-70x70.png"
        },
        "absoluteUrl": "https://www.khanacademy.org/badges/kepler",
        "translatedSafeExtendedDescription": "Achieve mastery in 300 unique skills",
        "translatedDescription": "Kepler",
        "isOwned": false,
        "badgeCategory": 3,
        "points": 125000,
        "isRetired": false,
        "safeExtendedDescription": "Achieve mastery in 300 unique skills",
        "slug": "kepler",
        "name": "keplermasterybadge"
    },
    {
        "iconSrc": "https://www.kastatic.org/images/badges/sun/oracle-40x40.png",
        "hideContext": false,
        "description": "Oracle",
        "relativeUrl": "/badges/oracle",
        "icons": {
            "small": "https://www.kastatic.org/images/badges/sun/oracle-40x40.png",
            "compact": "https://www.kastatic.org/images/badges/sun/oracle-60x60.png",
            "large": "https://www.kastatic.org/images/badges/sun/oracle-512x512.png",
            "email": "https://www.kastatic.org/images/badges/sun/oracle-70x70.png"
        },
        "absoluteUrl": "https://www.khanacademy.org/badges/oracle",
        "translatedSafeExtendedDescription": "Post 100 answers that earn 3+ votes",
        "translatedDescription": "Oracle",
        "isOwned": false,
        "badgeCategory": 3,
        "points": 0,
        "isRetired": false,
        "safeExtendedDescription": "Post 100 answers that earn 3+ votes",
        "slug": "oracle",
        "name": "leveltwoanswerqualitycountbadge"
    },
    {
        "iconSrc": "https://www.kastatic.org/images/badges/sun/detective-40x40.png",
        "hideContext": false,
        "description": "Detective",
        "relativeUrl": "/badges/detective",
        "icons": {
            "small": "https://www.kastatic.org/images/badges/sun/detective-40x40.png",
            "compact": "https://www.kastatic.org/images/badges/sun/detective-60x60.png",
            "large": "https://www.kastatic.org/images/badges/sun/detective-512x512.png",
            "email": "https://www.kastatic.org/images/badges/sun/detective-70x70.png"
        },
        "absoluteUrl": "https://www.khanacademy.org/badges/detective",
        "translatedSafeExtendedDescription": "Ask 100 questions that earn 3+ votes",
        "translatedDescription": "Detective",
        "isOwned": false,
        "badgeCategory": 3,
        "points": 0,
        "isRetired": false,
        "safeExtendedDescription": "Ask 100 questions that earn 3+ votes",
        "slug": "detective",
        "name": "leveltwoquestionqualitycountbadge"
    },
    {
        "iconSrc": "https://www.kastatic.org/images/badges/sun/ludicrous-listener-40x40.png",
        "hideContext": false,
        "description": "Ludicrous Listener",
        "relativeUrl": "/badges/ludicrous-listener",
        "icons": {
            "small": "https://www.kastatic.org/images/badges/sun/ludicrous-listener-40x40.png",
            "compact": "https://www.kastatic.org/images/badges/sun/ludicrous-listener-60x60.png",
            "large": "https://www.kastatic.org/images/badges/sun/ludicrous-listener-512x512.png",
            "email": "https://www.kastatic.org/images/badges/sun/ludicrous-listener-70x70.png"
        },
        "absoluteUrl": "https://www.khanacademy.org/badges/ludicrous-listener",
        "translatedSafeExtendedDescription": "Watch 10 hours of video in a single topic",
        "translatedDescription": "Ludicrous Listener",
        "isOwned": false,
        "badgeCategory": 3,
        "points": 0,
        "isRetired": false,
        "safeExtendedDescription": "Watch 10 hours of video in a single topic",
        "slug": "ludicrous-listener",
        "name": "ludicrousplaylisttimebadge"
    },
    {
        "iconSrc": "https://www.kastatic.org/images/badges/sun/magellan-40x40.png",
        "hideContext": false,
        "description": "Magellan",
        "relativeUrl": "/badges/magellan",
        "icons": {
            "small": "https://www.kastatic.org/images/badges/sun/magellan-40x40.png",
            "compact": "https://www.kastatic.org/images/badges/sun/magellan-60x60.png",
            "large": "https://www.kastatic.org/images/badges/sun/magellan-512x512.png",
            "email": "https://www.kastatic.org/images/badges/sun/magellan-70x70.png"
        },
        "absoluteUrl": "https://www.khanacademy.org/badges/magellan",
        "translatedSafeExtendedDescription": "Achieve mastery in 100 unique skills",
        "translatedDescription": "Magellan",
        "isOwned": false,
        "badgeCategory": 3,
        "points": 30000,
        "isRetired": false,
        "safeExtendedDescription": "Achieve mastery in 100 unique skills",
        "slug": "magellan",
        "name": "magellanmasterybadge"
    },
    {
        "iconSrc": "https://www.kastatic.org/images/badges/sun/millionaire-40x40.png",
        "hideContext": false,
        "description": "Millionaire",
        "relativeUrl": "/badges/millionaire",
        "icons": {
            "small": "https://www.kastatic.org/images/badges/sun/millionaire-40x40.png",
            "compact": "https://www.kastatic.org/images/badges/sun/millionaire-60x60.png",
            "large": "https://www.kastatic.org/images/badges/sun/millionaire-512x512.png",
            "email": "https://www.kastatic.org/images/badges/sun/millionaire-70x70.png"
        },
        "absoluteUrl": "https://www.khanacademy.org/badges/millionaire",
        "translatedSafeExtendedDescription": "Earn 1,000,000 energy points",
        "translatedDescription": "Millionaire",
        "isOwned": false,
        "badgeCategory": 3,
        "points": 0,
        "isRetired": false,
        "safeExtendedDescription": "Earn 1,000,000 energy points",
        "slug": "millionaire",
        "name": "millionairebadge"
    },
    {
        "iconSrc": "https://www.kastatic.org/images/badges/sun/newton-40x40.png",
        "hideContext": false,
        "description": "Newton",
        "relativeUrl": "/badges/newton",
        "icons": {
            "small": "https://www.kastatic.org/images/badges/sun/newton-40x40.png",
            "compact": "https://www.kastatic.org/images/badges/sun/newton-60x60.png",
            "large": "https://www.kastatic.org/images/badges/sun/newton-512x512.png",
            "email": "https://www.kastatic.org/images/badges/sun/newton-70x70.png"
        },
        "absoluteUrl": "https://www.khanacademy.org/badges/newton",
        "translatedSafeExtendedDescription": "Achieve mastery in 400 unique skills",
        "translatedDescription": "Newton",
        "isOwned": false,
        "badgeCategory": 3,
        "points": 150000,
        "isRetired": false,
        "safeExtendedDescription": "Achieve mastery in 400 unique skills",
        "slug": "newton",
        "name": "newtonmasterybadge"
    },
    {
        "iconSrc": "https://www.kastatic.org/images/badges/sun/sally-ride-40x40.png",
        "hideContext": false,
        "description": "Sally Ride",
        "relativeUrl": "/badges/sally-ride",
        "icons": {
            "small": "https://www.kastatic.org/images/badges/sun/sally-ride-40x40.png",
            "compact": "https://www.kastatic.org/images/badges/sun/sally-ride-60x60.png",
            "large": "https://www.kastatic.org/images/badges/sun/sally-ride-512x512.png",
            "email": "https://www.kastatic.org/images/badges/sun/sally-ride-70x70.png"
        },
        "absoluteUrl": "https://www.khanacademy.org/badges/sally-ride",
        "translatedSafeExtendedDescription": "Achieve mastery in 150 unique skills",
        "translatedDescription": "Sally Ride",
        "isOwned": false,
        "badgeCategory": 3,
        "points": 35000,
        "isRetired": false,
        "safeExtendedDescription": "Achieve mastery in 150 unique skills",
        "slug": "sally-ride",
        "name": "sallyridemasterybadge"
    },
    {
        "iconSrc": "https://www.kastatic.org/images/badges/eclipse-small.png",
        "hideContext": false,
        "description": "Artemis",
        "relativeUrl": "/badges/artemis",
        "icons": {
            "small": "https://www.kastatic.org/images/badges/eclipse-small.png",
            "compact": "https://www.kastatic.org/images/badges/eclipse-60x60.png",
            "large": "https://www.kastatic.org/images/badges/eclipse.png",
            "email": "https://www.kastatic.org/images/badges/eclipse-70x70.png"
        },
        "absoluteUrl": "https://www.khanacademy.org/badges/artemis",
        "translatedSafeExtendedDescription": "???",
        "translatedDescription": "Artemis",
        "isOwned": false,
        "badgeCategory": 4,
        "points": 250000,
        "isRetired": false,
        "safeExtendedDescription": "???",
        "slug": "artemis",
        "name": "artemismasterybadge"
    },
    {
        "iconSrc": "https://www.kastatic.org/images/badges/eclipse-small.png",
        "hideContext": false,
        "description": "Atlas",
        "relativeUrl": "/badges/atlas",
        "icons": {
            "small": "https://www.kastatic.org/images/badges/eclipse-small.png",
            "compact": "https://www.kastatic.org/images/badges/eclipse-60x60.png",
            "large": "https://www.kastatic.org/images/badges/eclipse.png",
            "email": "https://www.kastatic.org/images/badges/eclipse-70x70.png"
        },
        "absoluteUrl": "https://www.khanacademy.org/badges/atlas",
        "translatedSafeExtendedDescription": "???",
        "translatedDescription": "Atlas",
        "isOwned": false,
        "badgeCategory": 4,
        "points": 200000,
        "isRetired": false,
        "safeExtendedDescription": "???",
        "slug": "atlas",
        "name": "atlasmasterybadge"
    },
    {
        "iconSrc": "https://www.kastatic.org/images/badges/eclipse-small.png",
        "hideContext": false,
        "description": "Tesla",
        "relativeUrl": "/badges/tesla",
        "icons": {
            "small": "https://www.kastatic.org/images/badges/eclipse-small.png",
            "compact": "https://www.kastatic.org/images/badges/eclipse-60x60.png",
            "large": "https://www.kastatic.org/images/badges/eclipse.png",
            "email": "https://www.kastatic.org/images/badges/eclipse-70x70.png"
        },
        "absoluteUrl": "https://www.khanacademy.org/badges/tesla",
        "translatedSafeExtendedDescription": "???",
        "translatedDescription": "Tesla",
        "isOwned": false,
        "badgeCategory": 4,
        "points": 0,
        "isRetired": false,
        "safeExtendedDescription": "???",
        "slug": "tesla",
        "name": "tenmillionairebadge"
    },
    {
        "iconSrc": "https://www.kastatic.org/images/badges/cs/drawing_animation_mastery_badge-40x40.png",
        "hideContext": false,
        "description": "Intro to JS: Drawing & Animation Mastery",
        "relativeUrl": "/badges/intro-to-js-drawing-animation-mastery",
        "icons": {
            "small": "https://www.kastatic.org/images/badges/cs/drawing_animation_mastery_badge-40x40.png",
            "compact": "https://www.kastatic.org/images/badges/cs/drawing_animation_mastery_badge-60x60.png",
            "large": "https://www.kastatic.org/images/badges/cs/drawing_animation_mastery_badge-512x512.png",
            "email": "https://www.kastatic.org/images/badges/cs/drawing_animation_mastery_badge-70x70.png"
        },
        "absoluteUrl": "https://www.khanacademy.org/badges/intro-to-js-drawing-animation-mastery",
        "translatedSafeExtendedDescription": "Complete all the 'Intro to JS: Drawing & Animation' challenges.",
        "translatedDescription": "Intro to JS: Drawing & Animation Mastery",
        "isOwned": false,
        "badgeCategory": 5,
        "points": 0,
        "isRetired": false,
        "safeExtendedDescription": "Complete all the 'Intro to JS: Drawing & Animation' challenges.",
        "slug": "intro-to-js-drawing-animation-mastery",
        "name": "drawinganimationmasterybadge"
    },
    {
        "iconSrc": "https://www.kastatic.org/images/badges/cs/natural_simulations_mastery_badge-40x40.png",
        "hideContext": false,
        "description": "Advanced JS: Natural Simulations",
        "relativeUrl": "/badges/advanced-js-natural-simulations",
        "icons": {
            "small": "https://www.kastatic.org/images/badges/cs/natural_simulations_mastery_badge-40x40.png",
            "compact": "https://www.kastatic.org/images/badges/cs/natural_simulations_mastery_badge-60x60.png",
            "large": "https://www.kastatic.org/images/badges/cs/natural_simulations_mastery_badge-512x512.png",
            "email": "https://www.kastatic.org/images/badges/cs/natural_simulations_mastery_badge-70x70.png"
        },
        "absoluteUrl": "https://www.khanacademy.org/badges/advanced-js-natural-simulations",
        "translatedSafeExtendedDescription": "Complete all the 'Advanced JS: Natural Simulations' challenges.",
        "translatedDescription": "Advanced JS: Natural Simulations",
        "isOwned": false,
        "badgeCategory": 5,
        "points": 0,
        "isRetired": false,
        "safeExtendedDescription": "Complete all the 'Advanced JS: Natural Simulations' challenges.",
        "slug": "advanced-js-natural-simulations",
        "name": "naturalsimulationsmasterybadge"
    },
    {
        "iconSrc": "https://www.kastatic.org/images/power-mode/badges/default-40x40.png?10",
        "hideContext": false,
        "description": "Integral calculus: Sequences, series, and function approximation",
        "relativeUrl": "/badges/integral-calculus-sequences-series-and-function-approximation",
        "icons": {
            "small": "https://www.kastatic.org/images/power-mode/badges/default-40x40.png?10",
            "compact": "https://www.kastatic.org/images/power-mode/badges/default-60x60.png?10",
            "large": "https://www.kastatic.org/images/power-mode/badges/default-250x250.png?10",
            "email": "https://www.kastatic.org/images/badges/master-challenge-blue-70x70.png"
        },
        "absoluteUrl": "https://www.khanacademy.org/badges/integral-calculus-sequences-series-and-function-approximation",
        "translatedSafeExtendedDescription": "Achieve mastery in all skills in Integral calculus: Sequences, series, and function approximation",
        "translatedDescription": "Integral calculus: Sequences, series, and function approximation",
        "isOwned": false,
        "badgeCategory": 5,
        "points": 0,
        "isRetired": false,
        "safeExtendedDescription": "Achieve mastery in all skills in Integral calculus: Sequences, series, and function approximation",
        "slug": "integral-calculus-sequences-series-and-function-approximation",
        "name": "topic_exercise_0REj2d3fcvW9Qsj2hZLuebQMAaTNaG9WTlYElYrf_mastery"
    },
    {
        "iconSrc": "https://www.kastatic.org/images/power-mode/badges/geometry-40x40.png?10",
        "hideContext": false,
        "description": "Geometry: Perimeter, area, and volume",
        "relativeUrl": "/badges/geometry-perimeter-area-and-volume",
        "icons": {
            "small": "https://www.kastatic.org/images/power-mode/badges/geometry-40x40.png?10",
            "compact": "https://www.kastatic.org/images/power-mode/badges/geometry-60x60.png?10",
            "large": "https://www.kastatic.org/images/power-mode/badges/geometry-250x250.png?10",
            "email": "https://www.kastatic.org/images/badges/master-challenge-blue-70x70.png"
        },
        "absoluteUrl": "https://www.khanacademy.org/badges/geometry-perimeter-area-and-volume",
        "translatedSafeExtendedDescription": "Achieve mastery in all skills in Geometry: Perimeter, area, and volume",
        "translatedDescription": "Geometry: Perimeter, area, and volume",
        "isOwned": false,
        "badgeCategory": 5,
        "points": 0,
        "isRetired": false,
        "safeExtendedDescription": "Achieve mastery in all skills in Geometry: Perimeter, area, and volume",
        "slug": "geometry-perimeter-area-and-volume",
        "name": "topic_exercise_10MlOxExUBBQNHgviilzlgi9KIpYSd7NQ2Z1todb_mastery"
    },
    {
        "iconSrc": "https://www.kastatic.org/images/power-mode/badges/default-40x40.png?10",
        "hideContext": false,
        "description": "Differential calculus: Limits",
        "relativeUrl": "/badges/differential-calculus-limits",
        "icons": {
            "small": "https://www.kastatic.org/images/power-mode/badges/default-40x40.png?10",
            "compact": "https://www.kastatic.org/images/power-mode/badges/default-60x60.png?10",
            "large": "https://www.kastatic.org/images/power-mode/badges/default-250x250.png?10",
            "email": "https://www.kastatic.org/images/badges/master-challenge-blue-70x70.png"
        },
        "absoluteUrl": "https://www.khanacademy.org/badges/differential-calculus-limits",
        "translatedSafeExtendedDescription": "Achieve mastery in all skills in Differential calculus: Limits",
        "translatedDescription": "Differential calculus: Limits",
        "isOwned": false,
        "badgeCategory": 5,
        "points": 0,
        "isRetired": false,
        "safeExtendedDescription": "Achieve mastery in all skills in Differential calculus: Limits",
        "slug": "differential-calculus-limits",
        "name": "topic_exercise_1QfevAgIgw4QrPvgruXft-x578bSFE7nm6_Nr08-_mastery"
    },
    {
        "iconSrc": "https://www.kastatic.org/images/power-mode/badges/default-40x40.png?10",
        "hideContext": false,
        "description": "Trigonometry: Trig identities and examples",
        "relativeUrl": "/badges/trigonometry-trig-identities-and-examples",
        "icons": {
            "small": "https://www.kastatic.org/images/power-mode/badges/default-40x40.png?10",
            "compact": "https://www.kastatic.org/images/power-mode/badges/default-60x60.png?10",
            "large": "https://www.kastatic.org/images/power-mode/badges/default-250x250.png?10",
            "email": "https://www.kastatic.org/images/badges/master-challenge-blue-70x70.png"
        },
        "absoluteUrl": "https://www.khanacademy.org/badges/trigonometry-trig-identities-and-examples",
        "translatedSafeExtendedDescription": "Achieve mastery in all skills in Trigonometry: Trig identities and examples",
        "translatedDescription": "Trigonometry: Trig identities and examples",
        "isOwned": false,
        "badgeCategory": 5,
        "points": 0,
        "isRetired": false,
        "safeExtendedDescription": "Achieve mastery in all skills in Trigonometry: Trig identities and examples",
        "slug": "trigonometry-trig-identities-and-examples",
        "name": "topic_exercise_1cma_FaxmfJzuGtkwR93uwPA-wOqlh4W69Wafn26_mastery"
    },
    {
        "iconSrc": "https://www.kastatic.org/images/power-mode/badges/default-40x40.png?10",
        "hideContext": false,
        "description": "Algebra II: Logarithms",
        "relativeUrl": "/badges/algebra-ii-logarithms",
        "icons": {
            "small": "https://www.kastatic.org/images/power-mode/badges/default-40x40.png?10",
            "compact": "https://www.kastatic.org/images/power-mode/badges/default-60x60.png?10",
            "large": "https://www.kastatic.org/images/power-mode/badges/default-250x250.png?10",
            "email": "https://www.kastatic.org/images/badges/master-challenge-blue-70x70.png"
        },
        "absoluteUrl": "https://www.khanacademy.org/badges/algebra-ii-logarithms",
        "translatedSafeExtendedDescription": "Achieve mastery in all skills in Algebra II: Logarithms",
        "translatedDescription": "Algebra II: Logarithms",
        "isOwned": false,
        "badgeCategory": 5,
        "points": 0,
        "isRetired": false,
        "safeExtendedDescription": "Achieve mastery in all skills in Algebra II: Logarithms",
        "slug": "algebra-ii-logarithms",
        "name": "topic_exercise_4S2_H5HJSWRSu08x9powqth-OIb7qFUYqHHVSjyf_mastery"
    },
    {
        "iconSrc": "https://www.kastatic.org/images/power-mode/badges/default-40x40.png?10",
        "hideContext": false,
        "description": "Precalculus: Matrices",
        "relativeUrl": "/badges/precalculus-matrices",
        "icons": {
            "small": "https://www.kastatic.org/images/power-mode/badges/default-40x40.png?10",
            "compact": "https://www.kastatic.org/images/power-mode/badges/default-60x60.png?10",
            "large": "https://www.kastatic.org/images/power-mode/badges/default-250x250.png?10",
            "email": "https://www.kastatic.org/images/badges/master-challenge-blue-70x70.png"
        },
        "absoluteUrl": "https://www.khanacademy.org/badges/precalculus-matrices",
        "translatedSafeExtendedDescription": "Achieve mastery in all skills in Precalculus: Matrices",
        "translatedDescription": "Precalculus: Matrices",
        "isOwned": false,
        "badgeCategory": 5,
        "points": 0,
        "isRetired": false,
        "safeExtendedDescription": "Achieve mastery in all skills in Precalculus: Matrices",
        "slug": "precalculus-matrices",
        "name": "topic_exercise_6bC0m9ja2A2HkigamOt2wtvNjs_t257wXPPNFEs8_mastery"
    },
    {
        "iconSrc": "https://www.kastatic.org/images/power-mode/badges/fractions-40x40.png?10",
        "hideContext": false,
        "description": "Arithmetic: Fractions",
        "relativeUrl": "/badges/arithmetic-fractions",
        "icons": {
            "small": "https://www.kastatic.org/images/power-mode/badges/fractions-40x40.png?10",
            "compact": "https://www.kastatic.org/images/power-mode/badges/fractions-60x60.png?10",
            "large": "https://www.kastatic.org/images/power-mode/badges/fractions-250x250.png?10",
            "email": "https://www.kastatic.org/images/badges/master-challenge-blue-70x70.png"
        },
        "absoluteUrl": "https://www.khanacademy.org/badges/arithmetic-fractions",
        "translatedSafeExtendedDescription": "Achieve mastery in all skills in Arithmetic: Fractions",
        "translatedDescription": "Arithmetic: Fractions",
        "isOwned": false,
        "badgeCategory": 5,
        "points": 0,
        "isRetired": false,
        "safeExtendedDescription": "Achieve mastery in all skills in Arithmetic: Fractions",
        "slug": "arithmetic-fractions",
        "name": "topic_exercise_6yXN4Yvo--fg2MGyd3mzG3MLP9ktdWa1iftIU9Ed_mastery"
    },
    {
        "iconSrc": "https://www.kastatic.org/images/power-mode/badges/default-40x40.png?10",
        "hideContext": false,
        "description": "Algebra II: Polynomial and rational functions",
        "relativeUrl": "/badges/algebra-ii-polynomial-and-rational-functions",
        "icons": {
            "small": "https://www.kastatic.org/images/power-mode/badges/default-40x40.png?10",
            "compact": "https://www.kastatic.org/images/power-mode/badges/default-60x60.png?10",
            "large": "https://www.kastatic.org/images/power-mode/badges/default-250x250.png?10",
            "email": "https://www.kastatic.org/images/badges/master-challenge-blue-70x70.png"
        },
        "absoluteUrl": "https://www.khanacademy.org/badges/algebra-ii-polynomial-and-rational-functions",
        "translatedSafeExtendedDescription": "Achieve mastery in all skills in Algebra II: Polynomial and rational functions",
        "translatedDescription": "Algebra II: Polynomial and rational functions",
        "isOwned": false,
        "badgeCategory": 5,
        "points": 0,
        "isRetired": false,
        "safeExtendedDescription": "Achieve mastery in all skills in Algebra II: Polynomial and rational functions",
        "slug": "algebra-ii-polynomial-and-rational-functions",
        "name": "topic_exercise_81hddm8ROeOZSH8F0D7vuQ3IVZrOx_vVZN1zq91k_mastery"
    },
    {
        "iconSrc": "https://www.kastatic.org/images/power-mode/badges/default-40x40.png?10",
        "hideContext": false,
        "description": "Differential calculus: Taking derivatives",
        "relativeUrl": "/badges/differential-calculus-taking-derivatives",
        "icons": {
            "small": "https://www.kastatic.org/images/power-mode/badges/default-40x40.png?10",
            "compact": "https://www.kastatic.org/images/power-mode/badges/default-60x60.png?10",
            "large": "https://www.kastatic.org/images/power-mode/badges/default-250x250.png?10",
            "email": "https://www.kastatic.org/images/badges/master-challenge-blue-70x70.png"
        },
        "absoluteUrl": "https://www.khanacademy.org/badges/differential-calculus-taking-derivatives",
        "translatedSafeExtendedDescription": "Achieve mastery in all skills in Differential calculus: Taking derivatives",
        "translatedDescription": "Differential calculus: Taking derivatives",
        "isOwned": false,
        "badgeCategory": 5,
        "points": 0,
        "isRetired": false,
        "safeExtendedDescription": "Achieve mastery in all skills in Differential calculus: Taking derivatives",
        "slug": "differential-calculus-taking-derivatives",
        "name": "topic_exercise_BoVJh13O31TOPpaa0VnADNuFos89D_bJrSRXpd_9_mastery"
    },
    {
        "iconSrc": "https://www.kastatic.org/images/power-mode/badges/decimals-40x40.png?10",
        "hideContext": false,
        "description": "Arithmetic: Decimals",
        "relativeUrl": "/badges/arithmetic-decimals",
        "icons": {
            "small": "https://www.kastatic.org/images/power-mode/badges/decimals-40x40.png?10",
            "compact": "https://www.kastatic.org/images/power-mode/badges/decimals-60x60.png?10",
            "large": "https://www.kastatic.org/images/power-mode/badges/decimals-250x250.png?10",
            "email": "https://www.kastatic.org/images/badges/master-challenge-blue-70x70.png"
        },
        "absoluteUrl": "https://www.khanacademy.org/badges/arithmetic-decimals",
        "translatedSafeExtendedDescription": "Achieve mastery in all skills in Arithmetic: Decimals",
        "translatedDescription": "Arithmetic: Decimals",
        "isOwned": false,
        "badgeCategory": 5,
        "points": 0,
        "isRetired": false,
        "safeExtendedDescription": "Achieve mastery in all skills in Arithmetic: Decimals",
        "slug": "arithmetic-decimals",
        "name": "topic_exercise_C0kfQ3mZSE_zBNfxY7EH4Kdwu_HaHM_oiR1BlAyW_mastery"
    },
    {
        "iconSrc": "https://www.kastatic.org/images/power-mode/badges/default-40x40.png?10",
        "hideContext": false,
        "description": "Algebra I: Introduction to algebra",
        "relativeUrl": "/badges/algebra-i-introduction-to-algebra",
        "icons": {
            "small": "https://www.kastatic.org/images/power-mode/badges/default-40x40.png?10",
            "compact": "https://www.kastatic.org/images/power-mode/badges/default-60x60.png?10",
            "large": "https://www.kastatic.org/images/power-mode/badges/default-250x250.png?10",
            "email": "https://www.kastatic.org/images/badges/master-challenge-blue-70x70.png"
        },
        "absoluteUrl": "https://www.khanacademy.org/badges/algebra-i-introduction-to-algebra",
        "translatedSafeExtendedDescription": "Achieve mastery in all skills in Algebra I: Introduction to algebra",
        "translatedDescription": "Algebra I: Introduction to algebra",
        "isOwned": false,
        "badgeCategory": 5,
        "points": 0,
        "isRetired": false,
        "safeExtendedDescription": "Achieve mastery in all skills in Algebra I: Introduction to algebra",
        "slug": "algebra-i-introduction-to-algebra",
        "name": "topic_exercise_ES42PFTrnyI3qIU-b2XIjTAnTVpAdeqPWBrQXfNv_mastery"
    },
    {
        "iconSrc": "https://www.kastatic.org/images/power-mode/badges/default-40x40.png?10",
        "hideContext": false,
        "description": "Probability and statistics: Descriptive statistics",
        "relativeUrl": "/badges/probability-and-statistics-descriptive-statistics",
        "icons": {
            "small": "https://www.kastatic.org/images/power-mode/badges/default-40x40.png?10",
            "compact": "https://www.kastatic.org/images/power-mode/badges/default-60x60.png?10",
            "large": "https://www.kastatic.org/images/power-mode/badges/default-250x250.png?10",
            "email": "https://www.kastatic.org/images/badges/master-challenge-blue-70x70.png"
        },
        "absoluteUrl": "https://www.khanacademy.org/badges/probability-and-statistics-descriptive-statistics",
        "translatedSafeExtendedDescription": "Achieve mastery in all skills in Probability and statistics: Descriptive statistics",
        "translatedDescription": "Probability and statistics: Descriptive statistics",
        "isOwned": false,
        "badgeCategory": 5,
        "points": 0,
        "isRetired": false,
        "safeExtendedDescription": "Achieve mastery in all skills in Probability and statistics: Descriptive statistics",
        "slug": "probability-and-statistics-descriptive-statistics",
        "name": "topic_exercise_F6HMxt5WIsTwuZg55JwqD8vSeWOzgL7KXF6gwb_L_mastery"
    },
    {
        "iconSrc": "https://www.kastatic.org/images/power-mode/badges/transformations-40x40.png?10",
        "hideContext": false,
        "description": "Geometry: Transformations",
        "relativeUrl": "/badges/geometry-transformations",
        "icons": {
            "small": "https://www.kastatic.org/images/power-mode/badges/transformations-40x40.png?10",
            "compact": "https://www.kastatic.org/images/power-mode/badges/transformations-60x60.png?10",
            "large": "https://www.kastatic.org/images/power-mode/badges/transformations-250x250.png?10",
            "email": "https://www.kastatic.org/images/badges/master-challenge-blue-70x70.png"
        },
        "absoluteUrl": "https://www.khanacademy.org/badges/geometry-transformations",
        "translatedSafeExtendedDescription": "Achieve mastery in all skills in Geometry: Transformations",
        "translatedDescription": "Geometry: Transformations",
        "isOwned": false,
        "badgeCategory": 5,
        "points": 0,
        "isRetired": false,
        "safeExtendedDescription": "Achieve mastery in all skills in Geometry: Transformations",
        "slug": "geometry-transformations",
        "name": "topic_exercise_GaFn0lA_acCcYFs3Ps2w2Ain5icHT2BF_lUmnS-W_mastery"
    },
    {
        "iconSrc": "https://www.kastatic.org/images/power-mode/badges/default-40x40.png?10",
        "hideContext": false,
        "description": "Algebra II: Exponential and logarithmic functions",
        "relativeUrl": "/badges/algebra-ii-exponential-and-logarithmic-functions",
        "icons": {
            "small": "https://www.kastatic.org/images/power-mode/badges/default-40x40.png?10",
            "compact": "https://www.kastatic.org/images/power-mode/badges/default-60x60.png?10",
            "large": "https://www.kastatic.org/images/power-mode/badges/default-250x250.png?10",
            "email": "https://www.kastatic.org/images/badges/master-challenge-blue-70x70.png"
        },
        "absoluteUrl": "https://www.khanacademy.org/badges/algebra-ii-exponential-and-logarithmic-functions",
        "translatedSafeExtendedDescription": "Achieve mastery in all skills in Algebra II: Exponential and logarithmic functions",
        "translatedDescription": "Algebra II: Exponential and logarithmic functions",
        "isOwned": false,
        "badgeCategory": 5,
        "points": 0,
        "isRetired": false,
        "safeExtendedDescription": "Achieve mastery in all skills in Algebra II: Exponential and logarithmic functions",
        "slug": "algebra-ii-exponential-and-logarithmic-functions",
        "name": "topic_exercise_HLMBLydsb6znJ3qqeNifVoW73vY2Jxn9MI7mJi1D_mastery"
    },
    {
        "iconSrc": "https://www.kastatic.org/images/power-mode/badges/algebra-40x40.png?10",
        "hideContext": false,
        "description": "Algebra I: Functions",
        "relativeUrl": "/badges/algebra-i-functions",
        "icons": {
            "small": "https://www.kastatic.org/images/power-mode/badges/algebra-40x40.png?10",
            "compact": "https://www.kastatic.org/images/power-mode/badges/algebra-60x60.png?10",
            "large": "https://www.kastatic.org/images/power-mode/badges/algebra-250x250.png?10",
            "email": "https://www.kastatic.org/images/badges/master-challenge-blue-70x70.png"
        },
        "absoluteUrl": "https://www.khanacademy.org/badges/algebra-i-functions",
        "translatedSafeExtendedDescription": "Achieve mastery in all skills in Algebra I: Functions",
        "translatedDescription": "Algebra I: Functions",
        "isOwned": false,
        "badgeCategory": 5,
        "points": 0,
        "isRetired": false,
        "safeExtendedDescription": "Achieve mastery in all skills in Algebra I: Functions",
        "slug": "algebra-i-functions",
        "name": "topic_exercise_K5CAA_lSb0gdqtmMngO1hGkaLRdDAWa4JaXblBhJ_mastery"
    },
    {
        "iconSrc": "https://www.kastatic.org/images/power-mode/badges/addition-subtraction-40x40.png?10",
        "hideContext": false,
        "description": "Arithmetic: Addition and subtraction",
        "relativeUrl": "/badges/arithmetic-addition-and-subtraction",
        "icons": {
            "small": "https://www.kastatic.org/images/power-mode/badges/addition-subtraction-40x40.png?10",
            "compact": "https://www.kastatic.org/images/power-mode/badges/addition-subtraction-60x60.png?10",
            "large": "https://www.kastatic.org/images/power-mode/badges/addition-subtraction-250x250.png?10",
            "email": "https://www.kastatic.org/images/badges/master-challenge-blue-70x70.png"
        },
        "absoluteUrl": "https://www.khanacademy.org/badges/arithmetic-addition-and-subtraction",
        "translatedSafeExtendedDescription": "Achieve mastery in all skills in Arithmetic: Addition and subtraction",
        "translatedDescription": "Arithmetic: Addition and subtraction",
        "isOwned": false,
        "badgeCategory": 5,
        "points": 0,
        "isRetired": false,
        "safeExtendedDescription": "Achieve mastery in all skills in Arithmetic: Addition and subtraction",
        "slug": "arithmetic-addition-and-subtraction",
        "name": "topic_exercise_KHDySQBco4Z5ChI1U4UpyHU954YJ8QahCFcDsImA_mastery"
    },
    {
        "iconSrc": "https://www.kastatic.org/images/power-mode/badges/rates-and-ratios-40x40.png?10",
        "hideContext": false,
        "description": "Pre-algebra: Ratios, proportions, units, and rates",
        "relativeUrl": "/badges/pre-algebra-ratios-proportions-units-and-rates",
        "icons": {
            "small": "https://www.kastatic.org/images/power-mode/badges/rates-and-ratios-40x40.png?10",
            "compact": "https://www.kastatic.org/images/power-mode/badges/rates-and-ratios-60x60.png?10",
            "large": "https://www.kastatic.org/images/power-mode/badges/rates-and-ratios-250x250.png?10",
            "email": "https://www.kastatic.org/images/badges/master-challenge-blue-70x70.png"
        },
        "absoluteUrl": "https://www.khanacademy.org/badges/pre-algebra-ratios-proportions-units-and-rates",
        "translatedSafeExtendedDescription": "Achieve mastery in all skills in Pre-algebra: Ratios, proportions, units, and rates",
        "translatedDescription": "Pre-algebra: Ratios, proportions, units, and rates",
        "isOwned": false,
        "badgeCategory": 5,
        "points": 0,
        "isRetired": false,
        "safeExtendedDescription": "Achieve mastery in all skills in Pre-algebra: Ratios, proportions, units, and rates",
        "slug": "pre-algebra-ratios-proportions-units-and-rates",
        "name": "topic_exercise_LjZH9OiVLkOOeF4QDuyKlI1QzI8U9dRelqF81GWH_mastery"
    },
    {
        "iconSrc": "https://www.kastatic.org/images/power-mode/badges/exponents-radicals-40x40.png?10",
        "hideContext": false,
        "description": "Pre-algebra: Exponents, radicals, and scientific notation",
        "relativeUrl": "/badges/pre-algebra-exponents-radicals-and-scientific-notation",
        "icons": {
            "small": "https://www.kastatic.org/images/power-mode/badges/exponents-radicals-40x40.png?10",
            "compact": "https://www.kastatic.org/images/power-mode/badges/exponents-radicals-60x60.png?10",
            "large": "https://www.kastatic.org/images/power-mode/badges/exponents-radicals-250x250.png?10",
            "email": "https://www.kastatic.org/images/badges/master-challenge-blue-70x70.png"
        },
        "absoluteUrl": "https://www.khanacademy.org/badges/pre-algebra-exponents-radicals-and-scientific-notation",
        "translatedSafeExtendedDescription": "Achieve mastery in all skills in Pre-algebra: Exponents, radicals, and scientific notation",
        "translatedDescription": "Pre-algebra: Exponents, radicals, and scientific notation",
        "isOwned": false,
        "badgeCategory": 5,
        "points": 0,
        "isRetired": false,
        "safeExtendedDescription": "Achieve mastery in all skills in Pre-algebra: Exponents, radicals, and scientific notation",
        "slug": "pre-algebra-exponents-radicals-and-scientific-notation",
        "name": "topic_exercise_MPdFDRjecgRDdWiCSi0t8Nak4vCyLeZrmU8Uy1a4_mastery"
    },
    {
        "iconSrc": "https://www.kastatic.org/images/power-mode/badges/default-40x40.png?10",
        "hideContext": false,
        "description": "Geometry: Right triangles and trigonometry",
        "relativeUrl": "/badges/geometry-right-triangles-and-trigonometry",
        "icons": {
            "small": "https://www.kastatic.org/images/power-mode/badges/default-40x40.png?10",
            "compact": "https://www.kastatic.org/images/power-mode/badges/default-60x60.png?10",
            "large": "https://www.kastatic.org/images/power-mode/badges/default-250x250.png?10",
            "email": "https://www.kastatic.org/images/badges/master-challenge-blue-70x70.png"
        },
        "absoluteUrl": "https://www.khanacademy.org/badges/geometry-right-triangles-and-trigonometry",
        "translatedSafeExtendedDescription": "Achieve mastery in all skills in Geometry: Right triangles and trigonometry",
        "translatedDescription": "Geometry: Right triangles and trigonometry",
        "isOwned": false,
        "badgeCategory": 5,
        "points": 0,
        "isRetired": false,
        "safeExtendedDescription": "Achieve mastery in all skills in Geometry: Right triangles and trigonometry",
        "slug": "geometry-right-triangles-and-trigonometry",
        "name": "topic_exercise_MkfMqpEKPS0otnKDiCeO6HIMB7MFonwHJAJJhXpL_mastery"
    },
    {
        "iconSrc": "https://www.kastatic.org/images/power-mode/badges/default-40x40.png?10",
        "hideContext": false,
        "description": "Algebra II: Conic sections",
        "relativeUrl": "/badges/algebra-ii-conic-sections",
        "icons": {
            "small": "https://www.kastatic.org/images/power-mode/badges/default-40x40.png?10",
            "compact": "https://www.kastatic.org/images/power-mode/badges/default-60x60.png?10",
            "large": "https://www.kastatic.org/images/power-mode/badges/default-250x250.png?10",
            "email": "https://www.kastatic.org/images/badges/master-challenge-blue-70x70.png"
        },
        "absoluteUrl": "https://www.khanacademy.org/badges/algebra-ii-conic-sections",
        "translatedSafeExtendedDescription": "Achieve mastery in all skills in Algebra II: Conic sections",
        "translatedDescription": "Algebra II: Conic sections",
        "isOwned": false,
        "badgeCategory": 5,
        "points": 0,
        "isRetired": false,
        "safeExtendedDescription": "Achieve mastery in all skills in Algebra II: Conic sections",
        "slug": "algebra-ii-conic-sections",
        "name": "topic_exercise_MsJQdpiM4Ij3-2PvUiVSQtTe9VfTHCD-l1Yx75Ut_mastery"
    },
    {
        "iconSrc": "https://www.kastatic.org/images/power-mode/badges/rational-expressions-40x40.png?10",
        "hideContext": false,
        "description": "Algebra II: Rational expressions",
        "relativeUrl": "/badges/algebra-ii-rational-expressions",
        "icons": {
            "small": "https://www.kastatic.org/images/power-mode/badges/rational-expressions-40x40.png?10",
            "compact": "https://www.kastatic.org/images/power-mode/badges/rational-expressions-60x60.png?10",
            "large": "https://www.kastatic.org/images/power-mode/badges/rational-expressions-250x250.png?10",
            "email": "https://www.kastatic.org/images/badges/master-challenge-blue-70x70.png"
        },
        "absoluteUrl": "https://www.khanacademy.org/badges/algebra-ii-rational-expressions",
        "translatedSafeExtendedDescription": "Achieve mastery in all skills in Algebra II: Rational expressions",
        "translatedDescription": "Algebra II: Rational expressions",
        "isOwned": false,
        "badgeCategory": 5,
        "points": 0,
        "isRetired": false,
        "safeExtendedDescription": "Achieve mastery in all skills in Algebra II: Rational expressions",
        "slug": "algebra-ii-rational-expressions",
        "name": "topic_exercise_N9I-7BvTgT6yidXG6MAr_bMhnKc2R6K-Xs14UWcP_mastery"
    },
    {
        "iconSrc": "https://www.kastatic.org/images/power-mode/badges/applying-math-reasoning-topic-40x40.png?10",
        "hideContext": false,
        "description": "Pre-algebra: Applying mathematical reasoning",
        "relativeUrl": "/badges/pre-algebra-applying-mathematical-reasoning",
        "icons": {
            "small": "https://www.kastatic.org/images/power-mode/badges/applying-math-reasoning-topic-40x40.png?10",
            "compact": "https://www.kastatic.org/images/power-mode/badges/applying-math-reasoning-topic-60x60.png?10",
            "large": "https://www.kastatic.org/images/power-mode/badges/applying-math-reasoning-topic-250x250.png?10",
            "email": "https://www.kastatic.org/images/badges/master-challenge-blue-70x70.png"
        },
        "absoluteUrl": "https://www.khanacademy.org/badges/pre-algebra-applying-mathematical-reasoning",
        "translatedSafeExtendedDescription": "Achieve mastery in all skills in Pre-algebra: Applying mathematical reasoning",
        "translatedDescription": "Pre-algebra: Applying mathematical reasoning",
        "isOwned": false,
        "badgeCategory": 5,
        "points": 0,
        "isRetired": false,
        "safeExtendedDescription": "Achieve mastery in all skills in Pre-algebra: Applying mathematical reasoning",
        "slug": "pre-algebra-applying-mathematical-reasoning",
        "name": "topic_exercise_RI8OP2UGDWg4yInmvxpjvPJFv8-nz_KSqdRKwLhL_mastery"
    },
    {
        "iconSrc": "https://www.kastatic.org/images/power-mode/badges/linear_inequalities-40x40.png?10",
        "hideContext": false,
        "description": "Algebra I: Linear inequalities",
        "relativeUrl": "/badges/algebra-i-linear-inequalities",
        "icons": {
            "small": "https://www.kastatic.org/images/power-mode/badges/linear_inequalities-40x40.png?10",
            "compact": "https://www.kastatic.org/images/power-mode/badges/linear_inequalities-60x60.png?10",
            "large": "https://www.kastatic.org/images/power-mode/badges/linear_inequalities-250x250.png?10",
            "email": "https://www.kastatic.org/images/badges/master-challenge-blue-70x70.png"
        },
        "absoluteUrl": "https://www.khanacademy.org/badges/algebra-i-linear-inequalities",
        "translatedSafeExtendedDescription": "Achieve mastery in all skills in Algebra I: Linear inequalities",
        "translatedDescription": "Algebra I: Linear inequalities",
        "isOwned": false,
        "badgeCategory": 5,
        "points": 0,
        "isRetired": false,
        "safeExtendedDescription": "Achieve mastery in all skills in Algebra I: Linear inequalities",
        "slug": "algebra-i-linear-inequalities",
        "name": "topic_exercise_RMCbw3fiPnqa7vGD5SivBWR1gH7XmCC-Fxss6NVp_mastery"
    },
    {
        "iconSrc": "https://www.kastatic.org/images/power-mode/badges/default-40x40.png?10",
        "hideContext": false,
        "description": "Algebra II: Systems of equations and inequalities",
        "relativeUrl": "/badges/algebra-ii-systems-of-equations-and-inequalities",
        "icons": {
            "small": "https://www.kastatic.org/images/power-mode/badges/default-40x40.png?10",
            "compact": "https://www.kastatic.org/images/power-mode/badges/default-60x60.png?10",
            "large": "https://www.kastatic.org/images/power-mode/badges/default-250x250.png?10",
            "email": "https://www.kastatic.org/images/badges/master-challenge-blue-70x70.png"
        },
        "absoluteUrl": "https://www.khanacademy.org/badges/algebra-ii-systems-of-equations-and-inequalities",
        "translatedSafeExtendedDescription": "Achieve mastery in all skills in Algebra II: Systems of equations and inequalities",
        "translatedDescription": "Algebra II: Systems of equations and inequalities",
        "isOwned": false,
        "badgeCategory": 5,
        "points": 0,
        "isRetired": false,
        "safeExtendedDescription": "Achieve mastery in all skills in Algebra II: Systems of equations and inequalities",
        "slug": "algebra-ii-systems-of-equations-and-inequalities",
        "name": "topic_exercise_UBxQ9EtBXBqYiJr5UfUd1hC-64cgRqsZV8TfWhdN_mastery"
    },
    {
        "iconSrc": "https://www.kastatic.org/images/power-mode/badges/order-of-operations-40x40.png?10",
        "hideContext": false,
        "description": "Pre-algebra: Arithmetic properties",
        "relativeUrl": "/badges/pre-algebra-arithmetic-properties",
        "icons": {
            "small": "https://www.kastatic.org/images/power-mode/badges/order-of-operations-40x40.png?10",
            "compact": "https://www.kastatic.org/images/power-mode/badges/order-of-operations-60x60.png?10",
            "large": "https://www.kastatic.org/images/power-mode/badges/order-of-operations-250x250.png?10",
            "email": "https://www.kastatic.org/images/badges/master-challenge-blue-70x70.png"
        },
        "absoluteUrl": "https://www.khanacademy.org/badges/pre-algebra-arithmetic-properties",
        "translatedSafeExtendedDescription": "Achieve mastery in all skills in Pre-algebra: Arithmetic properties",
        "translatedDescription": "Pre-algebra: Arithmetic properties",
        "isOwned": false,
        "badgeCategory": 5,
        "points": 0,
        "isRetired": false,
        "safeExtendedDescription": "Achieve mastery in all skills in Pre-algebra: Arithmetic properties",
        "slug": "pre-algebra-arithmetic-properties",
        "name": "topic_exercise_XrktPu74_wbKu_89ocp_AJFmuV0pYodt0QnFR1Ab_mastery"
    },
    {
        "iconSrc": "https://www.kastatic.org/images/power-mode/badges/solving-linear-equations-and-inequalities-40x40.png?10",
        "hideContext": false,
        "description": "Algebra I: Linear equations",
        "relativeUrl": "/badges/algebra-i-linear-equations",
        "icons": {
            "small": "https://www.kastatic.org/images/power-mode/badges/solving-linear-equations-and-inequalities-40x40.png?10",
            "compact": "https://www.kastatic.org/images/power-mode/badges/solving-linear-equations-and-inequalities-60x60.png?10",
            "large": "https://www.kastatic.org/images/power-mode/badges/solving-linear-equations-and-inequalities-250x250.png?10",
            "email": "https://www.kastatic.org/images/badges/master-challenge-blue-70x70.png"
        },
        "absoluteUrl": "https://www.khanacademy.org/badges/algebra-i-linear-equations",
        "translatedSafeExtendedDescription": "Achieve mastery in all skills in Algebra I: Linear equations",
        "translatedDescription": "Algebra I: Linear equations",
        "isOwned": false,
        "badgeCategory": 5,
        "points": 0,
        "isRetired": false,
        "safeExtendedDescription": "Achieve mastery in all skills in Algebra I: Linear equations",
        "slug": "algebra-i-linear-equations",
        "name": "topic_exercise_ZRz9FP3Oc1JYP1M_xLUezZcfX1bM8F63rnN4syNu_mastery"
    },
    {
        "iconSrc": "https://www.kastatic.org/images/power-mode/badges/statistics-inferential-40x40.png?10",
        "hideContext": false,
        "description": "Probability and statistics: Inferential statistics",
        "relativeUrl": "/badges/probability-and-statistics-inferential-statistics",
        "icons": {
            "small": "https://www.kastatic.org/images/power-mode/badges/statistics-inferential-40x40.png?10",
            "compact": "https://www.kastatic.org/images/power-mode/badges/statistics-inferential-60x60.png?10",
            "large": "https://www.kastatic.org/images/power-mode/badges/statistics-inferential-250x250.png?10",
            "email": "https://www.kastatic.org/images/badges/master-challenge-blue-70x70.png"
        },
        "absoluteUrl": "https://www.khanacademy.org/badges/probability-and-statistics-inferential-statistics",
        "translatedSafeExtendedDescription": "Achieve mastery in all skills in Probability and statistics: Inferential statistics",
        "translatedDescription": "Probability and statistics: Inferential statistics",
        "isOwned": false,
        "badgeCategory": 5,
        "points": 0,
        "isRetired": false,
        "safeExtendedDescription": "Achieve mastery in all skills in Probability and statistics: Inferential statistics",
        "slug": "probability-and-statistics-inferential-statistics",
        "name": "topic_exercise_a11EYuB8JELuSLuK70DfUGQlRMEKtVAxQdu1UtVK_mastery"
    },
    {
        "iconSrc": "https://www.kastatic.org/images/power-mode/badges/default-40x40.png?10",
        "hideContext": false,
        "description": "Algebra I: Exponent expressions and equations",
        "relativeUrl": "/badges/algebra-i-exponent-expressions-and-equations",
        "icons": {
            "small": "https://www.kastatic.org/images/power-mode/badges/default-40x40.png?10",
            "compact": "https://www.kastatic.org/images/power-mode/badges/default-60x60.png?10",
            "large": "https://www.kastatic.org/images/power-mode/badges/default-250x250.png?10",
            "email": "https://www.kastatic.org/images/badges/master-challenge-blue-70x70.png"
        },
        "absoluteUrl": "https://www.khanacademy.org/badges/algebra-i-exponent-expressions-and-equations",
        "translatedSafeExtendedDescription": "Achieve mastery in all skills in Algebra I: Exponent expressions and equations",
        "translatedDescription": "Algebra I: Exponent expressions and equations",
        "isOwned": false,
        "badgeCategory": 5,
        "points": 0,
        "isRetired": false,
        "safeExtendedDescription": "Achieve mastery in all skills in Algebra I: Exponent expressions and equations",
        "slug": "algebra-i-exponent-expressions-and-equations",
        "name": "topic_exercise_btJEpdEmmhhYt0pelz-5BBCZXl4ft3nGTawvnrPq_mastery"
    },
    {
        "iconSrc": "https://www.kastatic.org/images/power-mode/badges/absolute-value-40x40.png?10",
        "hideContext": false,
        "description": "Arithmetic: Negative numbers and absolute value",
        "relativeUrl": "/badges/arithmetic-negative-numbers-and-absolute-value",
        "icons": {
            "small": "https://www.kastatic.org/images/power-mode/badges/absolute-value-40x40.png?10",
            "compact": "https://www.kastatic.org/images/power-mode/badges/absolute-value-60x60.png?10",
            "large": "https://www.kastatic.org/images/power-mode/badges/absolute-value-250x250.png?10",
            "email": "https://www.kastatic.org/images/badges/master-challenge-blue-70x70.png"
        },
        "absoluteUrl": "https://www.khanacademy.org/badges/arithmetic-negative-numbers-and-absolute-value",
        "translatedSafeExtendedDescription": "Achieve mastery in all skills in Arithmetic: Negative numbers and absolute value",
        "translatedDescription": "Arithmetic: Negative numbers and absolute value",
        "isOwned": false,
        "badgeCategory": 5,
        "points": 0,
        "isRetired": false,
        "safeExtendedDescription": "Achieve mastery in all skills in Arithmetic: Negative numbers and absolute value",
        "slug": "arithmetic-negative-numbers-and-absolute-value",
        "name": "topic_exercise_dCbo4FwcSVKyciaY4Ok6F0a-FtFxcOcAKOILdb6q_mastery"
    },
    {
        "iconSrc": "https://www.kastatic.org/images/power-mode/badges/similarity-40x40.png?10",
        "hideContext": false,
        "description": "Geometry: Similarity",
        "relativeUrl": "/badges/geometry-similarity",
        "icons": {
            "small": "https://www.kastatic.org/images/power-mode/badges/similarity-40x40.png?10",
            "compact": "https://www.kastatic.org/images/power-mode/badges/similarity-60x60.png?10",
            "large": "https://www.kastatic.org/images/power-mode/badges/similarity-250x250.png?10",
            "email": "https://www.kastatic.org/images/badges/master-challenge-blue-70x70.png"
        },
        "absoluteUrl": "https://www.khanacademy.org/badges/geometry-similarity",
        "translatedSafeExtendedDescription": "Achieve mastery in all skills in Geometry: Similarity",
        "translatedDescription": "Geometry: Similarity",
        "isOwned": false,
        "badgeCategory": 5,
        "points": 0,
        "isRetired": false,
        "safeExtendedDescription": "Achieve mastery in all skills in Geometry: Similarity",
        "slug": "geometry-similarity",
        "name": "topic_exercise_duLZoDIgppI8sWSZRcx8wKtHULQqfn5LgUEywejp_mastery"
    },
    {
        "iconSrc": "https://www.kastatic.org/images/power-mode/badges/triangle-properties-40x40.png?10",
        "hideContext": false,
        "description": "Geometry: Special properties and parts of triangles",
        "relativeUrl": "/badges/geometry-special-properties-and-parts-of-triangles",
        "icons": {
            "small": "https://www.kastatic.org/images/power-mode/badges/triangle-properties-40x40.png?10",
            "compact": "https://www.kastatic.org/images/power-mode/badges/triangle-properties-60x60.png?10",
            "large": "https://www.kastatic.org/images/power-mode/badges/triangle-properties-250x250.png?10",
            "email": "https://www.kastatic.org/images/badges/master-challenge-blue-70x70.png"
        },
        "absoluteUrl": "https://www.khanacademy.org/badges/geometry-special-properties-and-parts-of-triangles",
        "translatedSafeExtendedDescription": "Achieve mastery in all skills in Geometry: Special properties and parts of triangles",
        "translatedDescription": "Geometry: Special properties and parts of triangles",
        "isOwned": false,
        "badgeCategory": 5,
        "points": 0,
        "isRetired": false,
        "safeExtendedDescription": "Achieve mastery in all skills in Geometry: Special properties and parts of triangles",
        "slug": "geometry-special-properties-and-parts-of-triangles",
        "name": "topic_exercise_fXOzwkCI8atCpgrnlCENSSw7OL72WPD5ICY0amSd_mastery"
    },
    {
        "iconSrc": "https://www.kastatic.org/images/power-mode/badges/systems-of-eq-and-ineq-40x40.png?10",
        "hideContext": false,
        "description": "Algebra I: Systems of equations and inequalities",
        "relativeUrl": "/badges/algebra-i-systems-of-equations-and-inequalities",
        "icons": {
            "small": "https://www.kastatic.org/images/power-mode/badges/systems-of-eq-and-ineq-40x40.png?10",
            "compact": "https://www.kastatic.org/images/power-mode/badges/systems-of-eq-and-ineq-60x60.png?10",
            "large": "https://www.kastatic.org/images/power-mode/badges/systems-of-eq-and-ineq-250x250.png?10",
            "email": "https://www.kastatic.org/images/badges/master-challenge-blue-70x70.png"
        },
        "absoluteUrl": "https://www.khanacademy.org/badges/algebra-i-systems-of-equations-and-inequalities",
        "translatedSafeExtendedDescription": "Achieve mastery in all skills in Algebra I: Systems of equations and inequalities",
        "translatedDescription": "Algebra I: Systems of equations and inequalities",
        "isOwned": false,
        "badgeCategory": 5,
        "points": 0,
        "isRetired": false,
        "safeExtendedDescription": "Achieve mastery in all skills in Algebra I: Systems of equations and inequalities",
        "slug": "algebra-i-systems-of-equations-and-inequalities",
        "name": "topic_exercise_iuUnywliLBQQ_Dibzrrsruwox-Wp7915SgZ2mBk6_mastery"
    },
    {
        "iconSrc": "https://www.kastatic.org/images/power-mode/badges/multiplication-division-40x40.png?10",
        "hideContext": false,
        "description": "Arithmetic: Multiplication and division",
        "relativeUrl": "/badges/arithmetic-multiplication-and-division",
        "icons": {
            "small": "https://www.kastatic.org/images/power-mode/badges/multiplication-division-40x40.png?10",
            "compact": "https://www.kastatic.org/images/power-mode/badges/multiplication-division-60x60.png?10",
            "large": "https://www.kastatic.org/images/power-mode/badges/multiplication-division-250x250.png?10",
            "email": "https://www.kastatic.org/images/badges/master-challenge-blue-70x70.png"
        },
        "absoluteUrl": "https://www.khanacademy.org/badges/arithmetic-multiplication-and-division",
        "translatedSafeExtendedDescription": "Achieve mastery in all skills in Arithmetic: Multiplication and division",
        "translatedDescription": "Arithmetic: Multiplication and division",
        "isOwned": false,
        "badgeCategory": 5,
        "points": 0,
        "isRetired": false,
        "safeExtendedDescription": "Achieve mastery in all skills in Arithmetic: Multiplication and division",
        "slug": "arithmetic-multiplication-and-division",
        "name": "topic_exercise_jjNw_P7DF9IrnyNAI0qQuJOPP9EygH7UKatgWVem_mastery"
    },
    {
        "iconSrc": "https://www.kastatic.org/images/power-mode/badges/default-40x40.png?10",
        "hideContext": false,
        "description": "Integral calculus: Integrals",
        "relativeUrl": "/badges/integral-calculus-integrals",
        "icons": {
            "small": "https://www.kastatic.org/images/power-mode/badges/default-40x40.png?10",
            "compact": "https://www.kastatic.org/images/power-mode/badges/default-60x60.png?10",
            "large": "https://www.kastatic.org/images/power-mode/badges/default-250x250.png?10",
            "email": "https://www.kastatic.org/images/badges/master-challenge-blue-70x70.png"
        },
        "absoluteUrl": "https://www.khanacademy.org/badges/integral-calculus-integrals",
        "translatedSafeExtendedDescription": "Achieve mastery in all skills in Integral calculus: Integrals",
        "translatedDescription": "Integral calculus: Integrals",
        "isOwned": false,
        "badgeCategory": 5,
        "points": 0,
        "isRetired": false,
        "safeExtendedDescription": "Achieve mastery in all skills in Integral calculus: Integrals",
        "slug": "integral-calculus-integrals",
        "name": "topic_exercise_l_x-siD3AugYxWigJq052uwAG-tbnGV7wesGeBEs_mastery"
    },
    {
        "iconSrc": "https://www.kastatic.org/images/power-mode/badges/default-40x40.png?10",
        "hideContext": false,
        "description": "Probability and statistics: Probability and combinatorics",
        "relativeUrl": "/badges/probability-and-statistics-probability-and-combinatorics",
        "icons": {
            "small": "https://www.kastatic.org/images/power-mode/badges/default-40x40.png?10",
            "compact": "https://www.kastatic.org/images/power-mode/badges/default-60x60.png?10",
            "large": "https://www.kastatic.org/images/power-mode/badges/default-250x250.png?10",
            "email": "https://www.kastatic.org/images/badges/master-challenge-blue-70x70.png"
        },
        "absoluteUrl": "https://www.khanacademy.org/badges/probability-and-statistics-probability-and-combinatorics",
        "translatedSafeExtendedDescription": "Achieve mastery in all skills in Probability and statistics: Probability and combinatorics",
        "translatedDescription": "Probability and statistics: Probability and combinatorics",
        "isOwned": false,
        "badgeCategory": 5,
        "points": 0,
        "isRetired": false,
        "safeExtendedDescription": "Achieve mastery in all skills in Probability and statistics: Probability and combinatorics",
        "slug": "probability-and-statistics-probability-and-combinatorics",
        "name": "topic_exercise_pFqSEsww-CMNvFtzI8zZ4ToUpyftBXFOWbdnypdU_mastery"
    },
    {
        "iconSrc": "https://www.kastatic.org/images/power-mode/badges/default-40x40.png?10",
        "hideContext": false,
        "description": "Integral calculus: Integration applications",
        "relativeUrl": "/badges/integral-calculus-integration-applications",
        "icons": {
            "small": "https://www.kastatic.org/images/power-mode/badges/default-40x40.png?10",
            "compact": "https://www.kastatic.org/images/power-mode/badges/default-60x60.png?10",
            "large": "https://www.kastatic.org/images/power-mode/badges/default-250x250.png?10",
            "email": "https://www.kastatic.org/images/badges/master-challenge-blue-70x70.png"
        },
        "absoluteUrl": "https://www.khanacademy.org/badges/integral-calculus-integration-applications",
        "translatedSafeExtendedDescription": "Achieve mastery in all skills in Integral calculus: Integration applications",
        "translatedDescription": "Integral calculus: Integration applications",
        "isOwned": false,
        "badgeCategory": 5,
        "points": 0,
        "isRetired": false,
        "safeExtendedDescription": "Achieve mastery in all skills in Integral calculus: Integration applications",
        "slug": "integral-calculus-integration-applications",
        "name": "topic_exercise_rxU2Db7_9vKHwkTuoBCOlJbfkL0nwf5TW07qxZyc_mastery"
    },
    {
        "iconSrc": "https://www.kastatic.org/images/power-mode/badges/factors-multiples-40x40.png?10",
        "hideContext": false,
        "description": "Pre-algebra: Factors and multiples",
        "relativeUrl": "/badges/pre-algebra-factors-and-multiples",
        "icons": {
            "small": "https://www.kastatic.org/images/power-mode/badges/factors-multiples-40x40.png?10",
            "compact": "https://www.kastatic.org/images/power-mode/badges/factors-multiples-60x60.png?10",
            "large": "https://www.kastatic.org/images/power-mode/badges/factors-multiples-250x250.png?10",
            "email": "https://www.kastatic.org/images/badges/master-challenge-blue-70x70.png"
        },
        "absoluteUrl": "https://www.khanacademy.org/badges/pre-algebra-factors-and-multiples",
        "translatedSafeExtendedDescription": "Achieve mastery in all skills in Pre-algebra: Factors and multiples",
        "translatedDescription": "Pre-algebra: Factors and multiples",
        "isOwned": false,
        "badgeCategory": 5,
        "points": 0,
        "isRetired": false,
        "safeExtendedDescription": "Achieve mastery in all skills in Pre-algebra: Factors and multiples",
        "slug": "pre-algebra-factors-and-multiples",
        "name": "topic_exercise_sKjw8V-WXbRYuuomASZQ5frgIw26JwZwK9yjuMdv_mastery"
    },
    {
        "iconSrc": "https://www.kastatic.org/images/power-mode/badges/linear-equations-and-inequalitie-40x40.png?10",
        "hideContext": false,
        "description": "Algebra I: Graphing and analyzing linear functions",
        "relativeUrl": "/badges/algebra-i-graphing-and-analyzing-linear-functions",
        "icons": {
            "small": "https://www.kastatic.org/images/power-mode/badges/linear-equations-and-inequalitie-40x40.png?10",
            "compact": "https://www.kastatic.org/images/power-mode/badges/linear-equations-and-inequalitie-60x60.png?10",
            "large": "https://www.kastatic.org/images/power-mode/badges/linear-equations-and-inequalitie-250x250.png?10",
            "email": "https://www.kastatic.org/images/badges/master-challenge-blue-70x70.png"
        },
        "absoluteUrl": "https://www.khanacademy.org/badges/algebra-i-graphing-and-analyzing-linear-functions",
        "translatedSafeExtendedDescription": "Achieve mastery in all skills in Algebra I: Graphing and analyzing linear functions",
        "translatedDescription": "Algebra I: Graphing and analyzing linear functions",
        "isOwned": false,
        "badgeCategory": 5,
        "points": 0,
        "isRetired": false,
        "safeExtendedDescription": "Achieve mastery in all skills in Algebra I: Graphing and analyzing linear functions",
        "slug": "algebra-i-graphing-and-analyzing-linear-functions",
        "name": "topic_exercise_st2s3FGaM9_CDZZFCq1BvO8SPXzr8HZi-Je63cKP_mastery"
    },
    {
        "iconSrc": "https://www.kastatic.org/images/power-mode/badges/default-40x40.png?10",
        "hideContext": false,
        "description": "Integral calculus: AP Calculus practice questions",
        "relativeUrl": "/badges/integral-calculus-ap-calculus-practice-questions",
        "icons": {
            "small": "https://www.kastatic.org/images/power-mode/badges/default-40x40.png?10",
            "compact": "https://www.kastatic.org/images/power-mode/badges/default-60x60.png?10",
            "large": "https://www.kastatic.org/images/power-mode/badges/default-250x250.png?10",
            "email": "https://www.kastatic.org/images/badges/master-challenge-blue-70x70.png"
        },
        "absoluteUrl": "https://www.khanacademy.org/badges/integral-calculus-ap-calculus-practice-questions",
        "translatedSafeExtendedDescription": "Achieve mastery in all skills in Integral calculus: AP Calculus practice questions",
        "translatedDescription": "Integral calculus: AP Calculus practice questions",
        "isOwned": false,
        "badgeCategory": 5,
        "points": 0,
        "isRetired": false,
        "safeExtendedDescription": "Achieve mastery in all skills in Integral calculus: AP Calculus practice questions",
        "slug": "integral-calculus-ap-calculus-practice-questions",
        "name": "topic_exercise_tYEsL7MEqnPdtRfmCRh93598-kPnQ_R2xYPcsurV_mastery"
    },
    {
        "iconSrc": "https://www.kastatic.org/images/power-mode/badges/default-40x40.png?10",
        "hideContext": false,
        "description": "Probability and statistics: Independent and dependent events",
        "relativeUrl": "/badges/probability-and-statistics-independent-and-dependent-events",
        "icons": {
            "small": "https://www.kastatic.org/images/power-mode/badges/default-40x40.png?10",
            "compact": "https://www.kastatic.org/images/power-mode/badges/default-60x60.png?10",
            "large": "https://www.kastatic.org/images/power-mode/badges/default-250x250.png?10",
            "email": "https://www.kastatic.org/images/badges/master-challenge-blue-70x70.png"
        },
        "absoluteUrl": "https://www.khanacademy.org/badges/probability-and-statistics-independent-and-dependent-events",
        "translatedSafeExtendedDescription": "Achieve mastery in all skills in Probability and statistics: Independent and dependent events",
        "translatedDescription": "Probability and statistics: Independent and dependent events",
        "isOwned": false,
        "badgeCategory": 5,
        "points": 0,
        "isRetired": false,
        "safeExtendedDescription": "Achieve mastery in all skills in Probability and statistics: Independent and dependent events",
        "slug": "probability-and-statistics-independent-and-dependent-events",
        "name": "topic_exercise_tf9_KxxFyk3PZL_H-TI737zm9F79wgqa9CpUwM0z_mastery"
    },
    {
        "iconSrc": "https://www.kastatic.org/images/power-mode/badges/default-40x40.png?10",
        "hideContext": false,
        "description": "Differential calculus: Derivative applications",
        "relativeUrl": "/badges/differential-calculus-derivative-applications",
        "icons": {
            "small": "https://www.kastatic.org/images/power-mode/badges/default-40x40.png?10",
            "compact": "https://www.kastatic.org/images/power-mode/badges/default-60x60.png?10",
            "large": "https://www.kastatic.org/images/power-mode/badges/default-250x250.png?10",
            "email": "https://www.kastatic.org/images/badges/master-challenge-blue-70x70.png"
        },
        "absoluteUrl": "https://www.khanacademy.org/badges/differential-calculus-derivative-applications",
        "translatedSafeExtendedDescription": "Achieve mastery in all skills in Differential calculus: Derivative applications",
        "translatedDescription": "Differential calculus: Derivative applications",
        "isOwned": false,
        "badgeCategory": 5,
        "points": 0,
        "isRetired": false,
        "safeExtendedDescription": "Achieve mastery in all skills in Differential calculus: Derivative applications",
        "slug": "differential-calculus-derivative-applications",
        "name": "topic_exercise_wIMjpyXXDoFfRGrDW614_IZy3N3caYFm8NrTSCpJ_mastery"
    },
    {
        "iconSrc": "https://www.kastatic.org/images/power-mode/badges/default-40x40.png?10",
        "hideContext": false,
        "description": "Probability and statistics: Regression",
        "relativeUrl": "/badges/probability-and-statistics-regression",
        "icons": {
            "small": "https://www.kastatic.org/images/power-mode/badges/default-40x40.png?10",
            "compact": "https://www.kastatic.org/images/power-mode/badges/default-60x60.png?10",
            "large": "https://www.kastatic.org/images/power-mode/badges/default-250x250.png?10",
            "email": "https://www.kastatic.org/images/badges/master-challenge-blue-70x70.png"
        },
        "absoluteUrl": "https://www.khanacademy.org/badges/probability-and-statistics-regression",
        "translatedSafeExtendedDescription": "Achieve mastery in all skills in Probability and statistics: Regression",
        "translatedDescription": "Probability and statistics: Regression",
        "isOwned": false,
        "badgeCategory": 5,
        "points": 0,
        "isRetired": false,
        "safeExtendedDescription": "Achieve mastery in all skills in Probability and statistics: Regression",
        "slug": "probability-and-statistics-regression",
        "name": "topic_exercise_waVh_4BIz7-iGpkl6jbWXq2dWIWTs53Gi1mb37rt_mastery"
    },
    {
        "iconSrc": "https://www.kastatic.org/images/power-mode/badges/default-40x40.png?10",
        "hideContext": false,
        "description": "Trigonometry: Basic trigonometry",
        "relativeUrl": "/badges/trigonometry-basic-trigonometry",
        "icons": {
            "small": "https://www.kastatic.org/images/power-mode/badges/default-40x40.png?10",
            "compact": "https://www.kastatic.org/images/power-mode/badges/default-60x60.png?10",
            "large": "https://www.kastatic.org/images/power-mode/badges/default-250x250.png?10",
            "email": "https://www.kastatic.org/images/badges/master-challenge-blue-70x70.png"
        },
        "absoluteUrl": "https://www.khanacademy.org/badges/trigonometry-basic-trigonometry",
        "translatedSafeExtendedDescription": "Achieve mastery in all skills in Trigonometry: Basic trigonometry",
        "translatedDescription": "Trigonometry: Basic trigonometry",
        "isOwned": false,
        "badgeCategory": 5,
        "points": 0,
        "isRetired": false,
        "safeExtendedDescription": "Achieve mastery in all skills in Trigonometry: Basic trigonometry",
        "slug": "trigonometry-basic-trigonometry",
        "name": "topic_exercise_wis13EsT4u0aOUkKUPVvMoUW1ILCoo-U0e3qRWgh_mastery"
    },
    {
        "iconSrc": "https://www.kastatic.org/images/power-mode/badges/default-40x40.png?10",
        "hideContext": false,
        "description": "Integral calculus: Integration techniques",
        "relativeUrl": "/badges/integral-calculus-integration-techniques",
        "icons": {
            "small": "https://www.kastatic.org/images/power-mode/badges/default-40x40.png?10",
            "compact": "https://www.kastatic.org/images/power-mode/badges/default-60x60.png?10",
            "large": "https://www.kastatic.org/images/power-mode/badges/default-250x250.png?10",
            "email": "https://www.kastatic.org/images/badges/master-challenge-blue-70x70.png"
        },
        "absoluteUrl": "https://www.khanacademy.org/badges/integral-calculus-integration-techniques",
        "translatedSafeExtendedDescription": "Achieve mastery in all skills in Integral calculus: Integration techniques",
        "translatedDescription": "Integral calculus: Integration techniques",
        "isOwned": false,
        "badgeCategory": 5,
        "points": 0,
        "isRetired": false,
        "safeExtendedDescription": "Achieve mastery in all skills in Integral calculus: Integration techniques",
        "slug": "integral-calculus-integration-techniques",
        "name": "topic_exercise_x07443e9b_mastery"
    },
    {
        "iconSrc": "https://www.kastatic.org/images/power-mode/badges/default-40x40.png?10",
        "hideContext": false,
        "description": "7th grade (U.S.): Variables and expressions",
        "relativeUrl": "/badges/7th-grade-us-variables-and-expressions",
        "icons": {
            "small": "https://www.kastatic.org/images/power-mode/badges/default-40x40.png?10",
            "compact": "https://www.kastatic.org/images/power-mode/badges/default-60x60.png?10",
            "large": "https://www.kastatic.org/images/power-mode/badges/default-250x250.png?10",
            "email": "https://www.kastatic.org/images/badges/master-challenge-blue-70x70.png"
        },
        "absoluteUrl": "https://www.khanacademy.org/badges/7th-grade-us-variables-and-expressions",
        "translatedSafeExtendedDescription": "Achieve mastery in all skills in 7th grade (U.S.): Variables and expressions",
        "translatedDescription": "7th grade (U.S.): Variables and expressions",
        "isOwned": false,
        "badgeCategory": 5,
        "points": 0,
        "isRetired": false,
        "safeExtendedDescription": "Achieve mastery in all skills in 7th grade (U.S.): Variables and expressions",
        "slug": "7th-grade-us-variables-and-expressions",
        "name": "topic_exercise_x0a8c9f98_mastery"
    },
    {
        "iconSrc": "https://www.kastatic.org/images/power-mode/badges/default-40x40.png?10",
        "hideContext": false,
        "description": "5th grade (U.S.): Measurement and data",
        "relativeUrl": "/badges/5th-grade-us-measurement-and-data",
        "icons": {
            "small": "https://www.kastatic.org/images/power-mode/badges/default-40x40.png?10",
            "compact": "https://www.kastatic.org/images/power-mode/badges/default-60x60.png?10",
            "large": "https://www.kastatic.org/images/power-mode/badges/default-250x250.png?10",
            "email": "https://www.kastatic.org/images/badges/master-challenge-blue-70x70.png"
        },
        "absoluteUrl": "https://www.khanacademy.org/badges/5th-grade-us-measurement-and-data",
        "translatedSafeExtendedDescription": "Achieve mastery in all skills in 5th grade (U.S.): Measurement and data",
        "translatedDescription": "5th grade (U.S.): Measurement and data",
        "isOwned": false,
        "badgeCategory": 5,
        "points": 0,
        "isRetired": false,
        "safeExtendedDescription": "Achieve mastery in all skills in 5th grade (U.S.): Measurement and data",
        "slug": "5th-grade-us-measurement-and-data",
        "name": "topic_exercise_x0ad7497b_mastery"
    },
    {
        "iconSrc": "https://www.kastatic.org/images/power-mode/badges/default-40x40.png?10",
        "hideContext": false,
        "description": "3rd grade (U.S.): Multiplication and division",
        "relativeUrl": "/badges/3rd-grade-us-multiplication-and-division",
        "icons": {
            "small": "https://www.kastatic.org/images/power-mode/badges/default-40x40.png?10",
            "compact": "https://www.kastatic.org/images/power-mode/badges/default-60x60.png?10",
            "large": "https://www.kastatic.org/images/power-mode/badges/default-250x250.png?10",
            "email": "https://www.kastatic.org/images/badges/master-challenge-blue-70x70.png"
        },
        "absoluteUrl": "https://www.khanacademy.org/badges/3rd-grade-us-multiplication-and-division",
        "translatedSafeExtendedDescription": "Achieve mastery in all skills in 3rd grade (U.S.): Multiplication and division",
        "translatedDescription": "3rd grade (U.S.): Multiplication and division",
        "isOwned": false,
        "badgeCategory": 5,
        "points": 0,
        "isRetired": false,
        "safeExtendedDescription": "Achieve mastery in all skills in 3rd grade (U.S.): Multiplication and division",
        "slug": "3rd-grade-us-multiplication-and-division",
        "name": "topic_exercise_x149f953f_mastery"
    },
    {
        "iconSrc": "https://www.kastatic.org/images/power-mode/badges/default-40x40.png?10",
        "hideContext": false,
        "description": "Precalculus: Probability and combinatorics",
        "relativeUrl": "/badges/precalculus-probability-and-combinatorics",
        "icons": {
            "small": "https://www.kastatic.org/images/power-mode/badges/default-40x40.png?10",
            "compact": "https://www.kastatic.org/images/power-mode/badges/default-60x60.png?10",
            "large": "https://www.kastatic.org/images/power-mode/badges/default-250x250.png?10",
            "email": "https://www.kastatic.org/images/badges/master-challenge-blue-70x70.png"
        },
        "absoluteUrl": "https://www.khanacademy.org/badges/precalculus-probability-and-combinatorics",
        "translatedSafeExtendedDescription": "Achieve mastery in all skills in Precalculus: Probability and combinatorics",
        "translatedDescription": "Precalculus: Probability and combinatorics",
        "isOwned": false,
        "badgeCategory": 5,
        "points": 0,
        "isRetired": false,
        "safeExtendedDescription": "Achieve mastery in all skills in Precalculus: Probability and combinatorics",
        "slug": "precalculus-probability-and-combinatorics",
        "name": "topic_exercise_x1af1e2a6_mastery"
    },
    {
        "iconSrc": "https://www.kastatic.org/images/power-mode/badges/default-40x40.png?10",
        "hideContext": false,
        "description": "8th grade (U.S.): Numbers and operations",
        "relativeUrl": "/badges/8th-grade-us-numbers-and-operations",
        "icons": {
            "small": "https://www.kastatic.org/images/power-mode/badges/default-40x40.png?10",
            "compact": "https://www.kastatic.org/images/power-mode/badges/default-60x60.png?10",
            "large": "https://www.kastatic.org/images/power-mode/badges/default-250x250.png?10",
            "email": "https://www.kastatic.org/images/badges/master-challenge-blue-70x70.png"
        },
        "absoluteUrl": "https://www.khanacademy.org/badges/8th-grade-us-numbers-and-operations",
        "translatedSafeExtendedDescription": "Achieve mastery in all skills in 8th grade (U.S.): Numbers and operations",
        "translatedDescription": "8th grade (U.S.): Numbers and operations",
        "isOwned": false,
        "badgeCategory": 5,
        "points": 0,
        "isRetired": false,
        "safeExtendedDescription": "Achieve mastery in all skills in 8th grade (U.S.): Numbers and operations",
        "slug": "8th-grade-us-numbers-and-operations",
        "name": "topic_exercise_x1afd9461_mastery"
    },
    {
        "iconSrc": "https://www.kastatic.org/images/power-mode/badges/default-40x40.png?10",
        "hideContext": false,
        "description": "Precalculus: Imaginary and complex numbers",
        "relativeUrl": "/badges/precalculus-imaginary-and-complex-numbers",
        "icons": {
            "small": "https://www.kastatic.org/images/power-mode/badges/default-40x40.png?10",
            "compact": "https://www.kastatic.org/images/power-mode/badges/default-60x60.png?10",
            "large": "https://www.kastatic.org/images/power-mode/badges/default-250x250.png?10",
            "email": "https://www.kastatic.org/images/badges/master-challenge-blue-70x70.png"
        },
        "absoluteUrl": "https://www.khanacademy.org/badges/precalculus-imaginary-and-complex-numbers",
        "translatedSafeExtendedDescription": "Achieve mastery in all skills in Precalculus: Imaginary and complex numbers",
        "translatedDescription": "Precalculus: Imaginary and complex numbers",
        "isOwned": false,
        "badgeCategory": 5,
        "points": 0,
        "isRetired": false,
        "safeExtendedDescription": "Achieve mastery in all skills in Precalculus: Imaginary and complex numbers",
        "slug": "precalculus-imaginary-and-complex-numbers",
        "name": "topic_exercise_x1dd60c20_mastery"
    },
    {
        "iconSrc": "https://www.kastatic.org/images/power-mode/badges/default-40x40.png?10",
        "hideContext": false,
        "description": "6th grade (U.S.): Ratios, rates, and percentages",
        "relativeUrl": "/badges/6th-grade-us-ratios-rates-and-percentages",
        "icons": {
            "small": "https://www.kastatic.org/images/power-mode/badges/default-40x40.png?10",
            "compact": "https://www.kastatic.org/images/power-mode/badges/default-60x60.png?10",
            "large": "https://www.kastatic.org/images/power-mode/badges/default-250x250.png?10",
            "email": "https://www.kastatic.org/images/badges/master-challenge-blue-70x70.png"
        },
        "absoluteUrl": "https://www.khanacademy.org/badges/6th-grade-us-ratios-rates-and-percentages",
        "translatedSafeExtendedDescription": "Achieve mastery in all skills in 6th grade (U.S.): Ratios, rates, and percentages",
        "translatedDescription": "6th grade (U.S.): Ratios, rates, and percentages",
        "isOwned": false,
        "badgeCategory": 5,
        "points": 0,
        "isRetired": false,
        "safeExtendedDescription": "Achieve mastery in all skills in 6th grade (U.S.): Ratios, rates, and percentages",
        "slug": "6th-grade-us-ratios-rates-and-percentages",
        "name": "topic_exercise_x22eef7de_mastery"
    },
    {
        "iconSrc": "https://www.kastatic.org/images/power-mode/badges/circles-40x40.png?10",
        "hideContext": false,
        "description": "Geometry: Circles",
        "relativeUrl": "/badges/geometry-circles",
        "icons": {
            "small": "https://www.kastatic.org/images/power-mode/badges/circles-40x40.png?10",
            "compact": "https://www.kastatic.org/images/power-mode/badges/circles-60x60.png?10",
            "large": "https://www.kastatic.org/images/power-mode/badges/circles-250x250.png?10",
            "email": "https://www.kastatic.org/images/badges/master-challenge-blue-70x70.png"
        },
        "absoluteUrl": "https://www.khanacademy.org/badges/geometry-circles",
        "translatedSafeExtendedDescription": "Achieve mastery in all skills in Geometry: Circles",
        "translatedDescription": "Geometry: Circles",
        "isOwned": false,
        "badgeCategory": 5,
        "points": 0,
        "isRetired": false,
        "safeExtendedDescription": "Achieve mastery in all skills in Geometry: Circles",
        "slug": "geometry-circles",
        "name": "topic_exercise_x2b399649_mastery"
    },
    {
        "iconSrc": "https://www.kastatic.org/images/power-mode/badges/default-40x40.png?10",
        "hideContext": false,
        "description": "Geometry: Geometric constructions",
        "relativeUrl": "/badges/geometry-geometric-constructions",
        "icons": {
            "small": "https://www.kastatic.org/images/power-mode/badges/default-40x40.png?10",
            "compact": "https://www.kastatic.org/images/power-mode/badges/default-60x60.png?10",
            "large": "https://www.kastatic.org/images/power-mode/badges/default-250x250.png?10",
            "email": "https://www.kastatic.org/images/badges/master-challenge-blue-70x70.png"
        },
        "absoluteUrl": "https://www.khanacademy.org/badges/geometry-geometric-constructions",
        "translatedSafeExtendedDescription": "Achieve mastery in all skills in Geometry: Geometric constructions",
        "translatedDescription": "Geometry: Geometric constructions",
        "isOwned": false,
        "badgeCategory": 5,
        "points": 0,
        "isRetired": false,
        "safeExtendedDescription": "Achieve mastery in all skills in Geometry: Geometric constructions",
        "slug": "geometry-geometric-constructions",
        "name": "topic_exercise_x2b70434f_mastery"
    },
    {
        "iconSrc": "https://www.kastatic.org/images/power-mode/badges/default-40x40.png?10",
        "hideContext": false,
        "description": "SAT : Full-length SAT",
        "relativeUrl": "/badges/sat-full-length-sat",
        "icons": {
            "small": "https://www.kastatic.org/images/power-mode/badges/default-40x40.png?10",
            "compact": "https://www.kastatic.org/images/power-mode/badges/default-60x60.png?10",
            "large": "https://www.kastatic.org/images/power-mode/badges/default-250x250.png?10",
            "email": "https://www.kastatic.org/images/badges/master-challenge-blue-70x70.png"
        },
        "absoluteUrl": "https://www.khanacademy.org/badges/sat-full-length-sat",
        "translatedSafeExtendedDescription": "Achieve mastery in all skills in SAT : Full-length SAT",
        "translatedDescription": "SAT : Full-length SAT",
        "isOwned": false,
        "badgeCategory": 5,
        "points": 0,
        "isRetired": false,
        "safeExtendedDescription": "Achieve mastery in all skills in SAT : Full-length SAT",
        "slug": "sat-full-length-sat",
        "name": "topic_exercise_x2cc75188_mastery"
    },
    {
        "iconSrc": "https://www.kastatic.org/images/power-mode/badges/default-40x40.png?10",
        "hideContext": false,
        "description": "Precalculus: Parametric equations and polar coordinates",
        "relativeUrl": "/badges/precalculus-parametric-equations-and-polar-coordinates",
        "icons": {
            "small": "https://www.kastatic.org/images/power-mode/badges/default-40x40.png?10",
            "compact": "https://www.kastatic.org/images/power-mode/badges/default-60x60.png?10",
            "large": "https://www.kastatic.org/images/power-mode/badges/default-250x250.png?10",
            "email": "https://www.kastatic.org/images/badges/master-challenge-blue-70x70.png"
        },
        "absoluteUrl": "https://www.khanacademy.org/badges/precalculus-parametric-equations-and-polar-coordinates",
        "translatedSafeExtendedDescription": "Achieve mastery in all skills in Precalculus: Parametric equations and polar coordinates",
        "translatedDescription": "Precalculus: Parametric equations and polar coordinates",
        "isOwned": false,
        "badgeCategory": 5,
        "points": 0,
        "isRetired": false,
        "safeExtendedDescription": "Achieve mastery in all skills in Precalculus: Parametric equations and polar coordinates",
        "slug": "precalculus-parametric-equations-and-polar-coordinates",
        "name": "topic_exercise_x2f0599c0_mastery"
    },
    {
        "iconSrc": "https://www.kastatic.org/images/power-mode/badges/default-40x40.png?10",
        "hideContext": false,
        "description": "Early math: Counting",
        "relativeUrl": "/badges/early-math-counting",
        "icons": {
            "small": "https://www.kastatic.org/images/power-mode/badges/default-40x40.png?10",
            "compact": "https://www.kastatic.org/images/power-mode/badges/default-60x60.png?10",
            "large": "https://www.kastatic.org/images/power-mode/badges/default-250x250.png?10",
            "email": "https://www.kastatic.org/images/badges/master-challenge-blue-70x70.png"
        },
        "absoluteUrl": "https://www.khanacademy.org/badges/early-math-counting",
        "translatedSafeExtendedDescription": "Achieve mastery in all skills in Early math: Counting",
        "translatedDescription": "Early math: Counting",
        "isOwned": false,
        "badgeCategory": 5,
        "points": 0,
        "isRetired": false,
        "safeExtendedDescription": "Achieve mastery in all skills in Early math: Counting",
        "slug": "early-math-counting",
        "name": "topic_exercise_x310ffe65_mastery"
    },
    {
        "iconSrc": "https://www.kastatic.org/images/power-mode/badges/default-40x40.png?10",
        "hideContext": false,
        "description": "Early math: Place value and patterns",
        "relativeUrl": "/badges/early-math-place-value-and-patterns",
        "icons": {
            "small": "https://www.kastatic.org/images/power-mode/badges/default-40x40.png?10",
            "compact": "https://www.kastatic.org/images/power-mode/badges/default-60x60.png?10",
            "large": "https://www.kastatic.org/images/power-mode/badges/default-250x250.png?10",
            "email": "https://www.kastatic.org/images/badges/master-challenge-blue-70x70.png"
        },
        "absoluteUrl": "https://www.khanacademy.org/badges/early-math-place-value-and-patterns",
        "translatedSafeExtendedDescription": "Achieve mastery in all skills in Early math: Place value and patterns",
        "translatedDescription": "Early math: Place value and patterns",
        "isOwned": false,
        "badgeCategory": 5,
        "points": 0,
        "isRetired": false,
        "safeExtendedDescription": "Achieve mastery in all skills in Early math: Place value and patterns",
        "slug": "early-math-place-value-and-patterns",
        "name": "topic_exercise_x314bd06e_mastery"
    },
    {
        "iconSrc": "https://www.kastatic.org/images/power-mode/badges/default-40x40.png?10",
        "hideContext": false,
        "description": "6th grade (U.S.): Negative numbers",
        "relativeUrl": "/badges/6th-grade-us-negative-numbers",
        "icons": {
            "small": "https://www.kastatic.org/images/power-mode/badges/default-40x40.png?10",
            "compact": "https://www.kastatic.org/images/power-mode/badges/default-60x60.png?10",
            "large": "https://www.kastatic.org/images/power-mode/badges/default-250x250.png?10",
            "email": "https://www.kastatic.org/images/badges/master-challenge-blue-70x70.png"
        },
        "absoluteUrl": "https://www.khanacademy.org/badges/6th-grade-us-negative-numbers",
        "translatedSafeExtendedDescription": "Achieve mastery in all skills in 6th grade (U.S.): Negative numbers",
        "translatedDescription": "6th grade (U.S.): Negative numbers",
        "isOwned": false,
        "badgeCategory": 5,
        "points": 0,
        "isRetired": false,
        "safeExtendedDescription": "Achieve mastery in all skills in 6th grade (U.S.): Negative numbers",
        "slug": "6th-grade-us-negative-numbers",
        "name": "topic_exercise_x347111cf_mastery"
    },
    {
        "iconSrc": "https://www.kastatic.org/images/power-mode/badges/default-40x40.png?10",
        "hideContext": false,
        "description": "Algebra I: Multiplying and factoring expressions",
        "relativeUrl": "/badges/algebra-i-multiplying-and-factoring-expressions",
        "icons": {
            "small": "https://www.kastatic.org/images/power-mode/badges/default-40x40.png?10",
            "compact": "https://www.kastatic.org/images/power-mode/badges/default-60x60.png?10",
            "large": "https://www.kastatic.org/images/power-mode/badges/default-250x250.png?10",
            "email": "https://www.kastatic.org/images/badges/master-challenge-blue-70x70.png"
        },
        "absoluteUrl": "https://www.khanacademy.org/badges/algebra-i-multiplying-and-factoring-expressions",
        "translatedSafeExtendedDescription": "Achieve mastery in all skills in Algebra I: Multiplying and factoring expressions",
        "translatedDescription": "Algebra I: Multiplying and factoring expressions",
        "isOwned": false,
        "badgeCategory": 5,
        "points": 0,
        "isRetired": false,
        "safeExtendedDescription": "Achieve mastery in all skills in Algebra I: Multiplying and factoring expressions",
        "slug": "algebra-i-multiplying-and-factoring-expressions",
        "name": "topic_exercise_x3686c281_mastery"
    },
    {
        "iconSrc": "https://www.kastatic.org/images/power-mode/badges/default-40x40.png?10",
        "hideContext": false,
        "description": "Trigonometry: Unit circle definition of trig functions",
        "relativeUrl": "/badges/trigonometry-unit-circle-definition-of-trig-functions",
        "icons": {
            "small": "https://www.kastatic.org/images/power-mode/badges/default-40x40.png?10",
            "compact": "https://www.kastatic.org/images/power-mode/badges/default-60x60.png?10",
            "large": "https://www.kastatic.org/images/power-mode/badges/default-250x250.png?10",
            "email": "https://www.kastatic.org/images/badges/master-challenge-blue-70x70.png"
        },
        "absoluteUrl": "https://www.khanacademy.org/badges/trigonometry-unit-circle-definition-of-trig-functions",
        "translatedSafeExtendedDescription": "Achieve mastery in all skills in Trigonometry: Unit circle definition of trig functions",
        "translatedDescription": "Trigonometry: Unit circle definition of trig functions",
        "isOwned": false,
        "badgeCategory": 5,
        "points": 0,
        "isRetired": false,
        "safeExtendedDescription": "Achieve mastery in all skills in Trigonometry: Unit circle definition of trig functions",
        "slug": "trigonometry-unit-circle-definition-of-trig-functions",
        "name": "topic_exercise_x36c957e4_mastery"
    },
    {
        "iconSrc": "https://www.kastatic.org/images/power-mode/badges/default-40x40.png?10",
        "hideContext": false,
        "description": "3rd grade (U.S.): Measurement and geometry",
        "relativeUrl": "/badges/3rd-grade-us-measurement-and-geometry",
        "icons": {
            "small": "https://www.kastatic.org/images/power-mode/badges/default-40x40.png?10",
            "compact": "https://www.kastatic.org/images/power-mode/badges/default-60x60.png?10",
            "large": "https://www.kastatic.org/images/power-mode/badges/default-250x250.png?10",
            "email": "https://www.kastatic.org/images/badges/master-challenge-blue-70x70.png"
        },
        "absoluteUrl": "https://www.khanacademy.org/badges/3rd-grade-us-measurement-and-geometry",
        "translatedSafeExtendedDescription": "Achieve mastery in all skills in 3rd grade (U.S.): Measurement and geometry",
        "translatedDescription": "3rd grade (U.S.): Measurement and geometry",
        "isOwned": false,
        "badgeCategory": 5,
        "points": 0,
        "isRetired": false,
        "safeExtendedDescription": "Achieve mastery in all skills in 3rd grade (U.S.): Measurement and geometry",
        "slug": "3rd-grade-us-measurement-and-geometry",
        "name": "topic_exercise_x3b2192e4_mastery"
    },
    {
        "iconSrc": "https://www.kastatic.org/images/power-mode/badges/default-40x40.png?10",
        "hideContext": false,
        "description": "Precalculus: Hyperbolic functions",
        "relativeUrl": "/badges/precalculus-hyperbolic-functions",
        "icons": {
            "small": "https://www.kastatic.org/images/power-mode/badges/default-40x40.png?10",
            "compact": "https://www.kastatic.org/images/power-mode/badges/default-60x60.png?10",
            "large": "https://www.kastatic.org/images/power-mode/badges/default-250x250.png?10",
            "email": "https://www.kastatic.org/images/badges/master-challenge-blue-70x70.png"
        },
        "absoluteUrl": "https://www.khanacademy.org/badges/precalculus-hyperbolic-functions",
        "translatedSafeExtendedDescription": "Achieve mastery in all skills in Precalculus: Hyperbolic functions",
        "translatedDescription": "Precalculus: Hyperbolic functions",
        "isOwned": false,
        "badgeCategory": 5,
        "points": 0,
        "isRetired": false,
        "safeExtendedDescription": "Achieve mastery in all skills in Precalculus: Hyperbolic functions",
        "slug": "precalculus-hyperbolic-functions",
        "name": "topic_exercise_x3f5028ed_mastery"
    },
    {
        "iconSrc": "https://www.kastatic.org/images/power-mode/badges/default-40x40.png?10",
        "hideContext": false,
        "description": "6th grade (U.S.): Data and statistics",
        "relativeUrl": "/badges/6th-grade-us-data-and-statistics",
        "icons": {
            "small": "https://www.kastatic.org/images/power-mode/badges/default-40x40.png?10",
            "compact": "https://www.kastatic.org/images/power-mode/badges/default-60x60.png?10",
            "large": "https://www.kastatic.org/images/power-mode/badges/default-250x250.png?10",
            "email": "https://www.kastatic.org/images/badges/master-challenge-blue-70x70.png"
        },
        "absoluteUrl": "https://www.khanacademy.org/badges/6th-grade-us-data-and-statistics",
        "translatedSafeExtendedDescription": "Achieve mastery in all skills in 6th grade (U.S.): Data and statistics",
        "translatedDescription": "6th grade (U.S.): Data and statistics",
        "isOwned": false,
        "badgeCategory": 5,
        "points": 0,
        "isRetired": false,
        "safeExtendedDescription": "Achieve mastery in all skills in 6th grade (U.S.): Data and statistics",
        "slug": "6th-grade-us-data-and-statistics",
        "name": "topic_exercise_x419abcbd_mastery"
    },
    {
        "iconSrc": "https://www.kastatic.org/images/power-mode/badges/addition-subtraction-40x40.png?10",
        "hideContext": false,
        "description": "4th grade (U.S.): Addition and subtraction",
        "relativeUrl": "/badges/4th-grade-us-addition-and-subtraction",
        "icons": {
            "small": "https://www.kastatic.org/images/power-mode/badges/addition-subtraction-40x40.png?10",
            "compact": "https://www.kastatic.org/images/power-mode/badges/addition-subtraction-60x60.png?10",
            "large": "https://www.kastatic.org/images/power-mode/badges/addition-subtraction-250x250.png?10",
            "email": "https://www.kastatic.org/images/badges/master-challenge-blue-70x70.png"
        },
        "absoluteUrl": "https://www.khanacademy.org/badges/4th-grade-us-addition-and-subtraction",
        "translatedSafeExtendedDescription": "Achieve mastery in all skills in 4th grade (U.S.): Addition and subtraction",
        "translatedDescription": "4th grade (U.S.): Addition and subtraction",
        "isOwned": false,
        "badgeCategory": 5,
        "points": 0,
        "isRetired": false,
        "safeExtendedDescription": "Achieve mastery in all skills in 4th grade (U.S.): Addition and subtraction",
        "slug": "4th-grade-us-addition-and-subtraction",
        "name": "topic_exercise_x447822a8_mastery"
    },
    {
        "iconSrc": "https://www.kastatic.org/images/power-mode/badges/default-40x40.png?10",
        "hideContext": false,
        "description": "5th grade (U.S.): Algebraic thinking",
        "relativeUrl": "/badges/5th-grade-us-algebraic-thinking",
        "icons": {
            "small": "https://www.kastatic.org/images/power-mode/badges/default-40x40.png?10",
            "compact": "https://www.kastatic.org/images/power-mode/badges/default-60x60.png?10",
            "large": "https://www.kastatic.org/images/power-mode/badges/default-250x250.png?10",
            "email": "https://www.kastatic.org/images/badges/master-challenge-blue-70x70.png"
        },
        "absoluteUrl": "https://www.khanacademy.org/badges/5th-grade-us-algebraic-thinking",
        "translatedSafeExtendedDescription": "Achieve mastery in all skills in 5th grade (U.S.): Algebraic thinking",
        "translatedDescription": "5th grade (U.S.): Algebraic thinking",
        "isOwned": false,
        "badgeCategory": 5,
        "points": 0,
        "isRetired": false,
        "safeExtendedDescription": "Achieve mastery in all skills in 5th grade (U.S.): Algebraic thinking",
        "slug": "5th-grade-us-algebraic-thinking",
        "name": "topic_exercise_x49226f8c_mastery"
    },
    {
        "iconSrc": "https://www.kastatic.org/images/power-mode/badges/default-40x40.png?10",
        "hideContext": false,
        "description": "4th grade (U.S.): Place value and rounding",
        "relativeUrl": "/badges/4th-grade-us-place-value-and-rounding",
        "icons": {
            "small": "https://www.kastatic.org/images/power-mode/badges/default-40x40.png?10",
            "compact": "https://www.kastatic.org/images/power-mode/badges/default-60x60.png?10",
            "large": "https://www.kastatic.org/images/power-mode/badges/default-250x250.png?10",
            "email": "https://www.kastatic.org/images/badges/master-challenge-blue-70x70.png"
        },
        "absoluteUrl": "https://www.khanacademy.org/badges/4th-grade-us-place-value-and-rounding",
        "translatedSafeExtendedDescription": "Achieve mastery in all skills in 4th grade (U.S.): Place value and rounding",
        "translatedDescription": "4th grade (U.S.): Place value and rounding",
        "isOwned": false,
        "badgeCategory": 5,
        "points": 0,
        "isRetired": false,
        "safeExtendedDescription": "Achieve mastery in all skills in 4th grade (U.S.): Place value and rounding",
        "slug": "4th-grade-us-place-value-and-rounding",
        "name": "topic_exercise_x4d29b2d1_mastery"
    },
    {
        "iconSrc": "https://www.kastatic.org/images/power-mode/badges/default-40x40.png?10",
        "hideContext": false,
        "description": "3rd grade (U.S.): Addition and subtraction",
        "relativeUrl": "/badges/3rd-grade-us-addition-and-subtraction",
        "icons": {
            "small": "https://www.kastatic.org/images/power-mode/badges/default-40x40.png?10",
            "compact": "https://www.kastatic.org/images/power-mode/badges/default-60x60.png?10",
            "large": "https://www.kastatic.org/images/power-mode/badges/default-250x250.png?10",
            "email": "https://www.kastatic.org/images/badges/master-challenge-blue-70x70.png"
        },
        "absoluteUrl": "https://www.khanacademy.org/badges/3rd-grade-us-addition-and-subtraction",
        "translatedSafeExtendedDescription": "Achieve mastery in all skills in 3rd grade (U.S.): Addition and subtraction",
        "translatedDescription": "3rd grade (U.S.): Addition and subtraction",
        "isOwned": false,
        "badgeCategory": 5,
        "points": 0,
        "isRetired": false,
        "safeExtendedDescription": "Achieve mastery in all skills in 3rd grade (U.S.): Addition and subtraction",
        "slug": "3rd-grade-us-addition-and-subtraction",
        "name": "topic_exercise_x4d345626_mastery"
    },
    {
        "iconSrc": "https://www.kastatic.org/images/power-mode/badges/default-40x40.png?10",
        "hideContext": false,
        "description": "Early math: Geometry",
        "relativeUrl": "/badges/early-math-geometry",
        "icons": {
            "small": "https://www.kastatic.org/images/power-mode/badges/default-40x40.png?10",
            "compact": "https://www.kastatic.org/images/power-mode/badges/default-60x60.png?10",
            "large": "https://www.kastatic.org/images/power-mode/badges/default-250x250.png?10",
            "email": "https://www.kastatic.org/images/badges/master-challenge-blue-70x70.png"
        },
        "absoluteUrl": "https://www.khanacademy.org/badges/early-math-geometry",
        "translatedSafeExtendedDescription": "Achieve mastery in all skills in Early math: Geometry",
        "translatedDescription": "Early math: Geometry",
        "isOwned": false,
        "badgeCategory": 5,
        "points": 0,
        "isRetired": false,
        "safeExtendedDescription": "Achieve mastery in all skills in Early math: Geometry",
        "slug": "early-math-geometry",
        "name": "topic_exercise_x54b9a662_mastery"
    },
    {
        "iconSrc": "https://www.kastatic.org/images/power-mode/badges/default-40x40.png?10",
        "hideContext": false,
        "description": "4th grade (U.S.): Measurement and data",
        "relativeUrl": "/badges/4th-grade-us-measurement-and-data",
        "icons": {
            "small": "https://www.kastatic.org/images/power-mode/badges/default-40x40.png?10",
            "compact": "https://www.kastatic.org/images/power-mode/badges/default-60x60.png?10",
            "large": "https://www.kastatic.org/images/power-mode/badges/default-250x250.png?10",
            "email": "https://www.kastatic.org/images/badges/master-challenge-blue-70x70.png"
        },
        "absoluteUrl": "https://www.khanacademy.org/badges/4th-grade-us-measurement-and-data",
        "translatedSafeExtendedDescription": "Achieve mastery in all skills in 4th grade (U.S.): Measurement and data",
        "translatedDescription": "4th grade (U.S.): Measurement and data",
        "isOwned": false,
        "badgeCategory": 5,
        "points": 0,
        "isRetired": false,
        "safeExtendedDescription": "Achieve mastery in all skills in 4th grade (U.S.): Measurement and data",
        "slug": "4th-grade-us-measurement-and-data",
        "name": "topic_exercise_x58fcadff_mastery"
    },
    {
        "iconSrc": "https://www.kastatic.org/images/power-mode/badges/default-40x40.png?10",
        "hideContext": false,
        "description": "5th grade (U.S.): Arithmetic operations",
        "relativeUrl": "/badges/5th-grade-us-arithmetic-operations",
        "icons": {
            "small": "https://www.kastatic.org/images/power-mode/badges/default-40x40.png?10",
            "compact": "https://www.kastatic.org/images/power-mode/badges/default-60x60.png?10",
            "large": "https://www.kastatic.org/images/power-mode/badges/default-250x250.png?10",
            "email": "https://www.kastatic.org/images/badges/master-challenge-blue-70x70.png"
        },
        "absoluteUrl": "https://www.khanacademy.org/badges/5th-grade-us-arithmetic-operations",
        "translatedSafeExtendedDescription": "Achieve mastery in all skills in 5th grade (U.S.): Arithmetic operations",
        "translatedDescription": "5th grade (U.S.): Arithmetic operations",
        "isOwned": false,
        "badgeCategory": 5,
        "points": 0,
        "isRetired": false,
        "safeExtendedDescription": "Achieve mastery in all skills in 5th grade (U.S.): Arithmetic operations",
        "slug": "5th-grade-us-arithmetic-operations",
        "name": "topic_exercise_x59c3b242_mastery"
    },
    {
        "iconSrc": "https://www.kastatic.org/images/power-mode/badges/default-40x40.png?10",
        "hideContext": false,
        "description": "Arithmetic: Telling time",
        "relativeUrl": "/badges/arithmetic-telling-time",
        "icons": {
            "small": "https://www.kastatic.org/images/power-mode/badges/default-40x40.png?10",
            "compact": "https://www.kastatic.org/images/power-mode/badges/default-60x60.png?10",
            "large": "https://www.kastatic.org/images/power-mode/badges/default-250x250.png?10",
            "email": "https://www.kastatic.org/images/badges/master-challenge-blue-70x70.png"
        },
        "absoluteUrl": "https://www.khanacademy.org/badges/arithmetic-telling-time",
        "translatedSafeExtendedDescription": "Achieve mastery in all skills in Arithmetic: Telling time",
        "translatedDescription": "Arithmetic: Telling time",
        "isOwned": false,
        "badgeCategory": 5,
        "points": 0,
        "isRetired": false,
        "safeExtendedDescription": "Achieve mastery in all skills in Arithmetic: Telling time",
        "slug": "arithmetic-telling-time",
        "name": "topic_exercise_x60491111_mastery"
    },
    {
        "iconSrc": "https://www.kastatic.org/images/power-mode/badges/default-40x40.png?10",
        "hideContext": false,
        "description": "3rd grade (U.S.): Fractions",
        "relativeUrl": "/badges/3rd-grade-us-fractions",
        "icons": {
            "small": "https://www.kastatic.org/images/power-mode/badges/default-40x40.png?10",
            "compact": "https://www.kastatic.org/images/power-mode/badges/default-60x60.png?10",
            "large": "https://www.kastatic.org/images/power-mode/badges/default-250x250.png?10",
            "email": "https://www.kastatic.org/images/badges/master-challenge-blue-70x70.png"
        },
        "absoluteUrl": "https://www.khanacademy.org/badges/3rd-grade-us-fractions",
        "translatedSafeExtendedDescription": "Achieve mastery in all skills in 3rd grade (U.S.): Fractions",
        "translatedDescription": "3rd grade (U.S.): Fractions",
        "isOwned": false,
        "badgeCategory": 5,
        "points": 0,
        "isRetired": false,
        "safeExtendedDescription": "Achieve mastery in all skills in 3rd grade (U.S.): Fractions",
        "slug": "3rd-grade-us-fractions",
        "name": "topic_exercise_x63009ec3_mastery"
    },
    {
        "iconSrc": "https://www.kastatic.org/images/power-mode/badges/default-40x40.png?10",
        "hideContext": false,
        "description": "7th grade (U.S.): Statistics and probability",
        "relativeUrl": "/badges/7th-grade-us-statistics-and-probability",
        "icons": {
            "small": "https://www.kastatic.org/images/power-mode/badges/default-40x40.png?10",
            "compact": "https://www.kastatic.org/images/power-mode/badges/default-60x60.png?10",
            "large": "https://www.kastatic.org/images/power-mode/badges/default-250x250.png?10",
            "email": "https://www.kastatic.org/images/badges/master-challenge-blue-70x70.png"
        },
        "absoluteUrl": "https://www.khanacademy.org/badges/7th-grade-us-statistics-and-probability",
        "translatedSafeExtendedDescription": "Achieve mastery in all skills in 7th grade (U.S.): Statistics and probability",
        "translatedDescription": "7th grade (U.S.): Statistics and probability",
        "isOwned": false,
        "badgeCategory": 5,
        "points": 0,
        "isRetired": false,
        "safeExtendedDescription": "Achieve mastery in all skills in 7th grade (U.S.): Statistics and probability",
        "slug": "7th-grade-us-statistics-and-probability",
        "name": "topic_exercise_x657459cb_mastery"
    },
    {
        "iconSrc": "https://www.kastatic.org/images/power-mode/badges/default-40x40.png?10",
        "hideContext": false,
        "description": "6th grade (U.S.): Properties of numbers",
        "relativeUrl": "/badges/6th-grade-us-properties-of-numbers",
        "icons": {
            "small": "https://www.kastatic.org/images/power-mode/badges/default-40x40.png?10",
            "compact": "https://www.kastatic.org/images/power-mode/badges/default-60x60.png?10",
            "large": "https://www.kastatic.org/images/power-mode/badges/default-250x250.png?10",
            "email": "https://www.kastatic.org/images/badges/master-challenge-blue-70x70.png"
        },
        "absoluteUrl": "https://www.khanacademy.org/badges/6th-grade-us-properties-of-numbers",
        "translatedSafeExtendedDescription": "Achieve mastery in all skills in 6th grade (U.S.): Properties of numbers",
        "translatedDescription": "6th grade (U.S.): Properties of numbers",
        "isOwned": false,
        "badgeCategory": 5,
        "points": 0,
        "isRetired": false,
        "safeExtendedDescription": "Achieve mastery in all skills in 6th grade (U.S.): Properties of numbers",
        "slug": "6th-grade-us-properties-of-numbers",
        "name": "topic_exercise_x673b532f_mastery"
    },
    {
        "iconSrc": "https://www.kastatic.org/images/power-mode/badges/default-40x40.png?10",
        "hideContext": false,
        "description": "Algebra II: Matrices",
        "relativeUrl": "/badges/algebra-ii-matrices",
        "icons": {
            "small": "https://www.kastatic.org/images/power-mode/badges/default-40x40.png?10",
            "compact": "https://www.kastatic.org/images/power-mode/badges/default-60x60.png?10",
            "large": "https://www.kastatic.org/images/power-mode/badges/default-250x250.png?10",
            "email": "https://www.kastatic.org/images/badges/master-challenge-blue-70x70.png"
        },
        "absoluteUrl": "https://www.khanacademy.org/badges/algebra-ii-matrices",
        "translatedSafeExtendedDescription": "Achieve mastery in all skills in Algebra II: Matrices",
        "translatedDescription": "Algebra II: Matrices",
        "isOwned": false,
        "badgeCategory": 5,
        "points": 0,
        "isRetired": false,
        "safeExtendedDescription": "Achieve mastery in all skills in Algebra II: Matrices",
        "slug": "algebra-ii-matrices",
        "name": "topic_exercise_x67944405_mastery"
    },
    {
        "iconSrc": "https://www.kastatic.org/images/power-mode/badges/geometry-40x40.png?10",
        "hideContext": false,
        "description": "5th grade (U.S.): Geometry",
        "relativeUrl": "/badges/5th-grade-us-geometry",
        "icons": {
            "small": "https://www.kastatic.org/images/power-mode/badges/geometry-40x40.png?10",
            "compact": "https://www.kastatic.org/images/power-mode/badges/geometry-60x60.png?10",
            "large": "https://www.kastatic.org/images/power-mode/badges/geometry-250x250.png?10",
            "email": "https://www.kastatic.org/images/badges/master-challenge-blue-70x70.png"
        },
        "absoluteUrl": "https://www.khanacademy.org/badges/5th-grade-us-geometry",
        "translatedSafeExtendedDescription": "Achieve mastery in all skills in 5th grade (U.S.): Geometry",
        "translatedDescription": "5th grade (U.S.): Geometry",
        "isOwned": false,
        "badgeCategory": 5,
        "points": 0,
        "isRetired": false,
        "safeExtendedDescription": "Achieve mastery in all skills in 5th grade (U.S.): Geometry",
        "slug": "5th-grade-us-geometry",
        "name": "topic_exercise_x6e6877f8_mastery"
    },
    {
        "iconSrc": "https://www.kastatic.org/images/power-mode/badges/default-40x40.png?10",
        "hideContext": false,
        "description": "8th grade (U.S.): Systems of equations",
        "relativeUrl": "/badges/8th-grade-us-systems-of-equations",
        "icons": {
            "small": "https://www.kastatic.org/images/power-mode/badges/default-40x40.png?10",
            "compact": "https://www.kastatic.org/images/power-mode/badges/default-60x60.png?10",
            "large": "https://www.kastatic.org/images/power-mode/badges/default-250x250.png?10",
            "email": "https://www.kastatic.org/images/badges/master-challenge-blue-70x70.png"
        },
        "absoluteUrl": "https://www.khanacademy.org/badges/8th-grade-us-systems-of-equations",
        "translatedSafeExtendedDescription": "Achieve mastery in all skills in 8th grade (U.S.): Systems of equations",
        "translatedDescription": "8th grade (U.S.): Systems of equations",
        "isOwned": false,
        "badgeCategory": 5,
        "points": 0,
        "isRetired": false,
        "safeExtendedDescription": "Achieve mastery in all skills in 8th grade (U.S.): Systems of equations",
        "slug": "8th-grade-us-systems-of-equations",
        "name": "topic_exercise_x71149dce_mastery"
    },
    {
        "iconSrc": "https://www.kastatic.org/images/power-mode/badges/geometry-40x40.png?10",
        "hideContext": false,
        "description": "8th grade (U.S.): Geometry",
        "relativeUrl": "/badges/8th-grade-us-geometry",
        "icons": {
            "small": "https://www.kastatic.org/images/power-mode/badges/geometry-40x40.png?10",
            "compact": "https://www.kastatic.org/images/power-mode/badges/geometry-60x60.png?10",
            "large": "https://www.kastatic.org/images/power-mode/badges/geometry-250x250.png?10",
            "email": "https://www.kastatic.org/images/badges/master-challenge-blue-70x70.png"
        },
        "absoluteUrl": "https://www.khanacademy.org/badges/8th-grade-us-geometry",
        "translatedSafeExtendedDescription": "Achieve mastery in all skills in 8th grade (U.S.): Geometry",
        "translatedDescription": "8th grade (U.S.): Geometry",
        "isOwned": false,
        "badgeCategory": 5,
        "points": 0,
        "isRetired": false,
        "safeExtendedDescription": "Achieve mastery in all skills in 8th grade (U.S.): Geometry",
        "slug": "8th-grade-us-geometry",
        "name": "topic_exercise_x7306f126_mastery"
    },
    {
        "iconSrc": "https://www.kastatic.org/images/power-mode/badges/default-40x40.png?10",
        "hideContext": false,
        "description": "Pre-algebra: Decimals",
        "relativeUrl": "/badges/pre-algebra-decimals",
        "icons": {
            "small": "https://www.kastatic.org/images/power-mode/badges/default-40x40.png?10",
            "compact": "https://www.kastatic.org/images/power-mode/badges/default-60x60.png?10",
            "large": "https://www.kastatic.org/images/power-mode/badges/default-250x250.png?10",
            "email": "https://www.kastatic.org/images/badges/master-challenge-blue-70x70.png"
        },
        "absoluteUrl": "https://www.khanacademy.org/badges/pre-algebra-decimals",
        "translatedSafeExtendedDescription": "Achieve mastery in all skills in Pre-algebra: Decimals",
        "translatedDescription": "Pre-algebra: Decimals",
        "isOwned": false,
        "badgeCategory": 5,
        "points": 0,
        "isRetired": false,
        "safeExtendedDescription": "Achieve mastery in all skills in Pre-algebra: Decimals",
        "slug": "pre-algebra-decimals",
        "name": "topic_exercise_x76ac7fc5_mastery"
    },
    {
        "iconSrc": "https://www.kastatic.org/images/power-mode/badges/default-40x40.png?10",
        "hideContext": false,
        "description": "3rd grade (U.S.): Expressions and patterns",
        "relativeUrl": "/badges/3rd-grade-us-expressions-and-patterns",
        "icons": {
            "small": "https://www.kastatic.org/images/power-mode/badges/default-40x40.png?10",
            "compact": "https://www.kastatic.org/images/power-mode/badges/default-60x60.png?10",
            "large": "https://www.kastatic.org/images/power-mode/badges/default-250x250.png?10",
            "email": "https://www.kastatic.org/images/badges/master-challenge-blue-70x70.png"
        },
        "absoluteUrl": "https://www.khanacademy.org/badges/3rd-grade-us-expressions-and-patterns",
        "translatedSafeExtendedDescription": "Achieve mastery in all skills in 3rd grade (U.S.): Expressions and patterns",
        "translatedDescription": "3rd grade (U.S.): Expressions and patterns",
        "isOwned": false,
        "badgeCategory": 5,
        "points": 0,
        "isRetired": false,
        "safeExtendedDescription": "Achieve mastery in all skills in 3rd grade (U.S.): Expressions and patterns",
        "slug": "3rd-grade-us-expressions-and-patterns",
        "name": "topic_exercise_x79d23611_mastery"
    },
    {
        "iconSrc": "https://www.kastatic.org/images/power-mode/badges/default-40x40.png?10",
        "hideContext": false,
        "description": "7th grade (U.S.): Negative Numbers",
        "relativeUrl": "/badges/7th-grade-us-negative-numbers",
        "icons": {
            "small": "https://www.kastatic.org/images/power-mode/badges/default-40x40.png?10",
            "compact": "https://www.kastatic.org/images/power-mode/badges/default-60x60.png?10",
            "large": "https://www.kastatic.org/images/power-mode/badges/default-250x250.png?10",
            "email": "https://www.kastatic.org/images/badges/master-challenge-blue-70x70.png"
        },
        "absoluteUrl": "https://www.khanacademy.org/badges/7th-grade-us-negative-numbers",
        "translatedSafeExtendedDescription": "Achieve mastery in all skills in 7th grade (U.S.): Negative Numbers",
        "translatedDescription": "7th grade (U.S.): Negative Numbers",
        "isOwned": false,
        "badgeCategory": 5,
        "points": 0,
        "isRetired": false,
        "safeExtendedDescription": "Achieve mastery in all skills in 7th grade (U.S.): Negative Numbers",
        "slug": "7th-grade-us-negative-numbers",
        "name": "topic_exercise_x7ef05b40_mastery"
    },
    {
        "iconSrc": "https://www.kastatic.org/images/power-mode/badges/rates-and-ratios-40x40.png?10",
        "hideContext": false,
        "description": "7th grade (U.S.): Rates, proportional relationships, and ratios",
        "relativeUrl": "/badges/7th-grade-us-rates-proportional-relationships-and-ratios",
        "icons": {
            "small": "https://www.kastatic.org/images/power-mode/badges/rates-and-ratios-40x40.png?10",
            "compact": "https://www.kastatic.org/images/power-mode/badges/rates-and-ratios-60x60.png?10",
            "large": "https://www.kastatic.org/images/power-mode/badges/rates-and-ratios-250x250.png?10",
            "email": "https://www.kastatic.org/images/badges/master-challenge-blue-70x70.png"
        },
        "absoluteUrl": "https://www.khanacademy.org/badges/7th-grade-us-rates-proportional-relationships-and-ratios",
        "translatedSafeExtendedDescription": "Achieve mastery in all skills in 7th grade (U.S.): Rates, proportional relationships, and ratios",
        "translatedDescription": "7th grade (U.S.): Rates, proportional relationships, and ratios",
        "isOwned": false,
        "badgeCategory": 5,
        "points": 0,
        "isRetired": false,
        "safeExtendedDescription": "Achieve mastery in all skills in 7th grade (U.S.): Rates, proportional relationships, and ratios",
        "slug": "7th-grade-us-rates-proportional-relationships-and-ratios",
        "name": "topic_exercise_x805b3a5e_mastery"
    },
    {
        "iconSrc": "https://www.kastatic.org/images/power-mode/badges/default-40x40.png?10",
        "hideContext": false,
        "description": "Early math: Measurement and data",
        "relativeUrl": "/badges/early-math-measurement-and-data",
        "icons": {
            "small": "https://www.kastatic.org/images/power-mode/badges/default-40x40.png?10",
            "compact": "https://www.kastatic.org/images/power-mode/badges/default-60x60.png?10",
            "large": "https://www.kastatic.org/images/power-mode/badges/default-250x250.png?10",
            "email": "https://www.kastatic.org/images/badges/master-challenge-blue-70x70.png"
        },
        "absoluteUrl": "https://www.khanacademy.org/badges/early-math-measurement-and-data",
        "translatedSafeExtendedDescription": "Achieve mastery in all skills in Early math: Measurement and data",
        "translatedDescription": "Early math: Measurement and data",
        "isOwned": false,
        "badgeCategory": 5,
        "points": 0,
        "isRetired": false,
        "safeExtendedDescription": "Achieve mastery in all skills in Early math: Measurement and data",
        "slug": "early-math-measurement-and-data",
        "name": "topic_exercise_x853bca69_mastery"
    },
    {
        "iconSrc": "https://www.kastatic.org/images/power-mode/badges/default-40x40.png?10",
        "hideContext": false,
        "description": "6th grade (U.S.): Variables and expressions",
        "relativeUrl": "/badges/6th-grade-us-variables-and-expressions",
        "icons": {
            "small": "https://www.kastatic.org/images/power-mode/badges/default-40x40.png?10",
            "compact": "https://www.kastatic.org/images/power-mode/badges/default-60x60.png?10",
            "large": "https://www.kastatic.org/images/power-mode/badges/default-250x250.png?10",
            "email": "https://www.kastatic.org/images/badges/master-challenge-blue-70x70.png"
        },
        "absoluteUrl": "https://www.khanacademy.org/badges/6th-grade-us-variables-and-expressions",
        "translatedSafeExtendedDescription": "Achieve mastery in all skills in 6th grade (U.S.): Variables and expressions",
        "translatedDescription": "6th grade (U.S.): Variables and expressions",
        "isOwned": false,
        "badgeCategory": 5,
        "points": 0,
        "isRetired": false,
        "safeExtendedDescription": "Achieve mastery in all skills in 6th grade (U.S.): Variables and expressions",
        "slug": "6th-grade-us-variables-and-expressions",
        "name": "topic_exercise_x8ade30f9_mastery"
    },
    {
        "iconSrc": "https://www.kastatic.org/images/power-mode/badges/default-40x40.png?10",
        "hideContext": false,
        "description": "SAT : SAT Math practice",
        "relativeUrl": "/badges/sat-sat-math-practice",
        "icons": {
            "small": "https://www.kastatic.org/images/power-mode/badges/default-40x40.png?10",
            "compact": "https://www.kastatic.org/images/power-mode/badges/default-60x60.png?10",
            "large": "https://www.kastatic.org/images/power-mode/badges/default-250x250.png?10",
            "email": "https://www.kastatic.org/images/badges/master-challenge-blue-70x70.png"
        },
        "absoluteUrl": "https://www.khanacademy.org/badges/sat-sat-math-practice",
        "translatedSafeExtendedDescription": "Achieve mastery in all skills in SAT : SAT Math practice",
        "translatedDescription": "SAT : SAT Math practice",
        "isOwned": false,
        "badgeCategory": 5,
        "points": 0,
        "isRetired": false,
        "safeExtendedDescription": "Achieve mastery in all skills in SAT : SAT Math practice",
        "slug": "sat-sat-math-practice",
        "name": "topic_exercise_x8cb799e4_mastery"
    },
    {
        "iconSrc": "https://www.kastatic.org/images/power-mode/badges/default-40x40.png?10",
        "hideContext": false,
        "description": "Precalculus: Vectors",
        "relativeUrl": "/badges/precalculus-vectors",
        "icons": {
            "small": "https://www.kastatic.org/images/power-mode/badges/default-40x40.png?10",
            "compact": "https://www.kastatic.org/images/power-mode/badges/default-60x60.png?10",
            "large": "https://www.kastatic.org/images/power-mode/badges/default-250x250.png?10",
            "email": "https://www.kastatic.org/images/badges/master-challenge-blue-70x70.png"
        },
        "absoluteUrl": "https://www.khanacademy.org/badges/precalculus-vectors",
        "translatedSafeExtendedDescription": "Achieve mastery in all skills in Precalculus: Vectors",
        "translatedDescription": "Precalculus: Vectors",
        "isOwned": false,
        "badgeCategory": 5,
        "points": 0,
        "isRetired": false,
        "safeExtendedDescription": "Achieve mastery in all skills in Precalculus: Vectors",
        "slug": "precalculus-vectors",
        "name": "topic_exercise_x8dd62d07_mastery"
    },
    {
        "iconSrc": "https://www.kastatic.org/images/power-mode/badges/default-40x40.png?10",
        "hideContext": false,
        "description": "Pre-algebra: Negative numbers and absolute value",
        "relativeUrl": "/badges/pre-algebra-negative-numbers-and-absolute-value",
        "icons": {
            "small": "https://www.kastatic.org/images/power-mode/badges/default-40x40.png?10",
            "compact": "https://www.kastatic.org/images/power-mode/badges/default-60x60.png?10",
            "large": "https://www.kastatic.org/images/power-mode/badges/default-250x250.png?10",
            "email": "https://www.kastatic.org/images/badges/master-challenge-blue-70x70.png"
        },
        "absoluteUrl": "https://www.khanacademy.org/badges/pre-algebra-negative-numbers-and-absolute-value",
        "translatedSafeExtendedDescription": "Achieve mastery in all skills in Pre-algebra: Negative numbers and absolute value",
        "translatedDescription": "Pre-algebra: Negative numbers and absolute value",
        "isOwned": false,
        "badgeCategory": 5,
        "points": 0,
        "isRetired": false,
        "safeExtendedDescription": "Achieve mastery in all skills in Pre-algebra: Negative numbers and absolute value",
        "slug": "pre-algebra-negative-numbers-and-absolute-value",
        "name": "topic_exercise_x8fd51ad5_mastery"
    },
    {
        "iconSrc": "https://www.kastatic.org/images/power-mode/badges/fractions-40x40.png?10",
        "hideContext": false,
        "description": "5th grade (U.S.): Fractions",
        "relativeUrl": "/badges/5th-grade-us-fractions",
        "icons": {
            "small": "https://www.kastatic.org/images/power-mode/badges/fractions-40x40.png?10",
            "compact": "https://www.kastatic.org/images/power-mode/badges/fractions-60x60.png?10",
            "large": "https://www.kastatic.org/images/power-mode/badges/fractions-250x250.png?10",
            "email": "https://www.kastatic.org/images/badges/master-challenge-blue-70x70.png"
        },
        "absoluteUrl": "https://www.khanacademy.org/badges/5th-grade-us-fractions",
        "translatedSafeExtendedDescription": "Achieve mastery in all skills in 5th grade (U.S.): Fractions",
        "translatedDescription": "5th grade (U.S.): Fractions",
        "isOwned": false,
        "badgeCategory": 5,
        "points": 0,
        "isRetired": false,
        "safeExtendedDescription": "Achieve mastery in all skills in 5th grade (U.S.): Fractions",
        "slug": "5th-grade-us-fractions",
        "name": "topic_exercise_x91cad26e_mastery"
    },
    {
        "iconSrc": "https://www.kastatic.org/images/power-mode/badges/default-40x40.png?10",
        "hideContext": false,
        "description": "Probability and statistics: Statistical studies",
        "relativeUrl": "/badges/probability-and-statistics-statistical-studies",
        "icons": {
            "small": "https://www.kastatic.org/images/power-mode/badges/default-40x40.png?10",
            "compact": "https://www.kastatic.org/images/power-mode/badges/default-60x60.png?10",
            "large": "https://www.kastatic.org/images/power-mode/badges/default-250x250.png?10",
            "email": "https://www.kastatic.org/images/badges/master-challenge-blue-70x70.png"
        },
        "absoluteUrl": "https://www.khanacademy.org/badges/probability-and-statistics-statistical-studies",
        "translatedSafeExtendedDescription": "Achieve mastery in all skills in Probability and statistics: Statistical studies",
        "translatedDescription": "Probability and statistics: Statistical studies",
        "isOwned": false,
        "badgeCategory": 5,
        "points": 0,
        "isRetired": false,
        "safeExtendedDescription": "Achieve mastery in all skills in Probability and statistics: Statistical studies",
        "slug": "probability-and-statistics-statistical-studies",
        "name": "topic_exercise_x9f54cbb4_mastery"
    },
    {
        "iconSrc": "https://www.kastatic.org/images/power-mode/badges/parallel-and-perpendicular-lines-40x40.png?10",
        "hideContext": false,
        "description": "Geometry: Angles and intersecting lines",
        "relativeUrl": "/badges/geometry-angles-and-intersecting-lines",
        "icons": {
            "small": "https://www.kastatic.org/images/power-mode/badges/parallel-and-perpendicular-lines-40x40.png?10",
            "compact": "https://www.kastatic.org/images/power-mode/badges/parallel-and-perpendicular-lines-60x60.png?10",
            "large": "https://www.kastatic.org/images/power-mode/badges/parallel-and-perpendicular-lines-250x250.png?10",
            "email": "https://www.kastatic.org/images/badges/master-challenge-blue-70x70.png"
        },
        "absoluteUrl": "https://www.khanacademy.org/badges/geometry-angles-and-intersecting-lines",
        "translatedSafeExtendedDescription": "Achieve mastery in all skills in Geometry: Angles and intersecting lines",
        "translatedDescription": "Geometry: Angles and intersecting lines",
        "isOwned": false,
        "badgeCategory": 5,
        "points": 0,
        "isRetired": false,
        "safeExtendedDescription": "Achieve mastery in all skills in Geometry: Angles and intersecting lines",
        "slug": "geometry-angles-and-intersecting-lines",
        "name": "topic_exercise_xLyOiELVpsXCiF_JnNjxfkIXZ_1ffpiYCSP7Um3H_mastery"
    },
    {
        "iconSrc": "https://www.kastatic.org/images/power-mode/badges/congruent-triangles-40x40.png?10",
        "hideContext": false,
        "description": "Geometry: Congruence",
        "relativeUrl": "/badges/geometry-congruence",
        "icons": {
            "small": "https://www.kastatic.org/images/power-mode/badges/congruent-triangles-40x40.png?10",
            "compact": "https://www.kastatic.org/images/power-mode/badges/congruent-triangles-60x60.png?10",
            "large": "https://www.kastatic.org/images/power-mode/badges/congruent-triangles-250x250.png?10",
            "email": "https://www.kastatic.org/images/badges/master-challenge-blue-70x70.png"
        },
        "absoluteUrl": "https://www.khanacademy.org/badges/geometry-congruence",
        "translatedSafeExtendedDescription": "Achieve mastery in all skills in Geometry: Congruence",
        "translatedDescription": "Geometry: Congruence",
        "isOwned": false,
        "badgeCategory": 5,
        "points": 0,
        "isRetired": false,
        "safeExtendedDescription": "Achieve mastery in all skills in Geometry: Congruence",
        "slug": "geometry-congruence",
        "name": "topic_exercise_xR_zAHtYLpu0FWR2TblREw3SnSwSj_kib0mhmpoP_mastery"
    },
    {
        "iconSrc": "https://www.kastatic.org/images/power-mode/badges/default-40x40.png?10",
        "hideContext": false,
        "description": "SAT : SAT Reading and Writing practice",
        "relativeUrl": "/badges/sat-sat-reading-and-writing-practice",
        "icons": {
            "small": "https://www.kastatic.org/images/power-mode/badges/default-40x40.png?10",
            "compact": "https://www.kastatic.org/images/power-mode/badges/default-60x60.png?10",
            "large": "https://www.kastatic.org/images/power-mode/badges/default-250x250.png?10",
            "email": "https://www.kastatic.org/images/badges/master-challenge-blue-70x70.png"
        },
        "absoluteUrl": "https://www.khanacademy.org/badges/sat-sat-reading-and-writing-practice",
        "translatedSafeExtendedDescription": "Achieve mastery in all skills in SAT : SAT Reading and Writing practice",
        "translatedDescription": "SAT : SAT Reading and Writing practice",
        "isOwned": false,
        "badgeCategory": 5,
        "points": 0,
        "isRetired": false,
        "safeExtendedDescription": "Achieve mastery in all skills in SAT : SAT Reading and Writing practice",
        "slug": "sat-sat-reading-and-writing-practice",
        "name": "topic_exercise_xa142ef20_mastery"
    },
    {
        "iconSrc": "https://www.kastatic.org/images/power-mode/badges/default-40x40.png?10",
        "hideContext": false,
        "description": "Early math: Addition and subtraction",
        "relativeUrl": "/badges/early-math-addition-and-subtraction",
        "icons": {
            "small": "https://www.kastatic.org/images/power-mode/badges/default-40x40.png?10",
            "compact": "https://www.kastatic.org/images/power-mode/badges/default-60x60.png?10",
            "large": "https://www.kastatic.org/images/power-mode/badges/default-250x250.png?10",
            "email": "https://www.kastatic.org/images/badges/master-challenge-blue-70x70.png"
        },
        "absoluteUrl": "https://www.khanacademy.org/badges/early-math-addition-and-subtraction",
        "translatedSafeExtendedDescription": "Achieve mastery in all skills in Early math: Addition and subtraction",
        "translatedDescription": "Early math: Addition and subtraction",
        "isOwned": false,
        "badgeCategory": 5,
        "points": 0,
        "isRetired": false,
        "safeExtendedDescription": "Achieve mastery in all skills in Early math: Addition and subtraction",
        "slug": "early-math-addition-and-subtraction",
        "name": "topic_exercise_xa2993d94_mastery"
    },
    {
        "iconSrc": "https://www.kastatic.org/images/power-mode/badges/factors-multiples-40x40.png?10",
        "hideContext": false,
        "description": "4th grade (U.S.): Factors, multiples and patterns",
        "relativeUrl": "/badges/4th-grade-us-factors-multiples-and-patterns",
        "icons": {
            "small": "https://www.kastatic.org/images/power-mode/badges/factors-multiples-40x40.png?10",
            "compact": "https://www.kastatic.org/images/power-mode/badges/factors-multiples-60x60.png?10",
            "large": "https://www.kastatic.org/images/power-mode/badges/factors-multiples-250x250.png?10",
            "email": "https://www.kastatic.org/images/badges/master-challenge-blue-70x70.png"
        },
        "absoluteUrl": "https://www.khanacademy.org/badges/4th-grade-us-factors-multiples-and-patterns",
        "translatedSafeExtendedDescription": "Achieve mastery in all skills in 4th grade (U.S.): Factors, multiples and patterns",
        "translatedDescription": "4th grade (U.S.): Factors, multiples and patterns",
        "isOwned": false,
        "badgeCategory": 5,
        "points": 0,
        "isRetired": false,
        "safeExtendedDescription": "Achieve mastery in all skills in 4th grade (U.S.): Factors, multiples and patterns",
        "slug": "4th-grade-us-factors-multiples-and-patterns",
        "name": "topic_exercise_xa391e5e5_mastery"
    },
    {
        "iconSrc": "https://www.kastatic.org/images/power-mode/badges/default-40x40.png?10",
        "hideContext": false,
        "description": "Pre-algebra: Fractions",
        "relativeUrl": "/badges/pre-algebra-fractions",
        "icons": {
            "small": "https://www.kastatic.org/images/power-mode/badges/default-40x40.png?10",
            "compact": "https://www.kastatic.org/images/power-mode/badges/default-60x60.png?10",
            "large": "https://www.kastatic.org/images/power-mode/badges/default-250x250.png?10",
            "email": "https://www.kastatic.org/images/badges/master-challenge-blue-70x70.png"
        },
        "absoluteUrl": "https://www.khanacademy.org/badges/pre-algebra-fractions",
        "translatedSafeExtendedDescription": "Achieve mastery in all skills in Pre-algebra: Fractions",
        "translatedDescription": "Pre-algebra: Fractions",
        "isOwned": false,
        "badgeCategory": 5,
        "points": 0,
        "isRetired": false,
        "safeExtendedDescription": "Achieve mastery in all skills in Pre-algebra: Fractions",
        "slug": "pre-algebra-fractions",
        "name": "topic_exercise_xa64600f9_mastery"
    },
    {
        "iconSrc": "https://www.kastatic.org/images/power-mode/badges/default-40x40.png?10",
        "hideContext": false,
        "description": "Geometry: Analytic geometry",
        "relativeUrl": "/badges/geometry-analytic-geometry",
        "icons": {
            "small": "https://www.kastatic.org/images/power-mode/badges/default-40x40.png?10",
            "compact": "https://www.kastatic.org/images/power-mode/badges/default-60x60.png?10",
            "large": "https://www.kastatic.org/images/power-mode/badges/default-250x250.png?10",
            "email": "https://www.kastatic.org/images/badges/master-challenge-blue-70x70.png"
        },
        "absoluteUrl": "https://www.khanacademy.org/badges/geometry-analytic-geometry",
        "translatedSafeExtendedDescription": "Achieve mastery in all skills in Geometry: Analytic geometry",
        "translatedDescription": "Geometry: Analytic geometry",
        "isOwned": false,
        "badgeCategory": 5,
        "points": 0,
        "isRetired": false,
        "safeExtendedDescription": "Achieve mastery in all skills in Geometry: Analytic geometry",
        "slug": "geometry-analytic-geometry",
        "name": "topic_exercise_xaf60b762_mastery"
    },
    {
        "iconSrc": "https://www.kastatic.org/images/power-mode/badges/default-40x40.png?10",
        "hideContext": false,
        "description": "Trigonometry: Graphs of trig functions",
        "relativeUrl": "/badges/trigonometry-graphs-of-trig-functions",
        "icons": {
            "small": "https://www.kastatic.org/images/power-mode/badges/default-40x40.png?10",
            "compact": "https://www.kastatic.org/images/power-mode/badges/default-60x60.png?10",
            "large": "https://www.kastatic.org/images/power-mode/badges/default-250x250.png?10",
            "email": "https://www.kastatic.org/images/badges/master-challenge-blue-70x70.png"
        },
        "absoluteUrl": "https://www.khanacademy.org/badges/trigonometry-graphs-of-trig-functions",
        "translatedSafeExtendedDescription": "Achieve mastery in all skills in Trigonometry: Graphs of trig functions",
        "translatedDescription": "Trigonometry: Graphs of trig functions",
        "isOwned": false,
        "badgeCategory": 5,
        "points": 0,
        "isRetired": false,
        "safeExtendedDescription": "Achieve mastery in all skills in Trigonometry: Graphs of trig functions",
        "slug": "trigonometry-graphs-of-trig-functions",
        "name": "topic_exercise_xb1166488_mastery"
    },
    {
        "iconSrc": "https://www.kastatic.org/images/power-mode/badges/default-40x40.png?10",
        "hideContext": false,
        "description": "3rd grade (U.S.): Place value and rounding",
        "relativeUrl": "/badges/3rd-grade-us-place-value-and-rounding",
        "icons": {
            "small": "https://www.kastatic.org/images/power-mode/badges/default-40x40.png?10",
            "compact": "https://www.kastatic.org/images/power-mode/badges/default-60x60.png?10",
            "large": "https://www.kastatic.org/images/power-mode/badges/default-250x250.png?10",
            "email": "https://www.kastatic.org/images/badges/master-challenge-blue-70x70.png"
        },
        "absoluteUrl": "https://www.khanacademy.org/badges/3rd-grade-us-place-value-and-rounding",
        "translatedSafeExtendedDescription": "Achieve mastery in all skills in 3rd grade (U.S.): Place value and rounding",
        "translatedDescription": "3rd grade (U.S.): Place value and rounding",
        "isOwned": false,
        "badgeCategory": 5,
        "points": 0,
        "isRetired": false,
        "safeExtendedDescription": "Achieve mastery in all skills in 3rd grade (U.S.): Place value and rounding",
        "slug": "3rd-grade-us-place-value-and-rounding",
        "name": "topic_exercise_xb514f3b9_mastery"
    },
    {
        "iconSrc": "https://www.kastatic.org/images/power-mode/badges/multiplication-division-40x40.png?10",
        "hideContext": false,
        "description": "4th grade (U.S.): Multiplication and division",
        "relativeUrl": "/badges/4th-grade-us-multiplication-and-division",
        "icons": {
            "small": "https://www.kastatic.org/images/power-mode/badges/multiplication-division-40x40.png?10",
            "compact": "https://www.kastatic.org/images/power-mode/badges/multiplication-division-60x60.png?10",
            "large": "https://www.kastatic.org/images/power-mode/badges/multiplication-division-250x250.png?10",
            "email": "https://www.kastatic.org/images/badges/master-challenge-blue-70x70.png"
        },
        "absoluteUrl": "https://www.khanacademy.org/badges/4th-grade-us-multiplication-and-division",
        "translatedSafeExtendedDescription": "Achieve mastery in all skills in 4th grade (U.S.): Multiplication and division",
        "translatedDescription": "4th grade (U.S.): Multiplication and division",
        "isOwned": false,
        "badgeCategory": 5,
        "points": 0,
        "isRetired": false,
        "safeExtendedDescription": "Achieve mastery in all skills in 4th grade (U.S.): Multiplication and division",
        "slug": "4th-grade-us-multiplication-and-division",
        "name": "topic_exercise_xb55cb073_mastery"
    },
    {
        "iconSrc": "https://www.kastatic.org/images/power-mode/badges/default-40x40.png?10",
        "hideContext": false,
        "description": "7th grade (U.S.): Fractions and decimals",
        "relativeUrl": "/badges/7th-grade-us-fractions-and-decimals",
        "icons": {
            "small": "https://www.kastatic.org/images/power-mode/badges/default-40x40.png?10",
            "compact": "https://www.kastatic.org/images/power-mode/badges/default-60x60.png?10",
            "large": "https://www.kastatic.org/images/power-mode/badges/default-250x250.png?10",
            "email": "https://www.kastatic.org/images/badges/master-challenge-blue-70x70.png"
        },
        "absoluteUrl": "https://www.khanacademy.org/badges/7th-grade-us-fractions-and-decimals",
        "translatedSafeExtendedDescription": "Achieve mastery in all skills in 7th grade (U.S.): Fractions and decimals",
        "translatedDescription": "7th grade (U.S.): Fractions and decimals",
        "isOwned": false,
        "badgeCategory": 5,
        "points": 0,
        "isRetired": false,
        "safeExtendedDescription": "Achieve mastery in all skills in 7th grade (U.S.): Fractions and decimals",
        "slug": "7th-grade-us-fractions-and-decimals",
        "name": "topic_exercise_xbee72d33_mastery"
    },
    {
        "iconSrc": "https://www.kastatic.org/images/power-mode/badges/geometry-40x40.png?10",
        "hideContext": false,
        "description": "7th grade (U.S.): Geometry",
        "relativeUrl": "/badges/7th-grade-us-geometry",
        "icons": {
            "small": "https://www.kastatic.org/images/power-mode/badges/geometry-40x40.png?10",
            "compact": "https://www.kastatic.org/images/power-mode/badges/geometry-60x60.png?10",
            "large": "https://www.kastatic.org/images/power-mode/badges/geometry-250x250.png?10",
            "email": "https://www.kastatic.org/images/badges/master-challenge-blue-70x70.png"
        },
        "absoluteUrl": "https://www.khanacademy.org/badges/7th-grade-us-geometry",
        "translatedSafeExtendedDescription": "Achieve mastery in all skills in 7th grade (U.S.): Geometry",
        "translatedDescription": "7th grade (U.S.): Geometry",
        "isOwned": false,
        "badgeCategory": 5,
        "points": 0,
        "isRetired": false,
        "safeExtendedDescription": "Achieve mastery in all skills in 7th grade (U.S.): Geometry",
        "slug": "7th-grade-us-geometry",
        "name": "topic_exercise_xc1a4d524_mastery"
    },
    {
        "iconSrc": "https://www.kastatic.org/images/power-mode/badges/default-40x40.png?10",
        "hideContext": false,
        "description": "8th grade (U.S.): Relationships and functions",
        "relativeUrl": "/badges/8th-grade-us-relationships-and-functions",
        "icons": {
            "small": "https://www.kastatic.org/images/power-mode/badges/default-40x40.png?10",
            "compact": "https://www.kastatic.org/images/power-mode/badges/default-60x60.png?10",
            "large": "https://www.kastatic.org/images/power-mode/badges/default-250x250.png?10",
            "email": "https://www.kastatic.org/images/badges/master-challenge-blue-70x70.png"
        },
        "absoluteUrl": "https://www.khanacademy.org/badges/8th-grade-us-relationships-and-functions",
        "translatedSafeExtendedDescription": "Achieve mastery in all skills in 8th grade (U.S.): Relationships and functions",
        "translatedDescription": "8th grade (U.S.): Relationships and functions",
        "isOwned": false,
        "badgeCategory": 5,
        "points": 0,
        "isRetired": false,
        "safeExtendedDescription": "Achieve mastery in all skills in 8th grade (U.S.): Relationships and functions",
        "slug": "8th-grade-us-relationships-and-functions",
        "name": "topic_exercise_xc44ef069_mastery"
    },
    {
        "iconSrc": "https://www.kastatic.org/images/power-mode/badges/quadrilaterals-and-polygons-40x40.png?10",
        "hideContext": false,
        "description": "Geometry: Quadrilaterals ",
        "relativeUrl": "/badges/geometry-quadrilaterals",
        "icons": {
            "small": "https://www.kastatic.org/images/power-mode/badges/quadrilaterals-and-polygons-40x40.png?10",
            "compact": "https://www.kastatic.org/images/power-mode/badges/quadrilaterals-and-polygons-60x60.png?10",
            "large": "https://www.kastatic.org/images/power-mode/badges/quadrilaterals-and-polygons-250x250.png?10",
            "email": "https://www.kastatic.org/images/badges/master-challenge-blue-70x70.png"
        },
        "absoluteUrl": "https://www.khanacademy.org/badges/geometry-quadrilaterals",
        "translatedSafeExtendedDescription": "Achieve mastery in all skills in Geometry: Quadrilaterals ",
        "translatedDescription": "Geometry: Quadrilaterals ",
        "isOwned": false,
        "badgeCategory": 5,
        "points": 0,
        "isRetired": false,
        "safeExtendedDescription": "Achieve mastery in all skills in Geometry: Quadrilaterals ",
        "slug": "geometry-quadrilaterals",
        "name": "topic_exercise_xc6b8f425_mastery"
    },
    {
        "iconSrc": "https://www.kastatic.org/images/power-mode/badges/default-40x40.png?10",
        "hideContext": false,
        "description": "Pre-algebra: Measurement",
        "relativeUrl": "/badges/pre-algebra-measurement",
        "icons": {
            "small": "https://www.kastatic.org/images/power-mode/badges/default-40x40.png?10",
            "compact": "https://www.kastatic.org/images/power-mode/badges/default-60x60.png?10",
            "large": "https://www.kastatic.org/images/power-mode/badges/default-250x250.png?10",
            "email": "https://www.kastatic.org/images/badges/master-challenge-blue-70x70.png"
        },
        "absoluteUrl": "https://www.khanacademy.org/badges/pre-algebra-measurement",
        "translatedSafeExtendedDescription": "Achieve mastery in all skills in Pre-algebra: Measurement",
        "translatedDescription": "Pre-algebra: Measurement",
        "isOwned": false,
        "badgeCategory": 5,
        "points": 0,
        "isRetired": false,
        "safeExtendedDescription": "Achieve mastery in all skills in Pre-algebra: Measurement",
        "slug": "pre-algebra-measurement",
        "name": "topic_exercise_xc850a7c9_mastery"
    },
    {
        "iconSrc": "https://www.kastatic.org/images/power-mode/badges/default-40x40.png?10",
        "hideContext": false,
        "description": "Precalculus: Limits",
        "relativeUrl": "/badges/precalculus-limits",
        "icons": {
            "small": "https://www.kastatic.org/images/power-mode/badges/default-40x40.png?10",
            "compact": "https://www.kastatic.org/images/power-mode/badges/default-60x60.png?10",
            "large": "https://www.kastatic.org/images/power-mode/badges/default-250x250.png?10",
            "email": "https://www.kastatic.org/images/badges/master-challenge-blue-70x70.png"
        },
        "absoluteUrl": "https://www.khanacademy.org/badges/precalculus-limits",
        "translatedSafeExtendedDescription": "Achieve mastery in all skills in Precalculus: Limits",
        "translatedDescription": "Precalculus: Limits",
        "isOwned": false,
        "badgeCategory": 5,
        "points": 0,
        "isRetired": false,
        "safeExtendedDescription": "Achieve mastery in all skills in Precalculus: Limits",
        "slug": "precalculus-limits",
        "name": "topic_exercise_xccdba2de_mastery"
    },
    {
        "iconSrc": "https://www.kastatic.org/images/power-mode/badges/geometry-40x40.png?10",
        "hideContext": false,
        "description": "4th grade (U.S.): Geometry",
        "relativeUrl": "/badges/4th-grade-us-geometry",
        "icons": {
            "small": "https://www.kastatic.org/images/power-mode/badges/geometry-40x40.png?10",
            "compact": "https://www.kastatic.org/images/power-mode/badges/geometry-60x60.png?10",
            "large": "https://www.kastatic.org/images/power-mode/badges/geometry-250x250.png?10",
            "email": "https://www.kastatic.org/images/badges/master-challenge-blue-70x70.png"
        },
        "absoluteUrl": "https://www.khanacademy.org/badges/4th-grade-us-geometry",
        "translatedSafeExtendedDescription": "Achieve mastery in all skills in 4th grade (U.S.): Geometry",
        "translatedDescription": "4th grade (U.S.): Geometry",
        "isOwned": false,
        "badgeCategory": 5,
        "points": 0,
        "isRetired": false,
        "safeExtendedDescription": "Achieve mastery in all skills in 4th grade (U.S.): Geometry",
        "slug": "4th-grade-us-geometry",
        "name": "topic_exercise_xd796b5cb_mastery"
    },
    {
        "iconSrc": "https://www.kastatic.org/images/power-mode/badges/default-40x40.png?10",
        "hideContext": false,
        "description": "Algebra I: Ratios and proportions",
        "relativeUrl": "/badges/algebra-i-ratios-and-proportions",
        "icons": {
            "small": "https://www.kastatic.org/images/power-mode/badges/default-40x40.png?10",
            "compact": "https://www.kastatic.org/images/power-mode/badges/default-60x60.png?10",
            "large": "https://www.kastatic.org/images/power-mode/badges/default-250x250.png?10",
            "email": "https://www.kastatic.org/images/badges/master-challenge-blue-70x70.png"
        },
        "absoluteUrl": "https://www.khanacademy.org/badges/algebra-i-ratios-and-proportions",
        "translatedSafeExtendedDescription": "Achieve mastery in all skills in Algebra I: Ratios and proportions",
        "translatedDescription": "Algebra I: Ratios and proportions",
        "isOwned": false,
        "badgeCategory": 5,
        "points": 0,
        "isRetired": false,
        "safeExtendedDescription": "Achieve mastery in all skills in Algebra I: Ratios and proportions",
        "slug": "algebra-i-ratios-and-proportions",
        "name": "topic_exercise_xdd7aa21f_mastery"
    },
    {
        "iconSrc": "https://www.kastatic.org/images/power-mode/badges/default-40x40.png?10",
        "hideContext": false,
        "description": "5th grade (U.S.): Place value and decimals",
        "relativeUrl": "/badges/5th-grade-us-place-value-and-decimals",
        "icons": {
            "small": "https://www.kastatic.org/images/power-mode/badges/default-40x40.png?10",
            "compact": "https://www.kastatic.org/images/power-mode/badges/default-60x60.png?10",
            "large": "https://www.kastatic.org/images/power-mode/badges/default-250x250.png?10",
            "email": "https://www.kastatic.org/images/badges/master-challenge-blue-70x70.png"
        },
        "absoluteUrl": "https://www.khanacademy.org/badges/5th-grade-us-place-value-and-decimals",
        "translatedSafeExtendedDescription": "Achieve mastery in all skills in 5th grade (U.S.): Place value and decimals",
        "translatedDescription": "5th grade (U.S.): Place value and decimals",
        "isOwned": false,
        "badgeCategory": 5,
        "points": 0,
        "isRetired": false,
        "safeExtendedDescription": "Achieve mastery in all skills in 5th grade (U.S.): Place value and decimals",
        "slug": "5th-grade-us-place-value-and-decimals",
        "name": "topic_exercise_xdd840283_mastery"
    },
    {
        "iconSrc": "https://www.kastatic.org/images/power-mode/badges/default-40x40.png?10",
        "hideContext": false,
        "description": "8th grade (U.S.): Solving equations",
        "relativeUrl": "/badges/8th-grade-us-solving-equations",
        "icons": {
            "small": "https://www.kastatic.org/images/power-mode/badges/default-40x40.png?10",
            "compact": "https://www.kastatic.org/images/power-mode/badges/default-60x60.png?10",
            "large": "https://www.kastatic.org/images/power-mode/badges/default-250x250.png?10",
            "email": "https://www.kastatic.org/images/badges/master-challenge-blue-70x70.png"
        },
        "absoluteUrl": "https://www.khanacademy.org/badges/8th-grade-us-solving-equations",
        "translatedSafeExtendedDescription": "Achieve mastery in all skills in 8th grade (U.S.): Solving equations",
        "translatedDescription": "8th grade (U.S.): Solving equations",
        "isOwned": false,
        "badgeCategory": 5,
        "points": 0,
        "isRetired": false,
        "safeExtendedDescription": "Achieve mastery in all skills in 8th grade (U.S.): Solving equations",
        "slug": "8th-grade-us-solving-equations",
        "name": "topic_exercise_xdffae55c_mastery"
    },
    {
        "iconSrc": "https://www.kastatic.org/images/power-mode/badges/default-40x40.png?10",
        "hideContext": false,
        "description": "8th grade (U.S.): Data and modeling",
        "relativeUrl": "/badges/8th-grade-us-data-and-modeling",
        "icons": {
            "small": "https://www.kastatic.org/images/power-mode/badges/default-40x40.png?10",
            "compact": "https://www.kastatic.org/images/power-mode/badges/default-60x60.png?10",
            "large": "https://www.kastatic.org/images/power-mode/badges/default-250x250.png?10",
            "email": "https://www.kastatic.org/images/badges/master-challenge-blue-70x70.png"
        },
        "absoluteUrl": "https://www.khanacademy.org/badges/8th-grade-us-data-and-modeling",
        "translatedSafeExtendedDescription": "Achieve mastery in all skills in 8th grade (U.S.): Data and modeling",
        "translatedDescription": "8th grade (U.S.): Data and modeling",
        "isOwned": false,
        "badgeCategory": 5,
        "points": 0,
        "isRetired": false,
        "safeExtendedDescription": "Achieve mastery in all skills in 8th grade (U.S.): Data and modeling",
        "slug": "8th-grade-us-data-and-modeling",
        "name": "topic_exercise_xe83906b3_mastery"
    },
    {
        "iconSrc": "https://www.kastatic.org/images/power-mode/badges/default-40x40.png?10",
        "hideContext": false,
        "description": "Precalculus: Sequences, series and induction",
        "relativeUrl": "/badges/precalculus-sequences-series-and-induction",
        "icons": {
            "small": "https://www.kastatic.org/images/power-mode/badges/default-40x40.png?10",
            "compact": "https://www.kastatic.org/images/power-mode/badges/default-60x60.png?10",
            "large": "https://www.kastatic.org/images/power-mode/badges/default-250x250.png?10",
            "email": "https://www.kastatic.org/images/badges/master-challenge-blue-70x70.png"
        },
        "absoluteUrl": "https://www.khanacademy.org/badges/precalculus-sequences-series-and-induction",
        "translatedSafeExtendedDescription": "Achieve mastery in all skills in Precalculus: Sequences, series and induction",
        "translatedDescription": "Precalculus: Sequences, series and induction",
        "isOwned": false,
        "badgeCategory": 5,
        "points": 0,
        "isRetired": false,
        "safeExtendedDescription": "Achieve mastery in all skills in Precalculus: Sequences, series and induction",
        "slug": "precalculus-sequences-series-and-induction",
        "name": "topic_exercise_xef1dc391_mastery"
    },
    {
        "iconSrc": "https://www.kastatic.org/images/power-mode/badges/default-40x40.png?10",
        "hideContext": false,
        "description": "Algebra II: Imaginary and complex numbers",
        "relativeUrl": "/badges/algebra-ii-imaginary-and-complex-numbers",
        "icons": {
            "small": "https://www.kastatic.org/images/power-mode/badges/default-40x40.png?10",
            "compact": "https://www.kastatic.org/images/power-mode/badges/default-60x60.png?10",
            "large": "https://www.kastatic.org/images/power-mode/badges/default-250x250.png?10",
            "email": "https://www.kastatic.org/images/badges/master-challenge-blue-70x70.png"
        },
        "absoluteUrl": "https://www.khanacademy.org/badges/algebra-ii-imaginary-and-complex-numbers",
        "translatedSafeExtendedDescription": "Achieve mastery in all skills in Algebra II: Imaginary and complex numbers",
        "translatedDescription": "Algebra II: Imaginary and complex numbers",
        "isOwned": false,
        "badgeCategory": 5,
        "points": 0,
        "isRetired": false,
        "safeExtendedDescription": "Achieve mastery in all skills in Algebra II: Imaginary and complex numbers",
        "slug": "algebra-ii-imaginary-and-complex-numbers",
        "name": "topic_exercise_xf380b814_mastery"
    },
    {
        "iconSrc": "https://www.kastatic.org/images/power-mode/badges/default-40x40.png?10",
        "hideContext": false,
        "description": "6th grade (U.S.): Arithmetic operations",
        "relativeUrl": "/badges/6th-grade-us-arithmetic-operations",
        "icons": {
            "small": "https://www.kastatic.org/images/power-mode/badges/default-40x40.png?10",
            "compact": "https://www.kastatic.org/images/power-mode/badges/default-60x60.png?10",
            "large": "https://www.kastatic.org/images/power-mode/badges/default-250x250.png?10",
            "email": "https://www.kastatic.org/images/badges/master-challenge-blue-70x70.png"
        },
        "absoluteUrl": "https://www.khanacademy.org/badges/6th-grade-us-arithmetic-operations",
        "translatedSafeExtendedDescription": "Achieve mastery in all skills in 6th grade (U.S.): Arithmetic operations",
        "translatedDescription": "6th grade (U.S.): Arithmetic operations",
        "isOwned": false,
        "badgeCategory": 5,
        "points": 0,
        "isRetired": false,
        "safeExtendedDescription": "Achieve mastery in all skills in 6th grade (U.S.): Arithmetic operations",
        "slug": "6th-grade-us-arithmetic-operations",
        "name": "topic_exercise_xf5815416_mastery"
    },
    {
        "iconSrc": "https://www.kastatic.org/images/power-mode/badges/geometry-40x40.png?10",
        "hideContext": false,
        "description": "6th grade (U.S.): Geometry",
        "relativeUrl": "/badges/6th-grade-us-geometry",
        "icons": {
            "small": "https://www.kastatic.org/images/power-mode/badges/geometry-40x40.png?10",
            "compact": "https://www.kastatic.org/images/power-mode/badges/geometry-60x60.png?10",
            "large": "https://www.kastatic.org/images/power-mode/badges/geometry-250x250.png?10",
            "email": "https://www.kastatic.org/images/badges/master-challenge-blue-70x70.png"
        },
        "absoluteUrl": "https://www.khanacademy.org/badges/6th-grade-us-geometry",
        "translatedSafeExtendedDescription": "Achieve mastery in all skills in 6th grade (U.S.): Geometry",
        "translatedDescription": "6th grade (U.S.): Geometry",
        "isOwned": false,
        "badgeCategory": 5,
        "points": 0,
        "isRetired": false,
        "safeExtendedDescription": "Achieve mastery in all skills in 6th grade (U.S.): Geometry",
        "slug": "6th-grade-us-geometry",
        "name": "topic_exercise_xfa626edb_mastery"
    },
    {
        "iconSrc": "https://www.kastatic.org/images/power-mode/badges/fractions-40x40.png?10",
        "hideContext": false,
        "description": "4th grade (U.S.): Fractions",
        "relativeUrl": "/badges/4th-grade-us-fractions",
        "icons": {
            "small": "https://www.kastatic.org/images/power-mode/badges/fractions-40x40.png?10",
            "compact": "https://www.kastatic.org/images/power-mode/badges/fractions-60x60.png?10",
            "large": "https://www.kastatic.org/images/power-mode/badges/fractions-250x250.png?10",
            "email": "https://www.kastatic.org/images/badges/master-challenge-blue-70x70.png"
        },
        "absoluteUrl": "https://www.khanacademy.org/badges/4th-grade-us-fractions",
        "translatedSafeExtendedDescription": "Achieve mastery in all skills in 4th grade (U.S.): Fractions",
        "translatedDescription": "4th grade (U.S.): Fractions",
        "isOwned": false,
        "badgeCategory": 5,
        "points": 0,
        "isRetired": false,
        "safeExtendedDescription": "Achieve mastery in all skills in 4th grade (U.S.): Fractions",
        "slug": "4th-grade-us-fractions",
        "name": "topic_exercise_xfaed0f99_mastery"
    },
    {
        "iconSrc": "https://www.kastatic.org/images/power-mode/badges/quadratics-40x40.png?10",
        "hideContext": false,
        "description": "Algebra I: Quadratic equations",
        "relativeUrl": "/badges/algebra-i-quadratic-equations",
        "icons": {
            "small": "https://www.kastatic.org/images/power-mode/badges/quadratics-40x40.png?10",
            "compact": "https://www.kastatic.org/images/power-mode/badges/quadratics-60x60.png?10",
            "large": "https://www.kastatic.org/images/power-mode/badges/quadratics-250x250.png?10",
            "email": "https://www.kastatic.org/images/badges/master-challenge-blue-70x70.png"
        },
        "absoluteUrl": "https://www.khanacademy.org/badges/algebra-i-quadratic-equations",
        "translatedSafeExtendedDescription": "Achieve mastery in all skills in Algebra I: Quadratic equations",
        "translatedDescription": "Algebra I: Quadratic equations",
        "isOwned": false,
        "badgeCategory": 5,
        "points": 0,
        "isRetired": false,
        "safeExtendedDescription": "Achieve mastery in all skills in Algebra I: Quadratic equations",
        "slug": "algebra-i-quadratic-equations",
        "name": "topic_exercise_y5BHNHK0E9Xa6CyfEhZaIfDRkevXobYlkPt0Pk_G_mastery"
    },
    {
        "iconSrc": "https://www.kastatic.org/images/power-mode/badges/default-40x40.png?10",
        "hideContext": false,
        "description": "Probability and statistics: Random variables and probability distributions",
        "relativeUrl": "/badges/probability-and-statistics-random-variables-and-probability-distributions",
        "icons": {
            "small": "https://www.kastatic.org/images/power-mode/badges/default-40x40.png?10",
            "compact": "https://www.kastatic.org/images/power-mode/badges/default-60x60.png?10",
            "large": "https://www.kastatic.org/images/power-mode/badges/default-250x250.png?10",
            "email": "https://www.kastatic.org/images/badges/master-challenge-blue-70x70.png"
        },
        "absoluteUrl": "https://www.khanacademy.org/badges/probability-and-statistics-random-variables-and-probability-distributions",
        "translatedSafeExtendedDescription": "Achieve mastery in all skills in Probability and statistics: Random variables and probability distributions",
        "translatedDescription": "Probability and statistics: Random variables and probability distributions",
        "isOwned": false,
        "badgeCategory": 5,
        "points": 0,
        "isRetired": false,
        "safeExtendedDescription": "Achieve mastery in all skills in Probability and statistics: Random variables and probability distributions",
        "slug": "probability-and-statistics-random-variables-and-probability-distributions",
        "name": "topic_exercise_yJft0qf5s2n5Ie4UEx4OL8sPACeQLJAAv-Zox2pF_mastery"
    },
    {
        "iconSrc": "https://www.kastatic.org/images/power-mode/badges/default-40x40.png?10",
        "hideContext": false,
        "description": "Algebra II: Functions and their graphs",
        "relativeUrl": "/badges/algebra-ii-functions-and-their-graphs",
        "icons": {
            "small": "https://www.kastatic.org/images/power-mode/badges/default-40x40.png?10",
            "compact": "https://www.kastatic.org/images/power-mode/badges/default-60x60.png?10",
            "large": "https://www.kastatic.org/images/power-mode/badges/default-250x250.png?10",
            "email": "https://www.kastatic.org/images/badges/master-challenge-blue-70x70.png"
        },
        "absoluteUrl": "https://www.khanacademy.org/badges/algebra-ii-functions-and-their-graphs",
        "translatedSafeExtendedDescription": "Achieve mastery in all skills in Algebra II: Functions and their graphs",
        "translatedDescription": "Algebra II: Functions and their graphs",
        "isOwned": false,
        "badgeCategory": 5,
        "points": 0,
        "isRetired": false,
        "safeExtendedDescription": "Achieve mastery in all skills in Algebra II: Functions and their graphs",
        "slug": "algebra-ii-functions-and-their-graphs",
        "name": "topic_exercise_zfwxjShmJ1KJaukMHfnhtDiqU2b5y4K8l1Fywbi0_mastery"
    }
]
},{}],3:[function(require,module,exports){
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

},{"./badge-explorer":1,"./badges.json":2}]},{},[3]);
