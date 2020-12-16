import * as React from "react";

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
const headingAccentStyles = {
  color: "#663399",
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
const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
  listStyleType: "none",
};
const listItemStyles = {
  marginBottom: 12,
  fontWeight: "300",
  letterSpacing: 1,
};
const linkStyles = {
  color: "#8954A8",
};

// data
const links = [
  {
    text: "Documentation",
    url: "https://www.gatsbyjs.com/docs/",
  },
  {
    text: "Tutorials",
    url: "https://www.gatsbyjs.com/tutorial/",
  },
  {
    text: "Guides",
    url: "https://www.gatsbyjs.com/tutorial/",
  },
  {
    text: "API Reference",
    url: "https://www.gatsbyjs.com/docs/api-reference/",
  },
  {
    text: "Plugin Library",
    url: "https://www.gatsbyjs.com/plugins",
  },
  {
    text: "Cheat Sheet",
    url: "https://www.gatsbyjs.com/docs/cheat-sheet/",
  },
];

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>Home Page</title>
      <div class="container-fluid d-flex flex-column justify-content-center align-items-center vh-100 banner">
        <h1 class="font-size-400 satisfy-font text-blue">WebDux</h1>
        <h3 class="langar-font">An Opportunity to be what you can be</h3>
      </div>
      <div class="container vh-100 w-100 row">
        <div class="col-md-4 justify-content-center align-content-center">
          <img
            class="w-100"
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.DEZdJ_76NuiMoUexnMP3IAHaG0%26pid%3DApi&amp;f=1"
            alt="Our Location"
          />
        </div>
        <div class="col-md-8 d-flex justify-content-center align-content-center text-center">
          <h1 class="langar-font">
            Near the Financial, Commercial, and the Entertainment capital of
            India
          </h1>
        </div>
      </div>
      <div class="container vh-100 w-100">
        <h1>We build success successfully for you</h1>
        <div class="container-fluid">
          <div class="container">
            <h4>Designing</h4>WITH CREATIVITY
          </div>
          <div class="container">
            <h4>Programming </h4>WITH DEDICATION
          </div>
          <div class="container">
            <h4>Testing </h4>WITH EXPERTISE
          </div>
          <div class="container">
            <h4>Deploying </h4>WITH CONFIDENCE
          </div>
        </div>
      </div>
      <div class="container vh-100 w-100">
        <h1>
          We are collectives of
          <div class="container">
            <h3>Creative Writers</h3>
          </div>
          <div class="container">
            <h3>Web Designers</h3>
          </div>
          <div class="container">
            <h3>Graphic Designers</h3>
          </div>
          <div class="container">
            <h3>Software Developers</h3>
          </div>
          <div class="container">
            <h3>Android, iOS Developers</h3>
          </div>
          <div class="container">
            <h3>Web Developers</h3>
          </div>
          <div class="container">
            <h3>IoT Personnel </h3>
          </div>
          <div class="container">
            <h3>System Designers</h3>
          </div>
          <div class="container">
            <h3>UML Creators</h3>
          </div>
          <div class="container">
            <h3>Game Designers</h3>
          </div>
        </h1>
      </div>
      <div class="container vh-100 w-100">
        <h1>We Venture for - The Dedicated</h1>
        <div class="row">
          <div class="col-md-3">#ModernInspiredByAncient</div>
          <div class="col-md-3">#StartupForGood</div>
          <div class="col-md-3">#DigitalForNonProfit</div>
          <div class="col-md-3">#PromotingWellBeing</div>
        </div>
      </div>
      <div class="container vh-100 w-100">
        <h1>Break the brick rather lying in the Inbox</h1>
        <h2>A brand is what drives success</h2>
        <div class="container">
          <h1>How to contact WebDux</h1>
        </div>
      </div>
    </main>
  );
};

export default IndexPage;
