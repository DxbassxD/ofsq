import pepe from "./pepe-gif.gif";
import "./virus-dialog.css";

export const VirusDialog = () => (
  <dialog className="virus-dialog" open>
    <img className="virus-dialog__pepe" src={pepe} alt="laughing pepe" />
    <span>Oh No! You've been hacked!!!</span>
  </dialog>
);
