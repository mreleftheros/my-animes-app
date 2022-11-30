const Hero = props => {
  return (
    <section class="hero bg-primary-600">
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
      <div class="text-primary-50 flow hero-box">
        <h2>
          {props.featured.title}{" "}
          {props.featured.year && `(${props.featured.year})`}
        </h2>
        <p>
          <em>{props.featured?.genres?.map(g => g.name).join(", ")}</em>
        </p>
        <div class="hero-rating" title={`${props.featured.score} / 10`}>
          <div class="hero-stars hero-empty-stars">
            <div
              class="hero-stars hero-filled-stars"
              style={{ width: `${(props.featured.score / 10) * 100}%` }}
            ></div>
          </div>
        </div>
        {props.featured.scored_by && (
          <span>{props.featured.scored_by} ratings</span>
        )}
        <p
          class={`${
            props.featured[props.type === "anime" ? "airing" : "publishing"]
              ? "text-success"
              : "text-error"
          }`}
        >
          {props.featured[props.type === "anime" ? "airing" : "publishing"] ? "Ongoing" : "Finished"}
        </p>
        {props.featured.episodes && <p>{props.featured.episodes} episodes</p>}
        <p>{props.featured.synopsis}</p>
      </div>
    </section>
  );
};

export default Hero;
