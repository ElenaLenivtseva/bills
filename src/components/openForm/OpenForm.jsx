function OpenForm({
  partner1,
  partner2,
  formShow,
  setFormShow,
  handleClose,
  handleReset,
  handleSubmit,
  form,
  setForm,
}) {
  return (
    <>
      <button onClick={() => setFormShow(true)}>Добавить чек</button>
      {formShow && (
        <div>
          <button onClick={handleClose}>Закрыть форму</button>
          <button onClick={handleReset}>Очистить форму</button>
          <form onSubmit={(e) => handleSubmit(e)}>
            <p>
              Введите "Итого" с чека без указания валюты
              <label>
                <input
                  type="number"
                  placeholder="Итого, общее потраченное"
                  value={form.total}
                  onChange={(e) => setForm({ ...form, total: e.target.value })}
                />
              </label>
            </p>
            <p>
              Выберите, кто из партнеров оплачивал по этому чеку
              <label>
                <input
                  type="radio"
                  name="whoPaid"
                  value={partner1}
                  checked={form.whoPaid === partner1}
                  onChange={(e) =>
                    setForm({ ...form, whoPaid: e.target.value })
                  }
                />
                {partner1}
              </label>
              <label>
                <input
                  type="radio"
                  name="whoPaid"
                  value={partner2}
                  checked={form.whoPaid === partner2}
                  onChange={(e) =>
                    setForm({ ...form, whoPaid: e.target.value })
                  }
                />
                {partner2}
              </label>
            </p>
            <p>
              Товары, принадлежащие только {partner1}
              <label>
                Введите траты исключительно партнера {partner1} в таком формате:
                123.8, 34, 41.4
                <input
                  type="text"
                  value={form.onlyPartner1}
                  onChange={(e) =>
                    setForm({ ...form, onlyPartner1: e.target.value })
                  }
                />
              </label>
              <label>
                Введите траты исключительно партнера {partner2} в таком формате:
                123.8, 34, 41.4
                <input
                  type="text"
                  value={form.onlyPartner2}
                  onChange={(e) =>
                    setForm({ ...form, onlyPartner2: e.target.value })
                  }
                />
              </label>
              <label>
                Введите трат, НЕ относящиеся к партнерам. Н-р, вы покупали
                соседу сок, и он за него перевел вам деньги
                <input
                  type="text"
                  value={form.others}
                  onChange={(e) => setForm({ ...form, others: e.target.value })}
                />
              </label>
            </p>
            <button type="submit">Отправить</button>
          </form>
        </div>
      )}
    </>
  );
}

export default OpenForm;
