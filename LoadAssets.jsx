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
      _self.loadAsset(asset.uri, function(e) {
        loadedAssets++;
        if (loadedAssets == totalAssets) _self.setState({loaded: true});
      });
    });
  },

  loadAsset: function(uri, callback) {
    if (uri.toLowerCase().match("jpg|jpeg|gif|png") !== null) {
      var image = new Image();
      image.src = uri;
      image.onload = callback;
    }

    if (uri.toLowerCase().match("mp4|webm|ogv") !== null) {
      var video = document.createElement('video');
      var source = document.createElement('source'); 
      source.src = uri;
      video.setAttribute("preload", "auto");
      video.appendChild(source);
      video.addEventListener('canplaythrough', callback, false);
    }
  }, 

  render: function() {
    var output = [];

    if (!this.state.loaded) {
      // asset not loaded yet — loading UI
      output.push(<div className="ball-clip-rotate"></div>);
    } else {
      // asset fully loaded — show asset
      var assets = this.props.assets.map(function(asset) {
        // it's an image
        if (asset.uri.toLowerCase().match("jpg|jpeg|gif|png") !== null) {
          output.push(<img src={asset.uri} className={asset.className} />);
        }
        // it's a video
        if (asset.uri.toLowerCase().match("mp4|webm|ogv") !== null) {
          output.push(
            <video className={asset.className} >
              <source src={asset.uri} type="video/mp4" />
            </video>
          );
        }
      });
    }

    return (<div>{output}</div>); 
  }
});

module.exports = LoadAssets;
