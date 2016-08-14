class Search extends React.Component {
  constructor (props) {
    super(props);

  }

  render () {
    return (<div className="search-bar form-inline">
        <input refs="query" onChange={this.handleInputChange.bind(this)} className="form-control" type="text" />
        <button className="btn">
          <span className="glyphicon glyphicon-search"></span>
        </button>
      </div> 
    );
  }

  handleInputChange (e) {
    this.props.inputHandler(e.target.value);
  }
}


// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;
