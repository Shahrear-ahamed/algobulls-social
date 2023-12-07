import { Input } from "antd";
import { useFormContext, Controller } from "react-hook-form";
interface IInput {
  name: string;
  type?: string;
  size?: "large" | "small";
  value?: string | string[] | undefined;
  id?: string;
  placeholder?: string;
  validation?: object;
  label?: string;
  required?: boolean;
}
const { TextArea } = Input;

const FormTextarea = ({
  name,
  size,
  value,
  placeholder,
  label,
  required = true,
}: IInput) => {
  const { control } = useFormContext();

  return (
    <>
      {label ? label : null}
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <TextArea
            showCount
            maxLength={200}
            size={size}
            required={required}
            placeholder={placeholder}
            {...field}
            style={{ height: 120, resize: "none" }}
            value={value ? value : field.value}
          />
        )}
      />
    </>
  );
};

export default FormTextarea;
