import OpenForm from "../../components/openForm/OpenForm";
import { useState } from "react";
import Table from "../../components/table/Table";

function Count({ partner1, partner2, disabled, setDisabled }) {
  const [checks, setChecks] = useState([]);
  const initialFormInputs = {
    id: 0,
    total: 0,
    whoPaid: { partner1 },
    onlyPartner1: "0",
    onlyPartner2: "0",
    others: "0",
  };
  const [formShow, setFormShow] = useState(false);
  const [form, setForm] = useState(initialFormInputs);

  function handleClose() {
    setFormShow(false);
    setForm(initialFormInputs)
  }
  // function handleClose() {
  //   setFormShow(false);
  //   setForm(initialFormInputs)
  // }

  function handleSubmit(e) {
    e.preventDefault();
    setChecks((array) => (array = [...checks, form]));
    console.log(checks)
    setFormShow(false);
    setForm(initialFormInputs);
  }
  return (
    <div>
      <OpenForm
        partner1={partner1}
        partner2={partner2}
        handleSubmit={handleSubmit}
        handleClose={handleClose}
        handleReset={() => setForm(initialFormInputs)}
        form={form}
        setForm={setForm}
        formShow={formShow}
        setFormShow={setFormShow}
        initialFormInputs={initialFormInputs}
        // setDisabled={setDisabled}
      />
      <Table
        partner1={partner1}
        partner2={partner2}
        checks={checks}
        handleReset={() => setChecks([])}
        // setDisabled={setDisabled}
      ></Table>
    </div>
  );
}

export default Count;
