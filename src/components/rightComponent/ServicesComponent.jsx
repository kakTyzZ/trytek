import React from "react";
import classes from "./ServicesComponent.module.css";

export function ServicesComponent({ cashier, paymentState }) {
  console.log(cashier[paymentState]);

  return (
    <div className={classes.servicesContainer}>
      {paymentState &&
        cashier[paymentState].services.map((item) => (
          <button className={classes.servicesButton} key={item.id}>
            {item.name}
          </button>
        ))}
    </div>
  );
}
