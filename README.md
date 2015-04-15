# React Asset Loader
Description here yo!


##Usage
For a single asset:

```javascript
<LoadAssets assets={[{"uri":"/static/images/asset.jpg"}]} />
```
Adding attributes:

```javascript
<LoadAssets assets={[{"uri":"/static/videos/jcrew/washed-shirt-rotation.mp4", "attributes":[{"autoPlay":"true"}, {"loop":"true"}]}]} />
```
Adding classes:

```javascript
<LoadAssets onLoad={this.onLipsVideosLoaded} assets={[{"uri":"/static/videos/jcrew/lips1.mp4", "className":"lips red"}]} />
```
## License
MIT Copyright (c) [Juan Cabrera](http://juan.me)