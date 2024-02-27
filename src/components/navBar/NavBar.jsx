import classes from "./NavBar.module.css";
import React from "react";

export function NavBar() {
  return (
    <nav className={classes.navBar}>
      <div className={classes.block}>
        <div className={classes.logo}>Trytek</div>
        <div>
          Главная
          {/* link */}
        </div>
      </div>

      <div className={classes.block}>
        <div>
          <input className={classes.navInput} type="text" placeholder="Поиск" />
        </div>
        <div>
          <button className={classes.navButton}>Выход</button>
        </div>{" "}
      </div>
    </nav>
  );
}
