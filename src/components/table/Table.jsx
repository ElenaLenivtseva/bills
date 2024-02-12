import { useState } from "react";
import s from "./Table.module.scss";

function debt(total, others,onlyPartner1, onlyPartner2, whoPaid, partner1Name, partner2Name) {
   const common = (total-others-onlyPartner1-onlyPartner2)/2;
   let partner1Debt;
   let partner2Debt;

   if (whoPaid===partner1Name) {
    partner1Debt='не должен'
    partner2Debt = common + onlyPartner2
  } else {
    partner1Debt = common + onlyPartner1
    partner2Debt='не должен'
  }
  return ([partner1Debt, partner2Debt])
}
function totalDebt(allDebts, partner1Debt, partner2Debt, partner2, partner1) {
  if(partner1Debt==='не должен'){
    allDebts = allDebts-partner2Debt
  } else {
    allDebts=allDebts+partner1Debt
  }
  return (
    // <>
    //  <p>Долг {allDebts<0?partner2:partner1} составляет: {Math.abs(allDebts)}</p>
    // </>
    allDebts
  )
  
}

function Table({ partner1, partner2, checks }) {
  let allDebts = 0;
  return (
    <div>
      <div className={s.table}>
        <div className={s.table__top}>
          <p className={s.table__name}></p>
          <p className={s.table__name}>Общее</p>
          <p className={s.table__name}>Кто платил</p>
          <p className={s.table__name}>Траты {partner1}</p>
          <p className={s.table__name}>Траты {partner2}</p>
          <p className={s.table__name}>Другие траты</p>
          <p className={s.table__name}>Долг {partner1}</p>
          <p className={s.table__name}>Долг {partner2}</p>
        </div>
        {checks.map((check, index) => {
          const initialValue = 0;
          const onlyPartner1Array = check.onlyPartner1.split(", ");
          onlyPartner1Array.forEach((element) => {
            return Number(element);
          });
          const onlyPartner1Count = onlyPartner1Array.reduce(
            (accumulator, currentValue) => accumulator + +currentValue,
            initialValue
          );
          const onlyPartner2Array = check.onlyPartner2.split(", ");
          onlyPartner2Array.forEach((element) => {
            return Number(element);
          });
          const onlyPartner2Count = onlyPartner2Array.reduce(
            (accumulator, currentValue) => accumulator + +currentValue,
            initialValue
          );
          const othersArray = check.others.split(", ");
          othersArray.forEach((element) => {
            return Number(element);
          });
          const othersCount = othersArray.reduce(
            (accumulator, currentValue) => accumulator + +currentValue,
            initialValue
          );
          const debts = debt(check.total, othersCount, onlyPartner1Count, onlyPartner2Count, check.whoPaid, partner1, partner2)
          const partner1Debt = debts[0]
          const partner2Debt = debts[1]
          if(partner1Debt==='не должен'){
            allDebts = allDebts-partner2Debt
          } else {
            allDebts=allDebts+partner1Debt
          }
          // allDebts = totalDebt(partner1Debt, partner2Debt, partner2, partner1)
          return (
            <div className={s.table__check}>
              <div className={s.table__checkName}>
                <div className={s.table__checkManage}>
                  <p>Ред</p>
                  <p>X</p>
                </div>
                <p>Чек {index + 1}</p>
              </div>
              <div className={s.table__value}>{check.total}</div>
              <div className={s.table__value}>{check.whoPaid}</div>
              <div className={s.table__value}>{onlyPartner1Count}</div>
              <div className={s.table__value}>{onlyPartner2Count}</div>
              <div className={s.table__value}>{othersCount}</div>
              <div className={s.table__value}>{partner1Debt}</div>
              <div className={s.table__value}>{partner2Debt}</div>
            </div>
          );
        })}
      </div>
      <p className="table__message">Долг {allDebts<0 ? partner2: partner1} составляет: {Math.abs(allDebts)}</p>
      {/* {allDebt>0?<p>Долг {partner1} составляет: {allDebt}</p> : <p>Долг {partner2} составляет: {+(allDebt)}</p>} */}
    </div>
  );
}

export default Table;
