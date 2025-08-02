import express from "express";
import cors from "cors";
import multer from "multer";

const upload = multer({ dest: "uploads/" });

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.json({ status: "All good :)" });
});

app.post("/upload/pdf", upload.single("pdf"), (req, res) => {
  return res.json({ message: "Uploaded" });
});

app.listen(8000, () => console.log(`Server is running on port ${8000}`));
