import React from "react";
import classes from "./CardComponent.module.css";

export function CardComponent({ cardData }) {
  const { data } = cardData;

  const adress = data.addresses["Обычный адрес"][0];
  const phone = data.addresses["Телефон"][0];
  return (
    <div className={classes.cardContainer}>
      <div className={classes.headerContainer}>
        <div>
          <span className={classes.cardSpan}>Имя:</span>
          {data.name}
        </div>
        <div>
          <span className={classes.cardSpan}>Тип:</span>
          {data.type}
        </div>
        <div className={data.state === "Активен" ? classes.active : ""}>
          <span className={classes.cardSpan}>Статус:</span>
          {data.state}
        </div>
      </div>

      <div>
        <div className={classes.cardInfoBold}>Информация</div>
        <div>
          <div>
            <b>Обычный адрес</b>
          </div>
          <div className={classes.addressContainer}>
            <div>{adress.address}</div>
            <div className={classes.cardGreyBg}>{adress.view}</div>
          </div>
        </div>

        <div>
          <div>
            <b>Телефон</b>
          </div>
          <div className={classes.phoneContainer}>
            <div>{phone.address}</div>
            <div className={classes.cardGreyBg}>{phone.view}</div>
          </div>
        </div>
      </div>

      <div>
        <button className={classes.cardButton}>Карточка на Hydra</button>
      </div>
    </div>
  );
}
