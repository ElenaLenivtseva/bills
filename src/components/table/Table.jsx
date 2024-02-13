import s from "./Table.module.scss";


function sumIndividualSpendings(partnerOnly) {
  const initialValue = 0;
  const onlyPartnerArray = partnerOnly.split(", ");
  onlyPartnerArray.forEach((element) => {
    return Number(element);
  });
  const onlyPartnerCount = onlyPartnerArray.reduce(
    (accumulator, currentValue) => accumulator + +currentValue,
    initialValue
  );
  return onlyPartnerCount;
}

function countDebtOfTheCheck(
  total,
  others,
  onlyPartner1,
  onlyPartner2,
  whoPaid,
  partner1Name,
) {
  const common = (total - others - onlyPartner1 - onlyPartner2) / 2;
  let partner1Debt;
  let partner2Debt;

  if (whoPaid === partner1Name) {
    partner1Debt = "не должен";
    partner2Debt = common + onlyPartner2;
  } else {
    partner1Debt = common + onlyPartner1;
    partner2Debt = "не должен";
  }
  return [partner1Debt, partner2Debt];
}
function totalDebt(allDebts, partner1Debt, partner2Debt) {
    let allDebtsCount = allDebts;
  if (partner1Debt === "не должен") {
    allDebtsCount = allDebtsCount - partner2Debt;
  } else {
    allDebtsCount = allDebtsCount + partner1Debt;
  }
  return (
    allDebtsCount
  );
}



function Table({ partner1, partner2, checks }) {
  const topTitles = [
    "№ чека",
    "общее",
    "кто платил",
    `траты ${partner1}`,
    `траты ${partner2}`,
    "другое",
    `долг ${partner1}`,
    `долг ${partner2}`,
  ];
  let allDebts = 0;
  return (
    <div>
      <div className={s.table}>
        <div className={s.table__top}>
          {topTitles.map((title) => {
            return (
              <p key={title} className={s.table__name}>
                {title}
              </p>
            );
          })}
        </div>
        {checks.map((check, index) => {
          const partner1SumSpend = sumIndividualSpendings(check.onlyPartner1);
          const partner2SumSpend = sumIndividualSpendings(check.onlyPartner2);
          const othersCount = sumIndividualSpendings(check.others);
          const debts = countDebtOfTheCheck(
            check.total,
            othersCount,
            partner1SumSpend,
            partner2SumSpend,
            check.whoPaid,
            partner1,
            partner2
          );
          const partner1DebtOfTheCheck = debts[0];
          const partner2DebtOfTheCheck = debts[1];
          
          allDebts = totalDebt(allDebts, partner1DebtOfTheCheck, partner2DebtOfTheCheck);
          
          const contentColumns = [
            check.total,
            check.whoPaid,
            partner1SumSpend,
            partner2SumSpend,
            othersCount,
            partner1DebtOfTheCheck,
            partner2DebtOfTheCheck,
          ];

          return (
            <div className={s.table__check}>
              <div className={s.table__checkName}>
                <div className={s.table__checkManage}>
                  <p>Ред</p>
                  <p>X</p>
                </div>
                <p>Чек {index + 1}</p>
              </div >
              {contentColumns.map((item, i) => {
                return (
                  <p key={i} className={s.table__value}>
                    {item}
                  </p>
                );
              })}
            </div>
          );
        })}
      </div>
      <p className="table__message">
        Долг {allDebts < 0 ? partner2 : partner1} составляет:{" "}
        {Math.abs(allDebts)}
      </p>
    </div>
  );
}

export default Table;
