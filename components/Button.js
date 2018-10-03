import Link from "next/link";
import { Button } from "antd";

export default ({ href, text, bgColor, btnType, btnIcon, hrefAs }) => (
  <Button style={{ backgroundColor: bgColor }} type={btnType} icon={btnIcon}>
    <Link href={href} as={hrefAs}>
      <a style={{ color: "inherit", marginLeft: btnIcon && "10px" }}>{text}</a>
    </Link>
  </Button>
);
