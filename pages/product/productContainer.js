import { withRouter } from "next/router";
import ProductPresenter from "./productPresenter";

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
    console.log(this.props.id);
    return <ProductPresenter />;
  }
}

export default withRouter(ProductContainer);
