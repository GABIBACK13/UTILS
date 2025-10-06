import * as React from "react";

export interface IHomeProps {}

export default function Home(props: IHomeProps = {}) {
  console.log(props);
  return (
    <div>
      <img src="/images/person.webp" alt="image of Gabriel Back" className="border" />
    </div>
  );
}
