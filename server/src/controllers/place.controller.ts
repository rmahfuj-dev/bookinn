import { Request, Response } from "express";
import PlacesModel from "../models/placesModel.js";

export const getPlaces = async (req: Request, res: Response): Promise<void> => {
  try {
    const isPreview = req.query.preview === "true";

    // 🔥 FULL DATA (no preview)
    if (!isPreview) {
      const places = await PlacesModel.find({});
      res.status(200).json(places);
      return;
    }

    // ⚡ PREVIEW MODE (optimized + trimmed data)
    const places = await PlacesModel.aggregate([
      {
        $project: {
          _id: 0,
          base_url: 1,
          hotels: {
            $map: {
              input: "$hotels",
              as: "h",
              in: {
                name: "$$h.name",
                city: "$$h.city",
                slug: "$$h.slug",
              },
            },
          },
        },
      },
    ]);

    res.status(200).json(places);
  } catch (err) {
    console.error("GET /places error:", err);
    res.status(500).json({
      message: "Server error",
    });
  }
};
