import Head from "next/head";
import { Button as AntButton } from "antd";
import Header from "../../components/Header";
import Button from "../../components/Button";

export default ({ data }) => (
  <>
    <Head>
      <title>{data.product.name} | Nomad Store</title>
    </Head>
    <Header
      centerColumn={<h4>Product</h4>}
      rightColumn={<Button href="/cart" text="Cart" />}
      leftColumn={<Button href="/" text="Home" />}
    />
    <div className={"product"}>
      <img src={data.product.photo.url} />
      <div>
        <h2>{data.product.name}</h2>
        <h3>{data.product.detail}</h3>
        <h4>{data.product.description}</h4>
        <AntButton type="primary">
          Add to cart($
          {data.product.price})
        </AntButton>
      </div>
      <style jsx>{`
        .product {
          display: grid;
          margin: 50px 0px;
          padding: 0px 50px;
          grid-template-columns: repeat(2, 1fr);
          grid-gap: 50px;
        }
        .product img {
          max-width: 100%;
        }
      `}</style>
    </div>
  </>
);
