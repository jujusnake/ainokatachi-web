import { useCallback, useState } from "react";
import "./app.css";
import Cover from "./components/Cover";

function App() {
  const [isCover, setIsCover] = useState<boolean>(true);

  const onCloseCover = useCallback(() => {
    setIsCover(false);
  }, []);

  return <>{isCover && <Cover show={isCover} onClose={onCloseCover} />}</>;
}

export default App;
