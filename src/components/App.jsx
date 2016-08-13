class App extends React.Component {
  constructor(props) {
    super(props);
    var cb = function(data) {
      this.setState({playing: data[0], videos: data});
    };
    var options = {key: window.YOUTUBE_API_KEY, part: 'snippet', q: 'Adele'};
    this.props.searchYouTube(options, cb.bind(this));
    this.state = null;
  }

  componentWillMount () {
    var options = {key: window.YOUTUBE_API_KEY, part: 'snippet', q: 'Adele'};
    var cb = function(data) {
      this.setState({playing: data[0], videos: data});
    };
    this.serverRequest = searchYouTube(options, cb.bind(this)); 
  }

  playThis (video) {
    this.setState({
      playing: video
    });
  }

  render () {
    if (!this.state) {
      return (<div className="video-player video-list form-control"></div>);
    } else {
      return (<div>
        <Nav />
        <div className="col-md-7">
          <div><VideoPlayer video={this.state.playing} /></div>     
        </div>
        <div className="col-md-5">
          <VideoList playThis={this.playThis.bind(this)} videos={this.state.videos}/>
        </div>
      </div>);
    }
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
