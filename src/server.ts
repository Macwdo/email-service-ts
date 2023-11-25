import { config } from "dotenv";
import "module-alias/register";
import app from "@src/app";

config();

const PORT = parseInt(`${process.env.PORT || 3000}`);

app.listen(PORT, () => {
  console.log(`Running on http://localhost:${PORT}`);
});
