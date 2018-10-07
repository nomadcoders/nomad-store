import Link from "next/link";
import { Card, Icon } from "antd";
const { Meta } = Card;

const Text = ({ text }) => <span style={{ color: "black" }}>{text}</span>;

export default ({ id, name, subtitle, photoUrl }) => (
  <div style={{ marginBottom: "25px" }}>
    <Link href={`/product?id=${id}`} as={`/product/${id}`}>
      <a>
        <Card
          hoverable
          actions={[<Icon type="eye" theme="outlined" />]}
          cover={<img alt="example" src={photoUrl} />}
        >
          <Meta
            title={<Text text={name} />}
            description={<Text text={subtitle} />}
          />
        </Card>
      </a>
    </Link>
  </div>
);
