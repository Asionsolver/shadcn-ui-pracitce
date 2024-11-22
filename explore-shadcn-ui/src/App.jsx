import { useState } from "react";
import { Button } from "./components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Terminal } from "lucide-react"
function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <Alert>
        <Terminal className="h-4 w-4" />
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>
          <p>{count}</p>
        </AlertDescription>
      </Alert>
      <Button onClick={() => setCount(count + 1)}>Click me</Button>
      <p>{count}</p>
    </>
  );
}

export default App;
