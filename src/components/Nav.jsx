import { A } from "solid-start";

const Nav = () => {
  return (
    <nav class="nav px-l">
      <A class="nav-logo" href="/">
        Tmdb Movies App
      </A>
      <div className="nav-links">
        <A class="nav-link" href="/about">
          About
        </A>
      </div>
    </nav>
  );
};

export default Nav;
