import Navigation from "./Navigation";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

export default function Layout({ children }) {
  return (
    <>
      <main className="p-5">{children}</main>
      <Navigation />
    </>
  );
}
