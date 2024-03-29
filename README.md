# khan-application
Application for Khan Academy

http://twolfson.github.io/khan-application/

If you would like to evaluate the compiled assets, please visit our [gh-pages branch][].

![Screenshot](docs/screenshot.png)

[gh-pages branch]: https://github.com/twolfson/khan-application/tree/gh-pages

## Getting started
To set up the project locally, run the following steps:

```bash
# Clone the repository
git clone https://github.com/twolfson/khan-application
cd khan-application

# Install development dependencies
npm install

# Build our HTML, CSS, and JS
npm run build
# Running "copy:public" (copy) task
# ...
# Done, without errors.

# Host the application locally
npm run serve
# serving /home/todd/github/khan-application/dist on por
```

A local development server should be running at [http://localhost:3000/][].

[http://localhost:3000/]: http://localhost:3000/

## Documentation
### Filesystem
The repositories filesystem is laid out as follows:

- `design-assets/` - Original mockups from the prompt
- `dist/` - Folder with compiled assets
- `docs/` - Folder for documentation related items (e.g. screenshots)
- `public/` - Folder with CSS, JS, and Jade
- `Gruntfile.js` - Configuration for `grunt`
- `release.sh` - Script that recompiles assets, creates/tags a semver'd commit, and publishes to `gh-pages`

### Development
We leverage `grunt` to handle downloading and compiling our assets. To run the build chain, use:

```bash
npm run build
```

Compiled assets can be viewed locally via `serve`.

```bash
npm run serve
```

A local development server should be running at [http://localhost:3000/][].

[http://localhost:3000/]: http://localhost:3000/

### Releasing
We use [`foundry`][] and [`buildbranch`][] to handle versioning and releasing.

`foundry` takes care of `git commit`, `git tag`, `package.json`, and pushing `commits` and `tags`.

`buildbranch` publishes the `dist/` (compiled via `npm run build`) to the `gh-pages` branch and pushes.

[`foundry`]: https://github.com/twolfson/foundry
[`buildbranch`]: https://github.com/nfroidure/buildbranch

## Brain dump
These are all the items occurred, I completed, and I wanted to complete during the exercise.

### Problems encountered
#### Anchors
Originally planned to use `anchors` for persisting location between pages. After playing with them, I realized I had to implement a different solution because clicking and the page jumping is not ideal.

### Architecture
#### Completed
- Badge explorer is standalone and can be unit tested
- Implemented reproducable build chain

#### Missing
- JS tests
    - Use `karma` to load `badge-explorer` and test it
- Visual regression tests
    - Open PhantomJS to a page, screenshot, click on a badge, screenshot, compare screenshots with expected results
    - http://twolfson.com/2014-02-25-visual-regression-testing-in-travis-ci
- Move all CSS to use OOCSS
    - Less content semantic and more presentation semantic

### Performance
#### Completed
- Delivered JSON with JS
    - No delay between page content and render waiting for external JS to download
- Minified HTML (automatically thanks to Jade)
- Stable sorted JSON data to make lookups for previous/next badges `O(1)`
- Moved CDN URL's from `https://` to  `//`
    - Uses same protocol as the current page
    - Removes HTTPS overhead

#### Missing
- Minify JS
  - Use a grunt plugin that leverages `uglifyjs2`
- Minified CSS
  - Use a `grunt` plugin for consistency
- Move all *small* badges into a spritesheet
  - Do not use the large ones because they are displayed one at a time and would waste unnecessary bandwidth
- Optimized images
  - Use `grunt-imagemin`
- Separate spritesheets for sets of badges
    - Load the first 2 immediately, then lazy load remaining sets in background
- Use SVG over PNG for better scaling and smaller weight
- Concatenate CDN JS/CSS with local CSS and host on another CDN
- Upload images to CDN
- Strip down JSON to what we need (e.g. delete most properties)
    - Smaller payload
    - Can be achieved now that we deliver the JSON with JS
- Move to map for resolving badges by `slug` instead of linear loop

### Design
#### Completed
- Implemented large display at top
- Added previous/next functionality
- Scroll to linked badge at start

#### Missing
- Responsive layout
    - I started working on this but ran out of time
    - ![Responsive screenshot](docs/responsive.png)
- Highlight selected element
    - There will be issus with hexagonal badges unless we find another way to indicate focus
- Consider doing a hover effect for each badge
- Crop category badge image because it is too tall

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint via [grunt](https://github.com/gruntjs/grunt).

## Unlicense
As of Nov 08 2014, Todd Wolfson has released this repository and its contents to the public domain.

It has been released under the [UNLICENSE][].

[UNLICENSE]: UNLICENSE
