import DrumMachine from "./components/DrumMachine";
import Display from "./components/Display";
import { useEffect, useState } from "react";

function App() {
  const drums = [
    { letter: "Q", id: "heater-1", src: "src/components/Heater1.mp3" },
    { letter: "W", id: "heater-2", src: "src/components/Heater-2.mp3" },
    { letter: "E", id: "heater-3", src: "src/components/Heater-3.mp3" },
    { letter: "A", id: "heater-4", src: "src/components/Heater-4_1.mp3" },
    { letter: "S", id: "open-hh", src: "src/components/Cev_H2.mp3" },
    { letter: "D", id: "kick-n-hat", src: "src/components/Kick_n_Hat.mp3" },
    { letter: "Z", id: "dsc-oh", src: "src/components/Dsc_Oh.mp3" },
    { letter: "X", id: "kick", src: "src/components/Heater-6.mp3" },
    { letter: "C", id: "rp4-kick", src: "src/components/RP4_KICK_1.mp3" },
  ];

  const [displaykey, setDisplaykey] = useState("");

  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      handleClick(e.key.toUpperCase());
    });
  }, []);

  // const textDisplay = (selectedAudio) => {
  //   const displaytext = document.getElementById("display");
  //   displaytext.textContent = drums.id;

  const handleClick = (selectedAudio) => {
    const sound = document.getElementById(selectedAudio);
    sound.play();
    setDisplaykey(selectedAudio);
  };

  return (
    <div className="app">
      <Display value={displaykey} />
      {drums.map((drum) => (
        <DrumMachine
          onclick={() => handleClick(drum.letter)}
          clas={"drum-pad"}
          id={drum.id}
          key={drum.id}
          src={drum.src}
          audioId={drum.letter}
        />
      ))}
    </div>
  );
}
export default App;
