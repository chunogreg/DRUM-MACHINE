const DrumMachine = ({ clas, id, src, audioId, onclick }) => {
  const sound = (id) => {
    document.getElementById(id).play().catch(console.error);
  };
  return (
    <div id="drum-machine">
      <button onClick={onclick} className={clas} id={id}>
        <audio className="clip" id={audioId} src={src}></audio> {audioId}
      </button>
    </div>
  );
};
export default DrumMachine;
