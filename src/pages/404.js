import * as React from "react";
import { Link } from "gatsby";

// styles
const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
};

const paragraphStyles = {
  marginBottom: 48,
};
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
};

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>Not found</title>
      <h1 style={headingStyles}>Page not found</h1>
      <p style={paragraphStyles}>
        Sorry{" "}
        <span role="img" aria-label="Pensive emoji">
          😔
        </span>{" "}
        we couldn’t find what you were looking for.
        <br />
        {process.env.NODE_ENV === "development" ? (
          <>
            <br />
            Try checking the website url you have entered or go back to{" "}
            <a href="https://webdux.tech">
              <code style={codeStyles}>www.webdux.tech</code>
            </a>
            .
            <br />
          </>
        ) : null}
        <br />
        <Link to="/">Home</Link>
        <Link to="/">Ventures</Link>
        <Link to="/">Clients</Link>
        <Link to="/">Works</Link>
        <Link to="/">Team</Link>
        <Link to="/">Technical Environment</Link>
      </p>
    </main>
  );
};

export default IndexPage;
