import {
  createRouteData,
  useRouteData,
  useSearchParams,
  Title
} from "solid-start";
import Card from "~/components/Card";
import Filter from "~/components/Filter";
import { ANIME_FILTERS, TITLE } from "~/site";

export const routeData = ({ location }) => {
  return createRouteData(
    async key => {
      const res = await fetch(
        `https://api.jikan.moe/v4/top/anime?type=tv?page=${key[0] || 1}${
          key[1] ? `&filter=${key[1]}` : ""
        }`
      );
      return await res.json();
    },
    {
      key: () => [location.query.page, location.query.filter],
      initialValue: {}
    }
  );
};

const Index = () => {
  const anime = useRouteData();
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <>
      <Title>Anime | {TITLE}</Title>
      <section class="flow">
        <Filter filters={ANIME_FILTERS} onChange={setSearchParams} />
        <div class="grid gap-s">
          <For each={anime()?.data}>
            {a => (
              <Card
                title={a.title}
                img={
                  a.images.webp
                    ? a.images.webp.image_url
                    : a.images.jpg.image_url
                }
                link={`/anime/${a.mal_id}`}
              />
            )}
          </For>
        </div>
      </section>
    </>
  );
};

export default Index;
