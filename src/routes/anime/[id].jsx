import { A } from "solid-start";
import { createRouteData, useRouteData } from "solid-start";
import Hero from "~/components/Hero";

export const routeData = ({ params }) => {
  return createRouteData(
    async key => {
      const res = await fetch(`https://api.jikan.moe/v4/anime/${key}/full`);
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
  const anime = useRouteData();

  return (
    <>
      <Show when={anime()}>
        <Hero featured={anime()} type="anime" />
      </Show>
      <section class="section-s flow bg-primary-700 text-primary-100">
        <h2>Watch The Trailer</h2>
        <Show when={anime()}>
          <div class="container">
            <iframe
              class="frame"
              src={anime()?.trailer?.embed_url}
              frameborder="0"
            ></iframe>
          </div>
        </Show>
      </section>
    </>
  );
};

export default Index;
