import "./App.css";
import { VirusDialog } from "./virus-dialog";
import { YoutubeEmbed } from "./youtube-embed";

function App() {
  return (
    <div className="app">
      <VirusDialog />
      <YoutubeEmbed embedId="7a72D3TCIxY" />
    </div>
  );
}

export default App;
