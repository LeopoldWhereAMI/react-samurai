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

export const getTrack = (trackId: string) => {
  const promise: Promise<GetTrackDetailOutput> = fetch(
    `https://musicfun.it-incubator.app/api/1.0/playlists/tracks/${trackId}`,
    {
      headers: {
        // "api-key": "57eac800-48c3-4004-801f-bec945cd478f",
      },
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
      headers: {
        // "api-key": "57eac800-48c3-4004-801f-bec945cd478f",
      },
    },
  ).then((res) => res.json());

  return promise;
};
