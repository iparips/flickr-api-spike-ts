# Sargon Coding Test

## Process

- [ ] Get Flickr API key
- [ ] Work out what is the request format to search Flickr images:
    - `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=<key>&format=json&nojsoncallback=1&text=cats`[1]
    - Or the public feed with tag based search: https://www.flickr.com/services/feeds/photos_public.gne?tags=cats&format=json&nojsoncallback=1
    - https://github.com/gndplayground/flickr-public-feed/blob/69ae0f09edbb2fac95c2bff037ecde291bb2c7de/src/pages/Home.jsx
- [ ] Build a container component that does the data fetch

## References

1. https://github.com/Yog9/SnapShot/blob/master/src/context/PhotoContext.js
2. Getting jsonp data from flickr https://github.com/gndplayground/flickr-public-feed/blob/69ae0f09edbb2fac95c2bff037ecde291bb2c7de/src/pages/Home.jsx