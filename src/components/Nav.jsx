import { A } from "solid-start";

const Nav = () => {
  return (
    <nav class="nav gap-m p-s">
      <A href="/" class="nav-link hover">
        <svg viewBox="0 0 1024 1024" width="24" height="24">
          <path
            fill="currentcolor"
            d="M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 0 0-44.4 0L77.5 505a63.9 63.9 0 0 0-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0 0 18.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7l23.1 23.1L882 542.3h-96.1z"
          ></path>
        </svg>
        <p>Home</p>
      </A>
      <A href="/anime" class="nav-link hover">
        <svg viewBox="0 0 20 20" width="24" height="24">
          <g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd">
            <path d="M.707 6.08a1 1 0 0 1 .763-1.192L16.123 1.68a1 1 0 0 1 1.19.763l.642 2.93a1 1 0 0 1-.763 1.191L2.54 9.774a1 1 0 0 1-1.19-.763L.707 6.08Zm2.168.548l.213.977l12.7-2.78l-.214-.977l-12.7 2.78Z"></path>
            <path d="M9.935 7.698L7.339 5.195l1.389-1.44l2.595 2.503l-1.388 1.44Zm-3.908.855L3.432 6.05L4.82 4.61l2.595 2.504l-1.388 1.44Zm7.815-1.711L11.247 4.34l1.388-1.44l2.595 2.504l-1.388 1.44Zm-4.01 5.713l2-3l-1.664-1.11l-2 3l1.664 1.11Zm4 0l2-3l-1.664-1.11l-2 3l1.664 1.11Zm-8 0l2-3l-1.664-1.11l-2 3l1.664 1.11Z"></path>
            <path d="M1.5 9a1 1 0 0 1 1-1h15a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1h-15a1 1 0 0 1-1-1V9Zm2 1v7h13v-7h-13Z"></path>
            <path d="M18 13H2v-2h16v2Z"></path>
          </g>
        </svg>
        <p>Anime</p>
      </A>
      <A href="/manga" class="nav-link hover">
        <p>🕮</p>
        <p>Manga</p>
      </A>
    </nav>
  );
};

export default Nav;
