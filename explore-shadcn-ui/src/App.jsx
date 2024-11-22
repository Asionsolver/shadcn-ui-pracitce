import { useState } from "react";
import { SubscriptionFrom } from "./components/SubscriptionFrom";
import { SubscriptionForm } from "./components/forms/SubscriptionForm";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      {/* <SubscriptionFrom /> */}
      <SubscriptionForm />
    </>
  );
}

export default App;
