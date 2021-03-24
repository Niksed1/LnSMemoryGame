# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: Alex Andrianova

Time spent: **6** hours spent in total

Link to project: (insert your link here, should start with https://glitch.com...)

## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each light up and play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [x] Buttons use a pitch (frequency) other than the ones in the tutorial
* [ ] More than 4 functional game buttons
* [ ] Playback speeds up on each turn
* [x] Computer picks a different pattern each time the game is played
* [x] Player only loses after 3 mistakes (instead of on the first mistake)
* [] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app!

## Video Walkthrough

Here's a walkthrough of implemented user stories:
![](https://cdn.glitch.com/e8704cab-e565-4533-9643-25850dbaeb19%2Flightnsoundgamewalkthrough.gif?v=1616617364581)


## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 

[stackoverflow, 
https://www.w3schools.com/
https://htmlcolorcodes.com/
Canva]

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 

[One of the challenges that took me a while to figure out was how to properly place an image above the button and style it the way I want. The tutorial suggested a seemingly simple <img> tag where you paste an image source, and it places an image somewhere on a website. I copy-pasted the image source into the <img> and yay it displayed a nice image after my paragraph text! Now I thought, I just need to place it inside the button, and it will be working. I was already dreaming of pictures for other buttons. However, to my surprise, putting an image inside the button tag has twisted it all over and instead of a full beautiful picture, you could only see a cropped amount in the top right corner. I did not get discouraged! I decided to simply edit it with some HTML markup, particularly style. I looked up countless StackOverflow threads to find how to style it, but the more I tried the funkier it looked! Besides, when I tried the style position that worked for the first button, but it did not work for the others. That is when I realized I need to diverge from the old, good <img> tag and look for other ways. I stumbled across a much easier way of putting an image using the property: value in CSS: “background-image: url(“link”)”. It worked fabulously and I altered the background-size as well to fit the image inside the button. In the end, it may not sound like the hardest thing to figure out, but it taught me an important lesson of being open-minded and curious to learn instead of fixating on just one answer. ]

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 

[Web Development is a big field to explore and create and I always look up to others who conquer it. With limited explosion to webDev, light and sound game has made me wonder about many things from javaScript language specifics to nuances in CSS styling. I would like to learn more about JavaScript callback functions, async and delay functions some of which were briefly touched in the game. I would like to understand the logic behind other things in web development like transactions, burger menus, website to database connection. My website looks quite simplistic, so it made me wonder how to make it fancier, add animations and other features in CSS that popular websites use.  Also, the sound on my website does not play outside of the Glitch so I would like to learn how to make pop-ups asking for permission to play it.]

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 

[With more time added, I would explore setTimeout() more and work on implementing lighting up buttons green if the user is correct. I would put the time in learning more about callbacks and how time is calculated in playClueSequence(). I would implement speeding up of the game after each win and track the wins down to place them as personal records after. I would import better samples to replace the sounds in the game. Finally, I would create a better layout for the website and style it nicer. ]



## License

    Copyright [Alex Andrianova]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.