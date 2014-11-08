# khan-application
Application for Khan Academy

http://twolfson.github.io/khan-application/

**Plan:**

- Implement basic with CSS sprites (because otherwise duplicate work)
- Start on responsive
- Use anchor for switching between pages
    - This will play nicely with mobile users
    - On mobile, display all content in scrollable format

### Performance
### Completed
- Delivered JSON with JS
    - No delay between page content and render waiting for external JS to download

#### Missing
- Minified HTML
- Minified CSS
- Optimized images
- Separate spritesheets for sets of badges
    - Load the first 2 immediately, then lazy load remaining sets in background
- Use SVG over PNG for better scaling and smaller weight
- Move CDN URL's to `//` over `https://`
- Concatenate CDN JS/CSS with local CSS and host on another CDN
- Strip down JSON to what we need
    - Smaller payload
    - Can be achieved now that we deliver the JSON with JS

**TODOs:**

- Check inline TODOs
- Relocate `.json` files to somewhere ideal (weird to load them for Jade from a `public/` directory

## Getting Started
Install the module with: `npm install khan-application`

```js
var khan_application = require('khan-application');
khan_application.awesome(); // "awesome"
```

## Documentation
_(Coming soon)_

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint via [grunt](https://github.com/gruntjs/grunt).

## Unlicense
As of Nov 08 2014, Todd Wolfson has released this repository and its contents to the public domain.

It has been released under the [UNLICENSE][].

[UNLICENSE]: UNLICENSE
