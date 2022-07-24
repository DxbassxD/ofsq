import pepe from "./pepe-gif.gif";
import "./virus-dialog.css";

export const VirusDialog = () => (
  <div className="virus-dialog">
    <img className="virus-dialog__pepe" src={pepe} alt="laughing pepe" />
    <span>Oh No! You've been hacked!!!</span>
  </div>
);
