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

Some ways of coding that works in css does not transfer well into react. It needs a specific sytax for style. 

## React Part 2: Reactivity

This was a lot of fun to see it all come together. I had to keep remembering to use React state instead of just manipulating the DOM directly.

Handling the toggling of the checkboxes was particularly interesting.

```jsx
<div className="input-group sound-button-container">
  {calmSoundTypes.map((sound, index) => (
    <div key={index} className="form-check form-switch">
      <input
        className="form-check-input"
        type="checkbox"
        value={sound}
        id={sound}
        onChange={() => togglePlay(sound)}
        checked={selectedSounds.includes(sound)}
      ></input>
      <label className="form-check-label" htmlFor={sound}>
        {sound}
      </label>
    </div>
  ))}
</div>
```
