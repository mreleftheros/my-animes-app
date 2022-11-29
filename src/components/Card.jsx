import { mergeProps } from "solid-js";

const Card = props => {
  const merged = mergeProps({ title: "", img: "", main: true }, props);

  return (
    <div class="card rounded-m hover">
      <div class="card-overlay bg-primary-900 p-s">
      <h4 class="card-title text-primary-50">{merged.title}</h4>
      </div>
      <img
        class="card-img"
        src={merged.img}
        alt={merged.title}
      />
    </div>
  );
};

export default Card;
