import { useCallback, useState } from "react";
import "./app.css";
import Cover from "./components/Cover";
import ShapeVisualizer from "./components/ShapeVisualizer";
import Intro from "./components/Intro";

function App() {
  const [stage, setStage] = useState<"cover" | "intro" | "main">("cover");

  const onCloseCover = useCallback(() => {
    setStage("intro");
  }, []);

  const onCloseIntro = useCallback(() => {
    setStage("main");
  }, []);

  if (stage === "cover") {
    return <Cover show={stage === "cover"} onClose={onCloseCover} />;
  }

  if (stage === "intro") {
    return <Intro show={stage === "intro"} onClose={onCloseIntro} />;
  }

  return (
    <>
      <div className="flex items-center justify-center w-full h-dvh opacity-0 animate-[fade-in_1.5s_ease-in_0.3s_forwards]">
        <div className="animate-float">
          <ShapeVisualizer />
        </div>
      </div>
    </>
  );
}

export default App;
