var searchYouTube = (options, callback) => {
  // TODO
  options.q = options.q || options.query || 'Never Gonna Give You Up';
  options.maxResults = options.maxResults || options.max || 5;
  options.key = options.key || window.YOUTUBE_API_KEY;
  options.part = options.part || 'snippet';
  options.type = options.type || 'video';
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    dataType: 'json',
    data: options,
    success: function(data) {
      callback(data.items);
    },
    error: function(data, status, err) {
    }
  });
};

window.searchYouTube = searchYouTube;
