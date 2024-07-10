import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { Scroll, ScrollControls } from "@react-three/drei";
import { Interface } from "./components/Interface";
import { useState } from "react";
import { ScrollManager } from "./components/ScrollManager";
import { Menu } from "./components/Menu";
import { useEffect } from "react";

function App() {
  const [section, setSection] = useState(0);
  const [menuOpened, SetMenuOpened] = useState(false);

  useEffect(() => {
    SetMenuOpened(false);
  }, [section])

  return (
    <>
    <Canvas shadows camera={{ position: [0, 2, 5], fov: 30 }}>
      <color attach="background" args={["#ececec"]} />
      <ScrollControls pages={4} damping = {0.1}>
      <ScrollManager section={section} onSectionChange={setSection}/>  
      <Experience />
      <Scroll html>
        <Interface />
      </Scroll>
      </ScrollControls>
    </Canvas>
    <Menu onSectionChange={setSection}
     menuOpened={menuOpened} 
     SetMenuOpened={SetMenuOpened}/>
    </>
  );
}

export default App;
