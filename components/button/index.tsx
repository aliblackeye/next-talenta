import React from "react";

type Status = "primary" | "secondary" | "success" | "danger" | "white";

interface Props {
  status?: Status;
  text: string;
}

export default function Button(props: Props) {
  const { status = "primary", text } = props;

  return <button className={`btn btn-${status}`}>{text}</button>;
}
