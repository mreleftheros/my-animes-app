import { mergeProps, createSignal } from "solid-js";
import { A } from "solid-start";
import Card from "./Card";

const Carousel = props => {
  const [index, setIndex] = createSignal(1);
  const merged = mergeProps({ title: "", data: [], link: "/anime" }, props);
  const prev = () => (index() === 0 ? null : index() - 1);
  const next = () => (index() === merged.data.length - 1 ? null : index() + 1);

  const updateIndex = val => setIndex(prev => +val + prev);

  const resetIndex = () => setIndex(0);

  const setLastIndex = () => setIndex(merged.data.length - 1);

  return (
    <section class="section-s flow text-primary-900">
      <h2>{merged.title}</h2>
      <div class="carousel p-s rounded-s bg-primary-700">
        <Show when={merged.data.length > 0}>
          <Show
            when={prev() || prev() === 0}
            fallback={<div class="card"></div>}
          >
            <Card
              title={merged.data[prev()].title}
              img={
                merged.data[prev()].images.webp
                  ? merged.data[prev()].images.webp.image_url
                  : merged.data[prev()].images.jpg.image_url
              }
            />
          </Show>
          <Card
            title={merged.data[index()].title}
            img={
              merged.data[index()].images.webp
                ? merged.data[index()].images.webp.image_url
                : merged.data[index()].images.jpg.image_url
            }
          />
          <Show when={next()} fallback={<div class="card"></div>}>
            <Card
              title={merged.data[next()].title}
              img={
                merged.data[next()].images.webp
                  ? merged.data[next()].images.webp.image_url
                  : merged.data[next()].images.jpg.image_url
              }
            />
          </Show>
        </Show>
      </div>
      <div class="carousel-btns">
        <div class="carousel-btn-group">
          <button
            type="button"
            class="btn bg-primary-800 px-xl text-primary-100 rounded-l"
            aria-label="beginning of slides"
            onClick={resetIndex}
            classList={{ disabled: index() === 0 }}
            disabled={index() === 0}
          >
            «
          </button>
          <button
            type="button"
            class="btn bg-primary-800 px-xl text-primary-100 rounded-l"
            aria-label="previous slides"
            onClick={[updateIndex, -1]}
            classList={{ disabled: index() === 0 }}
            disabled={index() === 0}
          >
            ‹
          </button>
        </div>
        <div class="carousel-btn-group">
          <button
            type="button"
            class="btn bg-primary-800 px-xl text-primary-100 rounded-l"
            aria-label="next slides"
            onClick={() => setIndex(prev => prev + 1)}
            classList={{ disabled: index() === merged.data.length - 1 }}
            disabled={index() === merged.data.length - 1}
          >
            ›
          </button>
          <button
            type="button"
            class="btn bg-primary-800 px-xl text-primary-100 rounded-l"
            aria-label="end of slides"
            onClick={setLastIndex}
            classList={{ disabled: index() === merged.data.length - 1 }}
            disabled={index() === merged.data.length - 1}
          >
            »
          </button>
        </div>
      </div>

      <A href={merged.link}>
        <button type="button" class="mx-auto btn bg-secondary rounded-s">
          Explore All
        </button>
      </A>
    </section>
  );
};

export default Carousel;
