import { Query } from "react-apollo";
import CartPresenter from "./cartPresenter";
import { CART_QUERY } from "./cartQueries";

const supportedCarts = [
  {
    supportedMethods: "basic-card",
    data: {
      supportedNetworks: [
        "visa",
        "mastercard",
        "unionpay",
        "discover",
        "diners"
      ],
      supportedTypes: ["debit", "credit"]
    }
  }
];

export default class extends React.Component {
  render() {
    return (
      <Query query={CART_QUERY}>
        {({ data }) => {
          this.cartInfo = data;
          return <CartPresenter data={data} onPay={this._onPay} />;
        }}
      </Query>
    );
  }

  _onPay = () => {
    const items = this.cartInfo.cart.map(product => {
      return {
        label: product.label,
        amount: {
          currency: "USD",
          value: product.price
        }
      };
    });
    const total = this.cartInfo.cart.reduce(
      (price, product) => price + product.price,
      0
    );
    const paymentRequest = new PaymentRequest(supportedCarts, {
      items,
      total: {
        label: "Total Price",
        amount: { currency: "USD", value: total }
      }
    });
    paymentRequest.show();
  };
}
