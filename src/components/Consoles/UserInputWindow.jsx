import "../../css/console.css";

function UserInputWindow({ userInputs, setUserInputs }) {
  const styles = { border: "2px solid black" };
  return (
    <div id="user-input-section">
      <h4>User Input:</h4>
      <textarea
        className="console"
        name="user-input-text-area"
        cols="45"
        rows="10"
        value={userInputs}
        onChange={(e) => setUserInputs(e.target.value)}
        style={styles}
      ></textarea>
    </div>
  );
}

export default UserInputWindow;
