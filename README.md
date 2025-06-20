Wrangling the Robertson’s Reviews is a website that:
•	Shares recipes and honest opinions about local businesses, travel experiences, and DIY projects.
•	Offers guests the option to submit suggestions for the latest reviews and add reviews of their own using forms and ratings.
URL:
•	https://sotd.us/jenniferrobertson2/M6P/public/index.html
https://mariejennifer77.github.io/MobileApplicationDevelopment/index.html

Site Map/ Structure
/
├── index.html          # Homepage
├── about.html          # Site and family background
├── local.html          # Local reviews 
├── recipes.html        # List of family recipes with thumbnails
├── DIY.html            # House renovation stories and images
├── travel.html         # Reviews of travel destinations
├── input.html          # Form for adding user reviews and suggestions
├── layout.js           # JS for navbar and favorites
├── contact.js          # JS for contact form
├── styles.css          # Site-wide styling
└── /images             # Icons, food, photos used in content

Buttons and Interactions by Page:
index.html (Home)
Navbar Items (loaded via jQuery):
1.	Back: Goes to the previous browser page.
2.	Home: Reloads this page.
3.	Local: opens local.html
4.	 Recipes: opens recipes.html
5.	 DIY: opens DIY.html.
6.	 Travel: opens travel.html
7.	 About: opens about.html
8.	 User Additions: opens input.html.
Footer items (loaded via jQuery):
Facebook icon: opens Wrangling the Robertson’s Facebook page.
Instagram icon: opens Wrangling the Robertson’s Instagram page.
YouTube icon: opens Wrangling the Robertson’s YouTube page.
Mail icon: Opens Outlook with wranglingtherobertson@gmail.com prepopulated as the addressee.
Contact us button (loaded via jQuery)
It opens a form that collects Names, Emails, Selections, Messages, notification preferences, and a submit button.
Clickable Images:
Recipe book: opens recipes.html in a new browser tab.
Amusement park: opens www.cedarpoint.com in a new tab.
Glory days: opens https://www.facebook.com/glorydaysbarbershop in a new tab.
Globe: opens https://www.universalorlando.com/web/en/us in a new tab

local.html
Highlights community-focused locations and reviews.
Navbar Items (loaded via jQuery):
Footer items (loaded via jQuery):
Contact us button (loaded via jQuery)

Clickable Images:
Barber with little boy: opens  https://www.galesburg.com/picture-gallery/business/2014/03/31/galesburg-barbershops/435856007/ in a new browser tab.
A picture of a young man before his haircut opens a larger picture in a new tab.
A picture of a young man after a haircut opens a larger picture in a new tab.
Glory days: opens https://www.facebook.com/glorydaysbarbershop in a new tab.
recipes.html
Displays recipes with images and instructions.
Navbar Items (loaded via jQuery):
Footer items (loaded via jQuery):
Contact us button (loaded via jQuery)

Clickable Images:
Each image opens a larger picture in a new tab.
Each icon opens a larger picture of the recipe in a new tab.
DIY.html
Gallery of DIY project images and text
Navbar Items (loaded via jQuery):
Footer items (loaded via jQuery):

Clickable Images:
Each image opens a larger picture in a new tab.

travel.html
Robertson family trips and recommended destinations.
Navbar Items (loaded via jQuery):
Footer items (loaded via jQuery):
Contact us button (loaded via jQuery)

Clickable Images:
Each image opens a larger picture in a new tab.
Globe: opens https://www.universalorlando.com/web/en/us in a new tab

about.html
Short bio of the family
Navbar Items (loaded via jQuery):
Footer items (loaded via jQuery):
Clickable Images:
Each image opens a larger picture in a new tab.
input.html (User Additions)
Form Input Fields:
Allows users to submit a review, recipe, or idea.
Stores data in localStorage and shows a confirmation message.
