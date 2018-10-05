import { Query } from "react-apollo";
import SearchPresenter from "./searchPresenter";
import { SEARCH_QUERY } from "./searchQueries";

export default class extends React.Component {
  state = {
    searchTerm: "",
    canSearch: false
  };
  render() {
    const { searchTerm, canSearch } = this.state;
    return (
      <Query skip={!canSearch} query={SEARCH_QUERY} variables={{ searchTerm }}>
        {({ data }) => (
          <SearchPresenter
            searchTerm={searchTerm}
            updateSearchTerm={this._updateSearchTerm}
            data={data}
          />
        )}
      </Query>
    );
  }
  _updateSearchTerm = event => {
    this.setState({ canSearch: false });
    clearTimeout(this.searchTimeout);
    const {
      target: { value }
    } = event;
    this.setState({
      searchTerm: value
    });
    this.searchTimeout = setTimeout(
      () => this.setState({ canSearch: true }),
      500
    );
  };
}
