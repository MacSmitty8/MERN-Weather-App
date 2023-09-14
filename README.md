## Introduction & Technologies Used
Hello, and thanks for checking out my project. This is a weather app using MERN-Stack, which consists of using Node, Express, MongoDB/Mongoose for the backend, while the frontend consts of using React, HTML, CSS, and JavaScript. This project also uses a weather API, where if you search by a place by ZIP Code, location, lagtitude and longtitude, you can get the weather for whichever location you searched. However for this project, it uses the zip code as it's main search entry.

API Link : https://rapidapi.com/weatherapi/api/weatherapi-com

UI Based on Windows Weather App: https://imgur.com/NB0bcjL

Image of the App in Action
[Example](https://cdn.discordapp.com/attachments/307293805395181579/1151876161434034257/Screenshot_2023-09-14_092034.jpg)
## Getting Started/Trello
Link to Trello information below.
https://trello.com/invite/b/Zo3bM7sQ/ATTIabb222c25ce52e20eda7c464f0fbf8584F86ACC7/weather-app

## Available Scripts

If you wish to run both the frontend and the back end, use 'npm run dev'. I've installed concurrently in the package-json and made it so that it runs both the frontend and the backend simultaneously.

## Unsolved Problems
At this time of typing, registering a user doesn't seem to work when done from the reigster page. And the login page doesn't seem to do the trick also.
I also originally intended on having the weather icons but ran out of time trying to figure out how it would work with this one.

At some point I ran into an error saying I violated the CORS Policy. We haven't talked about this in class, so I was struggling to figure out how to handle it, until I found out about installing cors into the program. While it went away, I'm not sure if it'll happen again.
## Future Enhancements
Due to the fact that I did not properly plan this project out and was struggling with a majority of it, I didn't have much time to make the web pages look distinct and visually appealing. So next I'd like to make the visual looks of the website more distinct. 

Also, because I didn't plan out properly and due to a lack of understanding about MERN-Stack and the backend, some of the routes probably don't work as intended.

I also originally intended on having weather forecasts for later days in the week, like in many weather forecast apps and news, but I had a lot of trouble getting the infoformation to display so I had to settle for one day in particular.

I also wanted have the icon for the weather along side everything else but I ran out of time figuring how to make it work for this API.