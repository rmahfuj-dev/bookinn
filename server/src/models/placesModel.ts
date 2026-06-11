import mongoose, { Schema, Model } from "mongoose";

interface ILocation {
  lat: number;
  lng: number;
}

interface IHotel {
  name: string;
  city: string;
  slug: string;
  address: string;
  location: ILocation;
}

interface IHotelsDocument {
  base_url: string;
  hotels: IHotel[];
}

const locationSchema = new Schema<ILocation>(
  {
    lat: { type: Number, required: true },
    lng: { type: Number, required: true },
  },
  { _id: false }
);

const hotelSchema = new Schema<IHotel>(
  {
    name: { type: String, required: true },
    city: { type: String, required: true },
    slug: { type: String, required: true },
    address: { type: String, required: true },
    location: { type: locationSchema, required: true },
  },
  { _id: false }
);

const placesSchema = new Schema<IHotelsDocument>(
  {
    base_url: { type: String, required: true },
    hotels: { type: [hotelSchema], required: true },
  },
  { timestamps: true }
);

/**
 * IMPORTANT:
 * - Model name: "HotelsData"
 * - Collection: "hotels" (your real MongoDB collection)
 */
const PlacesModel: Model<IHotelsDocument> = mongoose.model(
  "HotelsData",
  placesSchema,
  "hotels"
);

export default PlacesModel;