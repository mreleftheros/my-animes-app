import { mergeProps } from "solid-js";
import { A } from "solid-start";

const Card = props => {
  const merged = mergeProps({ title: "", img: "", link: "/" }, props);

  return (
    <div class="card rounded-m hover">
      <A href={merged.link}>
        <div class="card-overlay bg-primary-900 p-s">
          <h4 class="card-title text-primary-50">{merged.title}</h4>
        </div>
        <img
          class="card-img"
          loading="lazy"
          src={merged.img}
          alt={merged.title}
        />
      </A>
    </div>
  );
};

export default Card;
