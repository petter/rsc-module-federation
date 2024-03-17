import { Suspense } from "react";

import Nav from "./Nav";
import Page from "./Page";
import { MicroFrontend } from "./MicroFrontend";

export default function App({ page }) {
  return (
    <div className="main">
      <Nav />
      <section key={page} className="col note-viewer">
        <Suspense fallback={<p>Loading...</p>}>
          <Page page={page} />
          <MicroFrontend url="http://localhost:4001/rsc?page=%22two%22" />
        </Suspense>
      </section>
    </div>
  );
}
