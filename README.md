# Sargon Coding Test

## Process

- [x] Work out which flickr API endpoint to invoke
- [x] Work out how to use jsonp
- [x] Find a dependency that neatly abstracts jsonp 
- [x] Build a component to fetches data on user input
- [x] Map fields into an internal format for ease of rendering
- [x] Add debounce for when user inputs text to avoid jittery experience 
- [x] Figure out how to Render the results without spending too much time
- [ ] Implement viewing large images
- [ ] Implement rendering image text details
- [ ] Unit tests, which I feel are an important aspect of quality

## Assumptions / Decisions
- For the sake of simplicity, I assume Flickr always returns the following fields inside each item of the response:
    - author: string,
    - media: {m: string},
    - tags: string
- My background is more of backend development than front end styling hence I used an off the shelf library to render the gallery. Sadly it did not allow to easily add text to the images, and I did not have more time this weekend implement the rendering with text exactly as the task specified. Instead, I decided to demonstrate writing unit tests which is more in line with my strengths. I believe they are core to code quality.
- I split the form to follow container / component pattern to simplify code. This way the view component is focused on presentation, while container component is focused on data fetching. 
- I use builder pattern for test data generation, to reduce duplication in tests, and allow for test data customisation.
- For simplicity' sake I did not wrap my search box input into an HTML form to prevent default from behaviours such as submit on press of Enter
