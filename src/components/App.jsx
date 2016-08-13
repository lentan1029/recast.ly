class App extends React.Component {
  constructor(props) {
    super(props);

    // this.props.searchYouTube();
    // this.setState({playing: window.exampleVideoData[0]});
    // this.playThis(window.exampleVideoData[0]);
    searchYouTube({key: window.YOUTUBE_API_KEY, part: 'snippet', q: 'Adele'}, this.youTubeOnReady.bind(this));

    this.state = {
      playing: window.exampleVideoData[0],
      videos: window.exampleVideoData
    };
  }

  youTubeOnReady (playing, videos) {
    this.setState({
      playing: playing,
      videos: videos
    });
  }

  playThis (video) {
    this.setState({
      playing: video
    });
  }

  render () {
    return (<div>
      <Nav />
      <div className="col-md-7">
        <VideoPlayer video={this.state ? this.state.playing : null} />
      </div>
      <div className="col-md-5">
        <VideoList playThis={this.playThis.bind(this)} videos={this.state.videos}/>
      </div>
    </div>);
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
