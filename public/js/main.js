// Load in dependencies
var BadgeExplorer = require('./badge-explorer');

// TODO: Instead of hardcoding this info, fetch it from the API at
// https://www.khanacademy.org/api/v1/badges?casing=camel and
// https://www.khanacademy.org/api/v1/badges/categories?casing=camel
// TODO: Make this page not always render the same badge
var virusBadge = {
    'description': 'Virus',
    'icons': {
        'small': 'https://www.khanacademy.org/images/badges/meteorite/virus-40x40.png',
        'compact': 'https://www.khanacademy.org/images/badges/meteorite/virus-60x60.png',
        'large': 'https://www.khanacademy.org/images/badges/meteorite/virus-512x512.png',
        'email': 'https://www.khanacademy.org/images/badges/meteorite/virus-70x70.png'
    },
    'absoluteUrl': 'https://www.khanacademy.org/badges/virus',
    'badgeCategory': 0,
    'points': 0,
    'safeExtendedDescription': 'Share a program you\'ve created via Facebook, Twitter, or email',
    'slug': 'virus'
};

// Initialize our badge explorer against the body and render the virus badge
var explorer = new BadgeExplorer(document.body);
explorer.render(virusBadge);
