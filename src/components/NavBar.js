import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const linksHeading=links.map((link)=>{
    return <a href={link}>{link}</a>
  });

  return <nav>{/* display an <a> tag for each link here */}
    {linksHeading}
  </nav>;
}

export default NavBar;
