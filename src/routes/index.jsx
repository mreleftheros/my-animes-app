import { createRouteData } from "solid-start";
import { Title } from "solid-start";
import { TITLE } from "~/data";

export const routeData = ({ location, params }) => {
  return createRouteData(() => {
    console.log(location, params);
  });
};

const Index = () => {
  return (
    <>
      <Title>Home | {TITLE}</Title>
      <h2>Home</h2>
    </>
  );
};

export default Index;
