import app from "./app";

const PORT = Number(process.env.PORT) || 3000;
const server = app.listen(PORT, () => {
  console.info(`Service is listening at http://localhost:${PORT}`);
});

export default server;
