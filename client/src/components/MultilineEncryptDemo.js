import { TextField } from "@material-ui/core";
import { useState } from "react";
import { encryptMultiLine, decryptMultiline } from "../helpers/convert.js";

const MultilineEncryptDemo = () => {
  const [rawText, setRawText] = useState("");
  const [encText, setEncText] = useState("");
  const [key, setKey] = useState("");
  const encryptText = (e) => {
    setRawText(e.target.value);
    setEncText(encryptMultiLine(e.target.value, "xor"));
  };
  return (
    <div>
      <TextField
        size="small"
        label="enter text"
        value={rawText}
        onChange={encryptText}
      />
      <TextField
        size="small"
        label="enter key"
        value={key}
        onChange={(e) => setKey(e.target.value)}
      />
      <div>{encText}</div>
      <div>{decryptMultiline(encText, key)}</div>
    </div>
  );
};

export default MultilineEncryptDemo;
