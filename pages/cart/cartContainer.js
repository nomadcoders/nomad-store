import { Query } from "react-apollo";
import CartPresenter from "./cartPresenter";
import { CART_QUERY } from "./cartQueries";

export default () => (
  <Query query={CART_QUERY}>
    {({ data }) => <CartPresenter data={data} />}
  </Query>
);
