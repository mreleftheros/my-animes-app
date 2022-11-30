import { createRouteData, useRouteData } from "solid-start";
import Hero from "~/components/Hero";

export const routeData = ({ params }) => {
  return createRouteData(
    async key => {
      const res = await fetch(`https://api.jikan.moe/v4/manga/${key}/full`);
      const { data } = await res.json();
      return data;
    },
    {
      initialValue: {},
      key: params.id
    }
  );
};

const Index = () => {
  const manga = useRouteData();

  return (
    <>
      <Show when={manga()}>
        <Hero featured={manga()} type="manga" />
      </Show>
    </>
  );
};

export default Index;
