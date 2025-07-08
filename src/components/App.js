import React from "react";
import { format } from "date-fns"; // This is fine even if unused
import ExampleComponent from "./ExampleComponent";
import TestComponent from "./TestComponent"; // 🆕 Add this import

function App() {
  return (
    <div className="App">
      {/* 📝 Change h1 text */}
      <h1>Now</h1>

      <p className="App-intro">
        In React apps, we write JSX - it looks like HTML, and uses a lot of HTML
        syntax. JSX lets us include JavaScript functions right along with the HTML,
        and also allows us to add in components, which are separate, self-contained
        chunks of JSX.
      </p>

      {/* 🗑 Make sure there’s only ONE ExampleComponent */}
      <ExampleComponent />

      {/* ➕ Add TestComponent below */}
      <TestComponent />
    </div>
  );
}

export default App;
