import Track from "../../database/models/track/model";
import Artist from "../../database/models/artist/model";
import Release from "../../database/models/release/model";
import { Op, Sequelize } from "sequelize";
import sequelize from "sequelize";

// this is the very beginning of the discogs tracks implementation
// const test = await Release.findAll({
//   include: [
//     {
//       model: Artist,
//       as: "artists",
//       where: {
//         name: {
//           $iLike:`%${artistName}%`,
//         },
//       },
//     },
//     {
//       model: Track,
//       as: "tracks",
//       where: {
//         title: {
//           $iLike: `%${trackName}%`,
//         },
//       },
//       include: [
//         {
//           model: Artist,
//           as: "artists",
//         },
//       ],
//     },
//   ],
// });

export type SearchForSimilarTracksArgs = {
  trackName: string;
  lScore: number;
  artistName?: string;
  artistId?: number;
};

export default async function searchForSimilarTracks(
  sequelize: Sequelize,
  { lScore = 2, trackName, artistName, artistId }: SearchForSimilarTracksArgs
) {
  if (!artistName && !artistId)
    throw "You need to specify an artist name or id";

  if (artistName) {
    // const test = await sequelize.query();
    return {};
  } else {
  }
}
