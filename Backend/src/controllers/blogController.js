const db = require("../config/db");
const ogs = require("open-graph-scraper");

exports.getAllBlogs = async (req, res) => {
  const [rows] = await db.promise().query("SELECT * FROM blog_articles ORDER BY created_at DESC");
  res.json(rows);
};

exports.addBlog = async (req, res) => {
  const { url, title } = req.body;

  try {
    const { result } = await ogs({ url });
    const image = result.ogImage?.url || null;

    await db.promise().query(
      "INSERT INTO blog_articles (url, title, image) VALUES (?, ?, ?)",
      [url, title, image]
    );

    res.json({ message: "Article added with image" });
  } catch (error) {
    console.error("Error scraping article:", error.message);
    res.status(500).json({ error: "Failed to fetch article metadata." });
  }
};
