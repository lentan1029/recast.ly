class App extends React.Component {
  constructor(props) {
    super(props);

    // this.props.searchYouTube({key: window.YOUTUBE_API_KEY, part: 'snippet', q: 'Adele'}, this.youTubeOnReady.bind(this));

    this.state = {
      // playing: '',
      // videos: ''
      playing: {id:{videoId: ''}, snippet: {title: ''}},
      videos: [{id:{videoId: ''}, snippet: {title: '', thumbnails: {default: {url: ''}}}}]
    };
  }

  componentWillMount () {
    console.log('componentWillMount');
    var options = {key: window.YOUTUBE_API_KEY, part: 'snippet', q: 'Adele'};
    var flag = false;
    this.serverRequest = searchYouTube(options, this.setState.bind(this));
      // var context = this;
      // $.ajax({
      //   url: 'https://www.googleapis.com/youtube/v3/search',
      //   type: 'GET',
      //   dataType: 'json',
      //   data: options,
      //   success: function(data) {
      //     flag = true;
      //     context.setState({playing: data.items[0], videos: data.items});
      //     // callback(data.items[0], data.items);
      //     render()
      //   },
      //   error: function(data, status, err) {
      //     console.log(data, status, err);
      //   }
      // });
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
          <div><VideoPlayer video={this.state.playing} /></div>     
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
