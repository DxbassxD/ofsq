import "./App.css";
import { VirusDialog } from "./virus-dialog";
import { YoutubeEmbed } from "./youtube-embed";

function App() {
  return (
    <div className="app">
      <YoutubeEmbed embedId="7a72D3TCIxY" />
      <VirusDialog />
    </div>
  );
}

export default App;
