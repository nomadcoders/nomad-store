import { Query, Mutation } from "react-apollo";
import { withRouter } from "next/router";
import ProductPresenter from "./productPresenter";
import { PRODUCT_QUERY, TOGGLE_CART } from "./productQueries";

class ProductContainer extends React.Component {
  static async getInitialProps(props) {
    const {
      query: { id }
    } = props;
    return {
      id
    };
  }
  render() {
    const { id } = this.props;
    return (
      <Query query={PRODUCT_QUERY} variables={{ id }}>
        {({ data }) => (
          <Mutation mutation={TOGGLE_CART} variables={{ id }}>
            {toggleCart => (
              <ProductPresenter data={data} toggleCart={toggleCart} />
            )}
          </Mutation>
        )}
      </Query>
    );
  }
}

export default withRouter(ProductContainer);
