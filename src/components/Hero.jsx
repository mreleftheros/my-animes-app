import emptyStars from "~/assets/empty-stars.png";
import filledStars from "~/assets/filled-stars.png";

const Hero = props => {
  return (
    <section class="hero p-s">
      <div>
        <img
          src={
            props.featured?.images?.webp
              ? props.featured.images.webp.large_image_url
              : props.featured?.images?.jpg?.large_image_url
          }
          alt="hero image"
          height={450}
          width={350}
          class="hero-img rounded-s"
        />
        <figure class="hero-figure"></figure>
      </div>
      <div class="py-xl text-primary-50 flow hero-box">
        <h2>
          {props.featured.title} ({props.featured.year})
        </h2>
        <div class="hero-rating">
          <div class="hero-stars hero-empty-stars">
            <div
              class="hero-stars hero-filled-stars"
              style={{ width: `${(props.featured.score / 10) * 100}%` }}></div>
          </div>
        </div>
        <span>{props.featured.scored_by} ratings</span>
        <p>
          <em>{props.featured.genres.map(g => g.name).join(", ")}</em>
        </p>
        <p>{props.featured.episodes} episodes</p>
        <p class={`${props.featured.airing ? "text-success" : "text-error"}`}>
          {props.featured.airing ? "Ongoing" : "Finished"}
        </p>
        <p>{props.featured.synopsis}</p>
      </div>
    </section>
  );
};

export default Hero;
