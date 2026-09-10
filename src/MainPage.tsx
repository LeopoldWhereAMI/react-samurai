import TracksList from "./ui/TracksList";
import TrackDetail from "./ui/TrackDetail";
import { useTrackSelection } from "./bll/useTrackSelection";

export const MainPage = () => {
  const { trackId, setTrackId } = useTrackSelection();

  const handleTrackSelect = (id: string | null) => setTrackId(id);

  return (
    <div style={{ display: "flex", gap: "20px" }}>
      <TracksList onTrackSelect={handleTrackSelect} selectedTrackId={trackId} />
      <TrackDetail trackId={trackId} />
    </div>
  );
};
