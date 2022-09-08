# "Formed Church" Website
## Author: Andrew Taylor

The goal of this project is to create a website for a new church in our area. In the future, at the time this is being written, I have an upcoming React class. I anticipate this "bootstrap-only" version will essentially be a first draft, and the React version will upgrade this project.

### Streamlined deployment preparation

This project is a simple, static, bootstrap-styled set of web pages. Since there is no server, the back-end design is theoretical.

That being said, the deployment of the site has been streamlined. After changes have been made to any content, running `npm run build` will do the following:
empty out the previous contents of the "dist" folder
compress image files
copy necessary assets/fonts to dist folder
uglify files (remove whitespace, change variables from whole words to arbitrary single characters)

Then the dist folder gets dropped off in a hosting site (Netlify in my case), and it's good to go!

The full code set up to run on `npm run build` is as follows:

    "scripts": {
            "build": "npm run clean && npm run imagemin && npm run copyfonts && npm run copyfiles && npm run usemin",
            "clean": "rimraf dist",
            "copyfonts": "copyfiles -f node_modules/font-awesome/fonts/* dist/webfonts && copyfiles -f node_modules/@fortawesome/fontawesome-free/webfonts/* dist/webfonts",
            "copyfiles": "copyfiles That-Man-Called-Jesus.pdf dist",
            "imagemin": "imagemin img/* -o dist/img",
            "lite": "lite-server",
            "start": "npm run watch:all",
            "test": "echo \"Error: no test specified\" && exit 1",
            "usemin": "usemin contactus.html -d dist --htmlmin -o dist/contactus.html && usemin index.html -d dist --htmlmin -o dist/index.html && usemin meetingtimes.html -d dist --htmlmin -o dist/meetingtimes.html && usemin ourmission.html -d dist --htmlmin -o dist/ourmission.html && usemin staff.html -d dist --htmlmin -o dist/staff.html && usemin whatwebelieve.html -d dist --htmlmin -o dist/whatwebelieve.html && usemin whyformedchurch.html -d dist --htmlmin -o dist/whyformedchurch.html && usemin js/intersection-observer.js -d dist -o dist/js/intersection-observer.js",
            "scss": "node-sass -o css/ css/",
            "watch:scss": "onchange \"css/*.scss\" -- npm run scss",
            "watch:all": "parallelshell \"npm run watch:scss\" \"npm run lite\""

### Home page

The home page greets visitors with a jumbotron-style banner at the top with the church name and logo (currently a placeholder created using font-awesome icons until the church-founder creates some branding content).

Under the jumbotron is a navbar that sticks to the top of the viewport as the user scrolls down. The navbar items are sorted by categories, and create drop-down menus when clicked.

The content of the home page includes a carousel slide-show that will show pictures from the church, as well as brief blurbs about the church. (Also waiting on church-founder to have different images for this carousel.)

### Contact Us

On the contact page, I learned a valuable lesson--sometimes the bells and whistles are just distracting, and a simple design is best.

At one point I had a version of this page where there were background diagonal colors, and a lightened box behind the form to make it stand out. At the end of the day, it looked worse than just a white background with a tried-and-true bootstrap form (not to mention it was wasted time trying to sort it out.)

The main lesson learned is to visualize the end goal before investing time and energy in implementing something that is likely to get cut, or not add much value. It might be best to just keep it simple!

Design elements aside, the contact form is a simple bootstrap form with added checkboxes so the user can designate what kinds of communication they want or prefer.

### Responsive

Using bootstrap meant it was fairly easy to design each element with mobile-users in mind. The most obvious change is that the nav-bar changes to a hamburger menu if the viewport is narrow enough, but each element adjusts accordingly, changing column sizes to keep an appealing layout.

### Fun extras

Subtle animations have been added to different elements. Since I created this project, I have found libraries that help with animation. However, on my first attempt, I found a [guide to using 
intersection-observer](https://www.youtube.com/watch?v=huVJW23JHKQ). The javascript involved setting up a listener to watch when the screen scrolls to a certain point. This observer then triggers the "appear" animation by taking all elements with the "fade-in" class, and toggling the "appear" class. While definitely more complicated than installing a library and applying some classes, I definitely gained understanding as to (at least one method) how appear animations work.

Another small detail I updated was the favicon (the tiny icon next to the site name on the tab). Any website will work fine withotu a favicon, but it definitely adds some finish to have some kind of branding in that spot.

I also accidentally changed a font to be slightly darker at one point. I ended up using this with the navbar links on "hover," to give a little visual feedback to what is being selected. This is another one of those small details I never actively thought about, but good websites frequently incorporate into their design.

I found a tool for generating HTMl for an embedded Google Map, and added it to the page regarding church meetings. The site can be found at https://google-map-generator.com/.

### Using SASS variables

The "style.scss" file uses variables to set up a color palette for the rest of the pages. I also created custom classes to quickly apply these colors to text or backgrounds.