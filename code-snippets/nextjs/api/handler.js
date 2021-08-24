import dbConnect from "../../../utils/dbConnect";
import Article from "../../../models/Article";

export default async function handler(req, res) {
  // Připoj se k databází
  await dbConnect();

  //   Pokud se jedná o REST GET volání
  if (req.method === "GET") {
    const limit = 3;
    // Najdi první tři články v databázi
    const articles = await Article.find({}).limit(limit);
    // Odešli klientovi JSON data
    res.json(articles);
  }
}
