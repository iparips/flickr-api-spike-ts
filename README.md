# Sargon Coding Test

## Process

- [x] Work out what is the request format to search Flickr images:
    - `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=<key>&format=json&nojsoncallback=1&text=cats`[1]
    - Or the public feed with tag based search: https://www.flickr.com/services/feeds/photos_public.gne?tags=cats&format=json&nojsoncallback=1
    - https://github.com/gndplayground/flickr-public-feed/blob/69ae0f09edbb2fac95c2bff037ecde291bb2c7de/src/pages/Home.jsx
- [x] Build a component that fetches data on user input
- [ ] Map fields into internal format for ease of rendering (excluding inferring large image link)
- [ ] Render the results
- [ ] Implement viewing large images 
- [ ] Add debounce for when user inputs text to avoid jittery experience
- [ ] How to useCallback with use State?

## Assumptions
- For the sake of simplicity, I assume Flickr always returns the following fields inside each item of the response:
    - author: string,
    - media: {m: string},
    - tags: string
- I'm not putting emphasis on tests here, because the requirements did not say the interviewers are looking for tests. I added minimal testing for what I see as critical.


## Notes

### Flickr image url structure [3]
https://farm1.staticflickr.com/2/1418878_1e92283336_m.jpg

farm-id: 1
server-id: 2
photo-id: 1418878
secret: 1e92283336
size: m

Size codes
- b	large, 1024 on longest side*
- h	large 1600, 1600 on longest side†
- k	large 2048, 2048 on longest side†
- o	original image, either a jpg, gif or png, depending on source format

## References

1. https://github.com/Yog9/SnapShot/blob/master/src/context/PhotoContext.js
2. Getting jsonp data from flickr https://github.com/gndplayground/flickr-public-feed/blob/69ae0f09edbb2fac95c2bff037ecde291bb2c7de/src/pages/Home.jsx
3. https://www.flickr.com/services/api/misc.urls.html
