interface Props {
  type: string;
  name: string;
  value?: string;
  onChange: (e: any) => void;
  required: boolean;
  text: string;
}

const LabelledInput = ({
  type,
  name,
  value,
  onChange,
  required,
  text,
}: Props) => {
  return (
    <div className="grid gap-2 items-center">
      <label htmlFor={name}>{text}</label>
      <input
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        className="border-black border-[1px] outline-none p-1 rounded-lg w-full"
        required={required}
      />
    </div>
  );
};

export default LabelledInput;
