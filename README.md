# React Asset Loader
Description here yo!


## Usage
Load a single asset:

```javascript
<LoadAssets assets={[{"uri":"/static/images/asset.jpg"}]} />
```
Load multiple assets:

```javascript
<LoadAssets assets={[{"uri":"/static/images/video.mp4"}, {"uri":"/static/images/video.webm"}]} />

// or also

var video = [
  {"uri":"/static/images/video.mp4"}, 
  {"uri":"/static/images/video.webm"}
]
<LoadAssets assets={video} />
```
Adding classes:

```javascript
<LoadAssets assets={[{"uri":"/static/images/asset.jpg", "className":"class1 class2"}]} />
```
Adding attributes:

```javascript
<LoadAssets assets={[{"uri":"/static/images/video.mp4", "attributes":[{"autoPlay":"true"}, {"loop":"true"}]}]} />

// or also

var video = [{
  "uri":"/static/images/video.mp4", 
  "attributes": [
    {"autoPlay":"true"}, 
    {"loop":"true"}
  ]
}]
<LoadAssets assets={video} />
```
Custom onLoad callback:

```javascript
<LoadAssets onLoad={this.onCoolVideoLoaded} assets={[{"uri":"/static/images/video.mp4"}]} />
```

## License
MIT Copyright (c) [Juan Cabrera](http://juan.me)