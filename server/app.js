import express from "express";
import cors from "cors";
import { createNote, getAllNotes } from "./controllers/note.controller.js";
import connectDb from "./config/database.js";

const app = express();
app.use(express.json());
app.use(cors());

app.post("/note", async (req, res) => {
  const { title, description, completed } = req.body;
  const note = await createNote(title, description);
  res.json({ success: true, message: "Note created Successfully!", note });
});

app.get("/notes", async (req, res) => {
  const notes = await getAllNotes();
  res.json({ success: true, message: "Notes found successfully", notes });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  connectDb();
  console.log(`Server is running badly on port http://localhost:${PORT}`);
});
