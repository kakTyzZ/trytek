import React, { useState } from "react";
import classes from "./LeftComponent.module.css";
import { SvgPlus } from "../svg/SvgPlus";
import { CardComponent } from "../cardComponent/CardComponent";

export function LeftComponent({ data, cardData }) {
  const [modal, setModal] = useState(false);
  const [activeElement, setActiveElement] = useState(2);

  const { user, devices } = data;
  const { services } = data.devices[0];
  const start = services[0].start.split(" ")[0];

  function onElementClick(number) {
    setActiveElement(number);
  }

  /* Можно по идее весь рендер пустить через map ,но опять же если только не известно заранее сколько будет полей,а если там всегда одно значение,то вот как у меня */
  return (
    <div className={classes.mainContainer}>
      <div className={classes.headerContainer}>
        <button
          onClick={() => onElementClick(0)}
          className={
            activeElement == 0
              ? classes.headerElementActive
              : classes.headerElement
          }
        >
          Карточка
        </button>
        <button
          onClick={() => onElementClick(1)}
          className={
            activeElement == 1
              ? classes.headerElementActive
              : classes.headerElement
          }
        >
          {user.roles[0]}
        </button>
        <button
          onClick={() => onElementClick(2)}
          className={
            activeElement == 2
              ? classes.headerElementActive
              : classes.headerElement
          }
        >
          {user.roles[1]}
        </button>

        {/*
        Если заранее не известно сколько в массиве ролей,то так можно
        {data.user.roles.map((item) => (
          <div
          key={item}
          >{item}</div>
        ))} */}
      </div>

      {activeElement === 2 && (
        <>
          <div className={classes.info}>
            <div>
              <span className={classes.spanBig}> ФИО:</span> {user.name}
            </div>
            <div>
              <span className={classes.spanBig}>КОД:</span> {user.code}
            </div>
            <div>
              <span className={classes.spanBig}>Л/С:</span> {user.account}
            </div>
            <div className={user.status === "Активен" ? classes.active : ""}>
              <span className={classes.spanBig}>Статус:</span> {user.status}
            </div>
            <div>
              <span className={classes.spanBig}>Баланс:</span> {user.balance}
            </div>
            <div>
              <span className={classes.spanBig}>Группы:</span> {user.groups}
            </div>
            <div>
              <span className={classes.spanBig}>Теги:</span> {user.tags}
            </div>
          </div>

          <div className={classes.services}>
            <div>Услуги</div>
            <div className={classes.services_mainBlock}>
              <div className={classes.services_leftBlock}>
                <div>
                  <svg
                    className={classes.svg}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path
                      fill="green"
                      d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
                    />
                  </svg>
                </div>
                <div>{services[0].name}</div>
              </div>

              <div className={classes.services_rightBlock}>
                <div>{services[0].pay_day}ч.</div>
                <div>{start}</div>
                <div className={classes.services_status}>
                  {services[0].state}
                </div>
              </div>
            </div>
          </div>

          <div className={classes.devicesContainer}>
            <div>Оборудование</div>
            <div className={classes.devicesInnerContainer}>
              <div className={classes.devicesHeader}>
                <div className={classes.devicesLeftBlockContainer}>
                  <button
                    className={classes.devicesButton}
                    onClick={() => setModal(!modal)}
                  >
                    <SvgPlus />
                  </button>
                  <div>{devices[0].name}</div>
                </div>
                <div>{devices[0].address}</div>
              </div>
              {modal && (
                <div className={classes.modalOuterContainer}>
                  {devices.map((item) => (
                    <div
                      className={classes.devicesModalContainer}
                      key={item.id}
                    >
                      <div>
                        <button>Скопировать адрес</button>
                      </div>

                      <div>{item.name}</div>
                      <div>{item.dev_code}</div>
                      <div>{item.dev_name}</div>
                      <div>{item.ip_adress}</div>
                      <div>{item.comp_code}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </>
      )}

      {activeElement === 0 && <CardComponent cardData={cardData} />}
    </div>
  );
}
