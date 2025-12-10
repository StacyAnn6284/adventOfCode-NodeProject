import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const __dirname = path.dirname(fileURLToPath(import.meta.url));

app.use(express.static(path.join(__dirname, "public")));

app.get("/api/day/:day", async (req, res) => {
  const day = req.params.day;
  try {
    const modulePath = path.join(
      __dirname,
      "2025",
      `day${day}`,
      `day${day}.js`
    );
    const fileUrl = "file://" + modulePath;
    const { solve } = await import(fileUrl);

    if (typeof solve !== "function") {
      throw new Error("No solve function found");
    }

    const result = solve();
    res.json({ day, result });
  } catch (err) {
    res.status(500).json({ error: "Could not load solution for Day " + day });
    console.error(err);
  }
});

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
