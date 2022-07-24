import "./youtube-embed.css";

export const YoutubeEmbed = ({ embedId }) => (
  <div className="youtube-embed">
    <iframe
      className="youtube-embed__iframe"
      width="853"
      height="480"
      src={`https://www.youtube.com/embed/${embedId}?autoplay=1&mute=1`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);
