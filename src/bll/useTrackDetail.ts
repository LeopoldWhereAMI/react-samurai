import { useEffect, useState } from "react";
import { getTrack, type GetTrackDeatailsOutputData } from "../dal/api";

export function useTrackDetail(trackId: string | null) {
  const [trackDetails, setTrackDetails] =
    useState<GetTrackDeatailsOutputData | null>(null);

  useEffect(() => {
    if (!trackId) {
      // eslint-disable-next-line
      setTrackDetails(null);
      return;
    }

    getTrack(trackId).then((json) => setTrackDetails(json.data));
  }, [trackId]);

  return { trackDetails };
}
