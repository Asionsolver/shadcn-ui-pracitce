import { useState } from "react";
import { SubscriptionFrom } from "./components/SubscriptionFrom";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <SubscriptionFrom />
    </>
  );
}

export default App;
