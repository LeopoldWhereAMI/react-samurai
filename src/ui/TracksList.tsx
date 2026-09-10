import { useTracks } from "../bll/useTracks";
import TrackItem from "./TrackItem";
import styles from "./TracksList.module.css";

type Props = {
  onTrackSelect: (id: string | null) => void;
  selectedTrackId: string | null;
};

const TracksList = ({ selectedTrackId, onTrackSelect }: Props) => {
  const { tracks } = useTracks();

  if (tracks === null) {
    return <span>Loading...</span>;
  }

  if (tracks.length === 0) {
    return <span>No tracks</span>;
  }

  const handleResetClick = () => onTrackSelect?.(null);
  const handleClick = (trackId: string) => onTrackSelect?.(trackId);

  return (
    <div>
      <button onClick={handleResetClick}>Reset</button>
      <hr />
      <ul className={styles.tracks}>
        {tracks.map((track) => (
          <TrackItem
            key={track.id}
            track={track}
            isSelected={track.id === selectedTrackId}
            onSelect={handleClick}
          />
        ))}
      </ul>
    </div>
  );
};

export default TracksList;
