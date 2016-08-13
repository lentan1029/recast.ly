var searchYouTube = (options = {key: window.YOUTUBE_API_KEY, part: 'snippet', query: 'Never Gonna Give You Up'}, callback) => {
  // TODO
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    dataType: 'json',
    data: options,
    success: function(data) {
      console.log(data.items);
      callback({playing: data.items[0], videos: data.items});
    },
    error: function(data, status, err) {
      console.log(data, status, err);
    }
  });
};

window.searchYouTube = searchYouTube;
