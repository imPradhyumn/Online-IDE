import CodeEditor from "../Editor/CodeEditor";
import Select from "react-select";
import "../../css/home.css";
import { useState } from "react";
import OutputWindow from "../Consoles/OutputWindow";
import UserInputWindow from "../Consoles/UserInputWindow";

function Home() {
  const options = [
    { value: "javascript", label: "Javascript (Node 18)" },
    { value: "python", label: "Python" },
    { value: "java", label: "Java" },
  ];

  const [chosenLanguage, setChosenLanguage] = useState(options[0].value);
  const [codeOutput, setCodeOutput] = useState("");
  const [userInputs, setUserInputs] = useState("");

  const handleLanguageChange = (e) => {
    const value = e.target.value;
    setChosenLanguage(value);
    setCodeOutput("");
  };

  return (
    <>
      <div id="main">
        <div id="left-section">
          <select onChange={handleLanguageChange} id="language-selector">
            {options.map((item) => {
              return (
                <option key={item.value} value={item.value}>
                  {item.label}
                </option>
              );
            })}
          </select>
          <CodeEditor
            setCodeOutput={setCodeOutput}
            chosenLanguage={chosenLanguage}
            userInputs={userInputs}
          />
        </div>

        {/* Right-Section */}
        <div id="right-section">
          <OutputWindow output={codeOutput} />
          <UserInputWindow
            setUserInputs={setUserInputs}
            userInputs={userInputs}
          />
        </div>
      </div>
      <footer style={{ margin: "0.5rem auto", width: "fit-content" }}>
        By Pradhyumn Sharma with React + ExpressJS
      </footer>
    </>
  );
}

export default Home;
