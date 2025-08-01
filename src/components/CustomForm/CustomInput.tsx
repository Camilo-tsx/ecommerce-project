import { Control, Controller, FieldError } from "react-hook-form";
import "../Footer/Footer.css";

interface Props {
  name: string;
  control: Control<any>;
  label: string;
  type?: string;
  error?: FieldError;
}

const InputForm = ({ name, control, label, type, error }: Props) => {
  return (
    <div className="form-group">
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <input
            id={name}
            type={type}
            {...field}
            className={`form-control ${error ? "is-invalid" : ""}`}
            placeholder=""
          />
        )}
      />
      <label htmlFor={name}>{label}</label>
      {error && <p className="error">{error.message}</p>}
    </div>
  );
};

export default InputForm;
