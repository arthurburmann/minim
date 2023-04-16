import { Form } from "react-bootstrap";

export function LabelledTextInput({ label, helpText, onChange, lines, ...props }) {


  const textInput = lines ? (
    <Form.Control
      as="textarea"
      rows={lines}
      onChange={(e) => {
        onChange(e.target.value);
      }}
      {...props}
    />
  ) : (
    <Form.Control

      type="text"
      onChange={(e) => {
        onChange(e.target.value);
      }}
      {...props}
    />
  );

  return (
    <>
      <Form.Label>{label}</Form.Label>
      {textInput}
      {helpText && <Form.Text muted>{helpText}</Form.Text>}
      <br />
    </>
  );
}
