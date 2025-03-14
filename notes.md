# CS 260 Notes

[My startup - Pop Depot](https://popdepot.click)

## Helpful links

- [Course instruction](https://github.com/webprogramming260)
- [Canvas](https://byu.instructure.com)
- [MDN](https://developer.mozilla.org)

## AWS

My IP address is: 52.22.153.238 


## Caddy

No problems worked just like it said in the [instruction](https://github.com/webprogramming260/.github/blob/main/profile/webServers/https/https.md).

## HTML

Did not run into any issues while creating HTML. Try to experiment with HTML a bit more. Maybe instead of using the table tag, study up on how to successfully make a div table. This would help with accessbility. The most difficult page to create was the Blind Boxes page. Collection page has brown lines acting as shelves. Will this have to change to CSS? The break tags will also need to be removed. 

## CSS

Making one change often affected the entire page, but Bootstrap helped keep everything responsive. Margin and padding were crucial for the layout, though I initially used negative values to fix spacing issues. Eventually, I identified the root problems and resolved them properly. I’m feeling good about how my CSS looks, though I might adjust the colors for better accessibility. I also used Google Fonts to achieve a hand-drawn look.

## React Part 1: Routing

Some style of coding that works in css does not transfer well into react. Such as, it needs a specific syntax for style. React also helped me find areas where I never had a closing tag. I learned to not have multiple of the same css styles stored in different css files. This created a lot of breaks in the app. React helped me to see a lot of issues that I had in my HTML and CSS. Implementing React would have been a lot easier if I did everything correctly from the start, but I guess that is the process of learning.

## React Part 2: Reactivity

Important notes from reading:

-Use 'let' or 'const' to define variables.

-Use strict equality in your code.

-Have to internationalization startup?

-Long running, or blocking tasks, should be executed with the use of a JavaScript Promise.

-Hooks must be called at the top scope of the function and cannot be called inside of a loop or conditional. This restriction ensures that hooks are always called in the same order when a component is rendered.

Fun to see it working! Need to fix a few of the images as they do not sit correctly on the shelf. Thinking of adding a few more features to the collection page such as a remove button and maybe a max amount of figurines.

## Service

I did not do much research on my third party and thought it implemented everything that I wanted. When adding new third parties for the future, I plan on doing more research to make sure that the third party has all features needed. Following the Simon Service was helpful as I was able to see more what the code was doing and how to use apis and fetchs.
