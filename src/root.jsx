// @refresh reload
import { Suspense } from "solid-js";
import {
  Body,
  ErrorBoundary,
  FileRoutes,
  Head,
  Html,
  Meta,
  Routes,
  Scripts,
  Title
} from "solid-start";
import "./korg/index.scss";
import Nav from "./components/Nav";
import { TITLE } from "./site";

export default function Root() {
  return (
    <Html lang="en">
      <Head>
        <Title>Tmdb Movies App</Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
        <Title>{TITLE}</Title>
      </Head>
      <Body class="bg-primary-500 text-primary-900">
        <Suspense>
          <ErrorBoundary>
            <header className="header bg-primary-800 text-primary-100">
              <Nav />
            </header>
            <main className="main flow-l text-primary-900">
              <Routes>
                <FileRoutes />
              </Routes>
            </main>
            <footer className="footer bg-primary-900 text-primary-100">
              <p>
                Copyright &copy; {new Date().getFullYear()} {TITLE}
              </p>
            </footer>
          </ErrorBoundary>
        </Suspense>
        <Scripts />
      </Body>
    </Html>
  );
}
