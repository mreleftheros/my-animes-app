import {
  createRouteData,
  useRouteData,
  useSearchParams,
  Title
} from "solid-start";
import Card from "~/components/Card";
import Filter from "~/components/Filter";
import Pagination from "~/components/Pagination";
import { MANGA_FILTERS, TITLE } from "~/site";

export const routeData = ({ location }) => {
  return createRouteData(
    async key => {
      const res = await fetch(
        `https://api.jikan.moe/v4/top/manga?type=manga&page=${key[0] || 1}${
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
  const manga = useRouteData();
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <>
      <Title>Manga | {TITLE}</Title>
      <section class="flow">
        <Filter filters={MANGA_FILTERS} onChange={setSearchParams} />
        <div class="flow bg-primary-600 px-s py-l rounded-s">
          <p>
            <em>
              {manga()?.pagination &&
                `${manga()?.pagination.items.total} results found`}
            </em>
          </p>
          <Pagination
            currentPage={manga()?.pagination?.current_page}
            lastPage={
              manga()?.pagination && manga().pagination.last_visible_page
            }
            onPage={setSearchParams}
          />
          <div class="grid gap-s">
            <For each={manga()?.data}>
              {m => (
                <Card
                  title={m.title}
                  img={
                    m.images.webp
                      ? m.images.webp.image_url
                      : m.images.jpg.image_url
                  }
                  link={`/manga/${m.mal_id}`}
                />
              )}
            </For>
          </div>
          <Pagination
            currentPage={manga()?.pagination && manga().pagination.current_page}
            lastPage={
              manga()?.pagination && manga().pagination.last_visible_page
            }
            onPage={setSearchParams}
          />
        </div>
      </section>
    </>
  );
};

export default Index;
