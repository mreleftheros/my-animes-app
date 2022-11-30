import { useRouteData, createRouteData, Title } from "solid-start";
import Carousel from "~/components/Carousel";
import Hero from "~/components/Hero";
import { TITLE } from "~/site";

export const routeData = () => {
  return createRouteData(async () => {
    const urls = [
      "https://api.jikan.moe/v4/top/anime?type=tv&filter=bypopularity",
      "https://api.jikan.moe/v4/top/manga?type=manga&filter=bypopularity",
      "https://api.jikan.moe/v4/random/anime"
    ];

    return await Promise.all(
      urls.map(u => fetch(u).then(res => res.json()))
    ).then(values => {
      return {
        anime: values[0].data,
        manga: values[1].data,
        featured: values[2].data
      };
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
        <Carousel type="anime" data={data()?.anime} />
        <Carousel type="manga" data={data()?.manga} link="/manga" />
      </Show>
    </>
  );
};

export default Index;
