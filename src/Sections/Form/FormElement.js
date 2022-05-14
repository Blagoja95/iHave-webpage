const FormElement = ({ label, inputClass }) => {
  return (
    <>
      <label htmlFor={label} className="form___label">{label}</label>
      <input
        className={`form__input ${inputClass}`}
        type="text"
        id={label}
        name={label}
      />
    </>
  );
};

export default FormElement;
