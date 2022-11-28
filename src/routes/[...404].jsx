import { A } from "solid-start";
import { Title } from "solid-start";
import { TITLE } from "../data";
import { HttpStatusCode } from "solid-start/server";

export default function NotFound() {
  return (
    <>
      <Title>Not Found | {TITLE}</Title>
      <HttpStatusCode code={404} />
      <h1 class="my-l">Oops...Page Not Found!</h1>
      <A class="btn bg-secondary rounded-s" href="/">
        Go to home
      </A>
    </>
  );
}
