import React from 'react';

var LoadAssets = React.createClass({
  getInitialState: function () {
    return {loaded: false};
  },

  componentDidMount: function () {
    var 
      _self = this, 
      totalAssets = this.props.assets.length, 
      loadedAssets = 0
    ;

    Array.prototype.forEach.call(this.props.assets, function(asset) {
      console.log("LoadAssets — asset to load", asset);
      _self.loadAsset(asset.uri, function(e) {
        loadedAssets++;
        if (loadedAssets == totalAssets) _self.setState({loaded: true});        
      });
    });
  },

  loadAsset: function(uri, callback) {
    var image = new Image();

    if (uri.toLowerCase().match("jpg|jpeg|gif|png") !== null) {
      image.src = uri;
      image.onload = callback;
    }
  }, 

  render: function() {
    if (!this.state.loaded) {
      // asset not loaded yet — loading UI
      return (
        <div className="ball-clip-rotate"></div>
      );
    } else {
      // asset fully loaded — show asset
      var outputAsset;
      var assets = this.props.assets.map(function(asset) {
        // it's an image
        if (asset.uri.toLowerCase().match("jpg|jpeg|gif|png") !== null) {
          outputAsset = <img src={asset.uri} className={asset.classNames} />;
        }
        // it's a video
        if (asset.uri.toLowerCase().match("mp4|webm|ogv") !== null) {
          outputAsset = <h1>this is a video</h1>;
        }
      });

      return outputAsset;
    }
  }
});

module.exports = LoadAssets;
