// TODO: Render the `App` component to the DOM


ReactDOM.render(<App searchYouTube={_.debounce(window.searchYouTube, 500)} />, document.getElementById('app'));
//test this comment should update itself