import Link from "next/link";
import { Card, Icon } from "antd";
const { Meta } = Card;

export default ({ id, name, subtitle, photoUrl }) => (
  <div style={{ marginBottom: "25px" }}>
    <Card
      hoverable
      actions={[
        <Link href={`/product?id=${id}`} as={`/product/${id}`}>
          <a>
            <Icon type="eye" theme="outlined" />
          </a>
        </Link>
      ]}
      cover={<img alt="example" src={photoUrl} height={"200px"} />}
    >
      <Meta title={name} description={subtitle} />
    </Card>
  </div>
);
