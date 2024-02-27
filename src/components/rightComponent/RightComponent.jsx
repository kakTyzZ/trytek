import React, { useState } from "react";
import { ServicesComponent } from "./ServicesComponent";
import classes from "./RightComponent.module.css";

export function RightComponent({ cashier }) {
  const [paymentState, setPaymentState] = useState("");

  function onButtonClick(state) {
    setPaymentState(state);
  }

  return (
    <div className={classes.rightMainContainer}>
      <div>
        <b>Быстрое пополнение</b>
      </div>
      <div>
        <b>Способ оплаты</b>
      </div>

      <div className={classes.buttonMainContainer}>
        <div
          className={
            paymentState === ""
              ? classes.buttonContainer
              : classes.buttonContainerMaxWidth
          }
        >
          <button
            className={
              paymentState !== "" && paymentState !== "Наличные"
                ? classes.lowOpacity
                : classes.mainButton
            }
            onClick={() => onButtonClick("Наличные")}
          >
            Наличными
          </button>
          <button
            className={
              paymentState !== "" && paymentState !== "Карта"
                ? classes.lowOpacity
                : classes.mainButton
            }
            onClick={() => onButtonClick("Карта")}
          >
            Карта
          </button>
          <button
            className={
              paymentState !== "" && paymentState !== "QR"
                ? classes.lowOpacity
                : classes.mainButton
            }
            onClick={() => onButtonClick("QR")}
          >
            QR
          </button>
        </div>

        <div className={classes.ServicesComponentContainer}>
          <ServicesComponent cashier={cashier} paymentState={paymentState} />
        </div>
      </div>

      <div>
        <div>
          <b>Сумма</b>
        </div>
        <input
          className={classes.payInput}
          type="text"
          placeholder="Введите сумму"
        />
        <button className={classes.payButton}>Пополнить</button>
      </div>

      <div className={classes.payFooterUs}>
        <div>
          <b>Активные задачи в US</b>
        </div>
        <div className={classes.payFooterContainerFirst}>
          <button>Карточка в US</button>
          <button>История задач</button>
        </div>
      </div>
      <div>
        <b>Задачи отсутствуют</b>
      </div>
    </div>
  );
}
