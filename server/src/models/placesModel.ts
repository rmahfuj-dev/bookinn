import mongoose, { Model, Schema } from "mongoose";

/** Hotel location type */
interface ILocation {
  lat: number;
  lng: number;
}

/** Single hotel type */
interface IHotel {
  name: string;
  city: string;
  slug: string;
  address: string;
  location: ILocation;
}

/** Main document type */
interface IPlace {
  base_url: string;
  hotels: IHotel[];
}

/** Location schema */
const locationSchema = new Schema<ILocation>(
  {
    lat: { type: Number, required: true },
    lng: { type: Number, required: true },
  },
  { _id: false }
);

/** Hotel schema */
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

/** Main schema */
const placeSchema: Schema<IPlace> = new Schema(
  {
    base_url: { type: String, required: true },
    hotels: { type: [hotelSchema], required: true },
  },
  { timestamps: true }
);

/** Model */
const Hotel: Model<IPlace> = mongoose.model("Place", placeSchema);

export default Hotel;