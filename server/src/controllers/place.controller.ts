import { Request, Response } from "express";
import PlacesModel from "../models/placesModel.js";

export const getPlaces = async (req: Request, res: Response): Promise<void> => {
  console.log("🔥 /places API HIT");

  try {
    const places = await PlacesModel.find({});
    res.status(200).json(places);
  } catch (err: unknown) {
    console.error(err);
    res.status(500).json({
      message: "Server error",
    });
  }
};
