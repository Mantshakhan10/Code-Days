import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";

function Home() {
  const { theme } = useContext(ThemeContext);

  return (
    <main className="home">
      <h1>Welcome to My React Router + Theme App</h1>
      <p>This is the Home Page with Dark/Light mode using Context API.</p>

      <p>
        <strong>Current Theme:</strong> {theme.toUpperCase()}
      </p>

      <p style={{ marginTop: "10px" }}>
        Use the toggle button in the navbar to switch themes globally.
      </p>
    </main>
  );
}

export default Home;
