import Editor from "@monaco-editor/react";
import "../../css/editor.css";
import { useEffect, useState } from "react";
import axios from "axios";

function CodeEditor({ setCodeOutput, chosenLanguage, userInputs }) {
  const [codeValue, setCodeValue] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);

  // function prefillJavaCode() {
  //   const code = `public class Demo {
  //   public static void main(String[] args) {
  //       System.out.println("Hello");
  //   }
  // }`
  //   return code;
  // }

  const setCommentedCode = () => {
    let value;
    if (chosenLanguage === "python")
      value = "print(Hello World)";
    else value = "//Happy Coding:)";
    setCodeValue(value);
  };

  useEffect(() => {
    setCommentedCode();
  }, [chosenLanguage]);

  async function executeCode() {
    setIsDisabled(true);
    axios
      .post("https://online-ide-server-4bvl.onrender.com", {
        data: { code: codeValue, chosenLanguage, userInputs },
      })
      .then((res) => {
        const data = res.data;
        if (data.stdout) setCodeOutput(data.stdout);
        else if (data.stderr) setCodeOutput(data.stderr);
        setIsDisabled(false);
      })
      .catch((err) => { setCodeOutput(err); setIsDisabled(false) });
  }

  // useEffect(() => {
  //   if (chosenLanguage !== "javascript") return;
  //   const getOutput = setTimeout(() => {
  //     executeCode();
  //   }, 500);
  //   return () => clearTimeout(getOutput);
  // }, [codeValue]);

  return (
    <div id="editor-container">
      <Editor
        width="100%"
        height="100%"
        language={chosenLanguage}
        theme="vs-dark"
        value={codeValue}
        onChange={(value) => {
          setCodeValue(value);
        }}
      />
      {isDisabled ? <button className="execute-btn">
        Executing...
      </button>
        : <button className="execute-btn" onClick={executeCode}>
          Execute
        </button>
      }
    </div>
  );
}

export default CodeEditor;
