import { useRouteData, createRouteData, Title } from "solid-start";
import Hero from "~/components/Hero";
import { TITLE } from "~/site";

export const routeData = () => {
  return createRouteData(async () => {
    const urls = [
      "https://api.jikan.moe/v4/top/anime?type=tv&filter=bypopularity",
      "https://api.jikan.moe/v4/top/manga?type=manga&filter=bypopularity"
    ];

    return await Promise.all(
      urls.map(u => fetch(u).then(res => res.json()))
    ).then(values => {
      const allItems = [...values[0].data, ...values[1].data];
      const featured = allItems[Math.floor(Math.random() * allItems.length)];
      return { allItems, featured };
    });
  });
};

const Index = () => {
  const data = useRouteData();

  return (
    <>
      <Title>Home | {TITLE}</Title>
      <Show when={data()}>
        <Hero featured={data()?.featured} />
      </Show>
    </>
  );
};

export default Index;
