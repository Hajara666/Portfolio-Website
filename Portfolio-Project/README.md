# Portfolio Website
I want to create this **Portfolio project** to provide a platform to showcase my python projects and relevant skills.

In this project I've used Bootstrap Framework as it saves time from writing a lot of CSS code and Bootstrap is developed mobile first, a strategy in which we optimize code for mobile devices first and then scale up components as necessary using CSS media queries.

## What is Bootstrap?
Bootstrap is a popular front-end CSS framework which is used to develop responsive and mobile friendly websites. The latest release of Bootstrap is version 5. You can find the official documentation of Bootstrap 5 [here](https://getbootstrap.com/docs/5.0/getting-started/introduction/ "Bootstrap 5").

## Folder structure
The folder structure consists of _index.html_, _style.css_, and _script.js_ files and an _images_ folder. We'll write all CSS in the _style.css_ file and the JavaScript in the _script.js_ file .

### HTML file
In the index.html file, the HTML boilerplate code is with the Bootstrap CDN, font awesome kit, and a link to the external style sheet and JavaScript.

Here, the script.js file is loaded after loading all the HTML code, before closing the <body> tag.

#### Steps of adding tags in the HTML file

1. Add a Navigation Menu

    It contains the links to the following sections:
    * Home
    * About
    * Portfolio
    * Contact

2. Add a Hero Header

    It includes the following tags:
    * Hero Image
    * Hero Title
    * Hero description

3. Add a About section

    It has some details about:
    * A quick introduction
    * My goal

4. Add a Portfolio section

    It has some Bootstrap cards to display the follwing projects:
    * Hangman Game
    * Quiz App
    * Web scraping Project
    * World Happiness Report

5. Add a Contact section

    It has 2 divisions:

    1. Embed the Google Map by doing the following steps:

    * go to https://www.embed-map.com
    * enter your location
    * click on the Generate HTML Code button which will provide your Google Map HTML Code

    2. Add a Contact Form

        It takes the following contact detailes:
    * First name
    * Last name
    * Email
    * Message

6. Add a Footer section

    It has links to the social media through font awesome CDN
    * Facebook
    * LinkedIn

### JavaScript file

    1. For the Contact form data the following steps are done:
        * Field values collection
        * Validation of the values
            * Field value is not empty
            * Email is valid
        * If there is any error, user is informed about that
        * If the Validation successful, user is informed about the completion
        * A new User object is created with the field values

    2. Add some Background Color to Navbar on Page Scroll which is transparent at first


### Further improvements to this project

Now that we have the Front-End part of our Portfolio Website, we can work on Back-End side.

    Following steps should be done:
    * Keep the contact data in a database
    * Deploy the Portfolio Website















