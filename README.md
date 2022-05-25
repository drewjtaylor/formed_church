# "Formed Church" Website
## Author: Andrew Taylor

The goal of this project is to create a website for a new church I'm a part of.

Although it won't be exactly the same, I would like to emulate a lot of functionality and features from [this example](http://www.bldg28.com/)



### About placeholders

Currently I do not have a lot of actual content that will be for the actual site when it's done. In the meantime, I'm using placeholder images from the Instagram site of the church-planter, as well as some pictures of his famiy from the orginization that sponsors him: Assist Church Expansion.

### Home page

The home page greets visitors with a jumbotron at the top with the church name and logo (currently a placeholder created using font-awesome icons).

Under the jumbotron is a navbar that sticks to the top of the viewport as the user scrolls down. The navbar items are sorted by categories, and create drop-down menus when clicked. When it's complete, the site should have a page or link for each item in the navbar.

The content of the home page includes a carousel slide-show that will show pictures from the church, as well as brief blurbs about the church.

### Contact Us

On the contac page, I learned a valuable lesson--sometimes the bells and whistles are just distracting, and a simple design is best.

At one point I had a version of this page where there were background diagonal colors, and a lightened box behind the form to make it stand out. At the end of the day, it looked worse than just a white background with a tried-and-true bootstrap form (not to mention the extra work.)

The main thing to remember here is to visualize what you want before you get in too deep--and if you can't, then it might be best to just keep it simple!

Design elements aside, it is a simple bootstrap form with added checkboxes so the user can designate what kinds of communication they want or prefer.

### Fun extras

I stumbled upon what a "favicon" is when I noticed my browser was failing to load it. Apparently that's what the thing up on your browswer tab is called when a site has a custom image. There are several "favicon" creators out there that help easily make a small image that's just the right size.

I also accidentally changed a font to be slightly darker at one point. I ended up using this with the navbar links on "hover," to give a little visual feedback to what is being selected. This is another one of those small details I never actively thought about, but good websites frequently incorporate into their design.

### Using SASS variables

The "style.scss" file uses variables to set up a color palette for the rest of the pages. I also created custom classes to quickly apply these colors to text or backgrounds.