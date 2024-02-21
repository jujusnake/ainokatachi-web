import { useCallback, useState } from "react";
import "./app.css";
import Cover from "./components/Cover";
import ShapeVisualizer from "./components/ShapeVisualizer";

function App() {
  const [isCover, setIsCover] = useState<boolean>(true);

  const onCloseCover = useCallback(() => {
    setIsCover(false);
  }, []);

  return (
    <>
      {isCover ? (
        <Cover show={isCover} onClose={onCloseCover} />
      ) : (
        <div className="flex items-center justify-center w-full h-dvh animate-[main-enter_1.5s_ease-in_0s_forwards]">
          <ShapeVisualizer />
        </div>
      )}
    </>
  );
}

export default App;
