import { mergeProps } from "solid-js";

const Pagination = props => {
  const merged = mergeProps(
    { currentPage: 1, lastPage: 1, onPage: null },
    props
  );

  return (
    <div class="flex gap-m">
      <div class="flex gap-s">
        <button
          type="button"
          class="btn bg-primary-800 px-l text-primary-100 rounded-l"
          aria-label="start page"
          onClick={() => merged.onPage({ page: 1 })}
          classList={{ disabled: merged.currentPage === 1 }}
          disabled={merged.currentPage === 1}
        >
          «
        </button>
        <button
          type="button"
          class="btn bg-primary-800 px-l text-primary-100 rounded-l"
          aria-label="previous page"
          onClick={() => merged.onPage({ page: +merged.currentPage - 1 })}
          classList={{ disabled: merged.currentPage === 1 }}
          disabled={merged.currentPage === 1}
        >
          ‹
        </button>
      </div>
      <p>
        {merged.currentPage} / {merged.lastPage}
      </p>
      <div class="flex gap-s">
        <button
          type="button"
          class="btn bg-primary-800 px-l text-primary-100 rounded-l"
          aria-label="next page"
          onClick={() => merged.onPage({ page: +merged.currentPage + 1 })}
          classList={{ disabled: merged.currentPage === merged.lastPage }}
          disabled={merged.currentPage === merged.lastPage}
        >
          ›
        </button>
        <button
          type="button"
          class="btn bg-primary-800 px-l text-primary-100 rounded-l"
          aria-label="last page"
          onClick={() => merged.onPage({ page: +merged.lastPage })}
          classList={{ disabled: merged.currentPage === merged.lastPage }}
          disabled={merged.currentPage === merged.lastPage}
        >
          »
        </button>
      </div>
    </div>
  );
};

export default Pagination;
