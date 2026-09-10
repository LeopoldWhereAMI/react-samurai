export type GetTrackDeatailsOutputData = {
  id: string;
  attributes: {
    title: string;
    lyrics: string | null;
  };
};

export type GetTrackDetailOutput = {
  data: GetTrackDeatailsOutputData;
};

const prepareHeaders = () => {
  const apiKey = import.meta.env.VITE_API_KEY;
  if (!apiKey) return undefined;

  return {
    "api-key": apiKey,
  };
};

export const getTrack = (trackId: string) => {
  const promise: Promise<GetTrackDetailOutput> = fetch(
    `https://musicfun.it-incubator.app/api/1.0/playlists/tracks/${trackId}`,
    {
      headers: prepareHeaders(),
    },
  ).then((res) => res.json());

  return promise;
};

export type AttachmentDto = {
  url: string;
};

export type TrackListItemOutputAttributes = {
  title: string;
  attachments: AttachmentDto[];
};

export type TrackListItemOutput = {
  id: string;
  attributes: TrackListItemOutputAttributes;
};

export type GetTrackListOutput = {
  data: TrackListItemOutput[];
};

export const getTracks = () => {
  const promise: Promise<GetTrackListOutput> = fetch(
    "https://musicfun.it-incubator.app/api/1.0/playlists/tracks",
    {
      headers: prepareHeaders(),
    },
  ).then((res) => res.json());

  return promise;
};
