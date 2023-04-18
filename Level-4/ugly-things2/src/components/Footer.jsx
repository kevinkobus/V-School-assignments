import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function Footer() {
  const { color } = useContext(ThemeContext);

  return (
    <>
      <section className={`${color}-footer`}>
        © 2023 Pretty Things Development
      </section>
    </>
  );
}

export default Footer;
