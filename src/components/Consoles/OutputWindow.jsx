import "../../css/console.css";

function OutputWindow({ output }) {
  const styles = { border: "2px solid black" };
  return (
    <div id="output-section">
      <h4>Output:</h4>
      <textarea
        className="console"
        name="output-text-area"
        cols="45"
        value={output}
        rows="12"
        style={styles}
        readOnly
      ></textarea>
    </div>
  );
}

export default OutputWindow;
