import Head from "next/head";
import Header from "../../components/Header";
import Button from "../../components/Button";
import { Button as AntButton } from "antd";
import ProductCard from "../../components/ProductCard";

const reducerFn = (price, product) => price + product.price;

export default ({ data }) => (
  <>
    <Head>
      <title>Cart | Nomad Store</title>
    </Head>
    <Header
      centerColumn={<h4>Cart</h4>}
      rightColumn={<Button href="/" text="Home" />}
      leftColumn={<Button href="/search" text="Search" />}
    />
    <div
      style={{
        marginBottom: "50px",
        display: "grid",
        gridGap: "10px",
        gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
        width: "100%",
        padding: "0 50px"
      }}
    >
      {data &&
        data.cart &&
        data.cart.map(product => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            subtitle={product.detail}
            price={product.price}
            photoUrl={product.photo.url}
            price={product.price}
          />
        ))}
    </div>
    <div style={{ padding: "0px 50px" }}>
      <h3>
        Total price: {data && data.cart && data.cart.reduce(reducerFn, 0)}
      </h3>
      <AntButton>Check out</AntButton>
    </div>
  </>
);
