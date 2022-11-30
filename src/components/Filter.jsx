import { createEffect, createSignal } from "solid-js";

const Filter = props => {
  const [filter, setFilter] = createSignal(props.filters[0].value);

  const updateFilter = ({ target }) => setFilter(target.value);

  createEffect(() => props.onChange({ filter: filter() }));

  return (
    <form>
      <div class="flex gap-m bg-primary-800 p-s rounded-m text-primary-100">
        <label class="filter-label" htmlFor="filter">Filter by:</label>
        <div class="filter-select">
          <select
            id="filter"
            onChange={updateFilter}
            value={filter()}
            class="filter-select-input py-s pl-s pr-xl rounded-l"
          >
            <For each={props.filters}>
              {f => <option value={f.value}>{f.name}</option>}
            </For>
          </select>
        </div>
      </div>
    </form>
  );
};

export default Filter;
