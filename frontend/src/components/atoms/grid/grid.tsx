import { Row, Col, RowProps, ColProps } from "antd";

export function CenterCenterRow({ ...props }: Readonly<RowProps>) {
  return <Row align="middle" justify="center" {...props} />;
}

export function CenterCenterCol({ ...props }: Readonly<ColProps>) {
  return (
    <Col
      style={{
        textAlign: "center",
      }}
      {...props}
    />
  );
}

export function TextCenterCol({ ...props }: Readonly<ColProps>) {
  return <Col style={{ textAlign: "center" }} {...props} />;
}
