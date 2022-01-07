import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div>
      <footer className="sourceLine">
        Open-source code on{" "}
        <a
          href="https://github.com/KaylaJo/react-weather"
          className="sourceCodeLink"
          target="_blank"
          rel="noreferrer"
        >
          GitHub{" "}
        </a>
        . Coded by Kayla J. Cupp. Hosted on{" "}
        <a
          href="https://priceless-poitras-bbc49f.netlify.app"
          className="netlifyLink"
          target="_blank"
          rel="noreferrer"
        >
          Netlify
        </a>
        . Icons by{" "}
        <a
          href="https://icons8.com/icon/set/weather/ios"
          className="iconReferenceLink"
          target="_blank"
          rel="noreferrer"
        >
          icons8.com
        </a>
      </footer>
    </div>
  );
}
