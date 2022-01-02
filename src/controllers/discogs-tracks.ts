import Track from "../../database/models/track/model";
import Artist from "../../database/models/artist/model";
import Release from "../../database/models/release/model";
import { Op, Sequelize } from "sequelize";
import sequelize from "sequelize";

const rawBaseSql = `
  SELECT 
  releases.id as release_id
  , master_id
  , tracks.title as track
  , releases.title as release_title
  , artists.name as artist
  , country
  , release_date
  FROM releases
  LEFT JOIN 
  artist_releases                                                                                     
  ON releases.id = artist_releases.release_id
  LEFT JOIN 
  tracks
  ON tracks.release_id = releases.id
  LEFT JOIN
  track_artists
  ON track_artists.track_id = tracks.id
  INNER JOIN 
  artists
  ON artist_releases.artist_id = artists.id OR track_artists.artist_id = artists.id
`;

export type SearchForSimilarTracksArgs = {
  artist: {
    operator: "like" | "equal";
    value: string;
  };
  track: {
    operator: "like" | "equal";
    value: string;
  };
  vinylOnly: boolean;
  includeUnknownArtist: boolean;
};

export default async function searchForSimilarTracks(
  sequelize: Sequelize,
  { artist, track, includeUnknownArtist }: SearchForSimilarTracksArgs
) {}
