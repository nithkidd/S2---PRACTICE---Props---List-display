import Card from "./components/Card.jsx";
import { PEOPLE_INFO } from "./data.js";

function App() {
  return (
    <div className="app">
      <h1>Card List</h1>
      <div className="card-list">
        {PEOPLE_INFO.map((item) => (
          <Card
            key={item.id}
            name={item.name}
            image={item.image.src}
            alt={item.image.alt}
            class={item.class}
            hobbies={item.hobbies}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
