import Track from "../sequelize/models/track/model";
import Artist from "../sequelize/models/artist/model";
import Release from "../sequelize/models/release/model";

// this is the very beginning of the discogs tracks implementation

// const test = await Release.findAll({
//   include: [
//     {
//       model: Artist,
//       as: "artists",
//       where: {
//         name: {
//           [Op.iLike]: "%herbert%",
//         },
//       },
//     },
//     {
//       model: Track,
//       as: "tracks",
//       where: {
//         title: {
//           [Op.iLike]: "%make the music%",
//         },
//       },
//     },
//   ],
// });
// console.log(test);

type SearchForSimilarTracksArgs = {
  artistName?: string;
  artistId?: number;
  trackName: string;
  releaseName?: string;
  releaseId?: number;
};

export default async function searchForSimilarTracks({
  artistName,
  artistId,
  trackName,
  releaseName,
  releaseId,
}: SearchForSimilarTracksArgs) {
  if (!artistName && !artistId)
    throw "You need to specify an artist name or id";
  if (!releaseName && !releaseId)
    throw "You need to specify a release name or id";

  if (artistName) {
    const test = await Artist.findAll({
      where: { name: { lower: artistName } },
      include: [Track],
    });
  } else {
  }
}
