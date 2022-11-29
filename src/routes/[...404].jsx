import { A, Title } from "solid-start";
import { TITLE } from "../site";
import { HttpStatusCode } from "solid-start/server";

export default function NotFound() {
  return (
    <div class="px-s">
      <Title>Not Found | {TITLE}</Title>
      <HttpStatusCode code={404} />
      <h1 class="my-l">Oops...Page is missing!</h1>
      <A class="btn bg-secondary rounded-s" href="/">
        Go to home
      </A>
    </div>
  );
}
