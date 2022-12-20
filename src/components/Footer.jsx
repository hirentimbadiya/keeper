import React from "react";
let year = new Date().getFullYear();
function Footer() {
  return (
    <footer>
      <p>Made With 💛 by Hiren || Copyright © {year}</p>
    </footer>
  );
}
export default Footer;
