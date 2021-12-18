import initDB from "./sequelize/initDB";

(async () => {
  await initDB();
  console.log("db setup done");

  // the express server will live here
})();
