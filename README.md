# React Asset Loader
A simple react component for loading assets. It allows you to load from a single asset to multiple assets without affecting the pageload speed. You can also add custom classes, attributes and callback functions.

## Concept
We all get scared of heavy websites, there are tons and tons of articles telling us why we shouldn't build websites using heavy assets like videos or gifs. But sometimes, you just need to, sometimes you just need to build a cool interactive experience with videos, or so something cool with gifs, or a long page with lots of high quality images, etc. This component is precisely for that.

## How it works.
This component allows you to load all the assets you want without affecting the pageload speed, this is because it will load the page and then it will start loading all the assets, it adds a `<div className="loading"></div>` wrapper while it's loading the asset so you can have a nice custom loader, when the assets are loaded it will replace the `loading` wrapper with the actual assets.

## Install
```
npm install react-asset-loader --save-dev
```
Or just grab the component [LoadAsset.js](https://raw.githubusercontent.com/juancabrera/react-asset-loader/master/LoadAssets.js) directly.

## Usage
#### Load a single asset.

```javascript
<LoadAssets assets={[{"uri":"/static/images/asset.jpg"}]} />
```
#### Load multiple assets.
When you need to load more than one asset for one experience. It will be loadad after all the assets passed are loaded.

```javascript
<LoadAssets assets={[{"uri":"/static/videos/video1.mp4"}, {"uri":"/static/videos/video2.mp4"}]} />

// or also

var videos = [
  {"uri":"/static/videos/video1.mp4"}, 
  {"uri":"/static/videos/video2.mp4"}
]
<LoadAssets assets={videos} />
```
#### Adding classes.
You can add classes to each asset you pass to the component.

```javascript
<LoadAssets assets={[{"uri":"/static/images/asset.jpg", "className":"class1 class2"}]} />
```
#### Adding attributes.
You can also add attributes to each asset you pass to the component.

```javascript
<LoadAssets assets={[{"uri":"/static/videos/video.mp4", "attributes":[{"autoPlay":"true"}, {"loop":"true"}]}]} />

// or also

var video = [{
  "uri":"/static/videos/video.mp4", 
  "attributes": [
    {"autoPlay":"true"}, 
    {"loop":"true"}
  ]
}]
<LoadAssets assets={video} />
```
#### Custom onLoad callback.
You can have a custom callback for when your assets are loaded. 

```javascript
<LoadAssets onLoad={this.onCoolVideoLoaded} assets={[{"uri":"/static/videos/video.mp4"}]} />
```

## Examples
You'll need a webserver in order to run the examples (CORS). The quickest way to do this is just run this on the project folder:

```python -m SimpleHTTPServer```
## Feedback and contributions
Are more than welcome. 👊

## License
MIT Copyright (c) [Juan Cabrera](http://juan.me)