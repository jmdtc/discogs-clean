import initDB from "./sequelize/initDB";
import express, { Request } from "express";
import searchForSimilarTracks, {
  SearchForSimilarTracksArgs,
} from "./controllers/discogs-tracks";

(async () => {
  const sequelize = await initDB();
  console.log("db setup done");

  const app = express();
  const port = 3000;

  app.listen(port, () => {
    console.log(`server is listening on port: ${port}`);
  });

  app.get(
    "/tracks/multiple-releases",
    async (
      req: Request<unknown, unknown, unknown, SearchForSimilarTracksArgs>,
      res
    ) => {
      const data = await searchForSimilarTracks(sequelize, req.query);
      // console.log(data?.length);

      res.json(data);
    }
  );
})();
