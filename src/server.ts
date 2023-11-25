import { config } from "dotenv";

config();

const PORT = parseInt(`${process.env.PORT || 3000}`);

import app from "./app";

app.listen(PORT, () => {
  console.log(`Running on http://localhost:${PORT}`);
});
