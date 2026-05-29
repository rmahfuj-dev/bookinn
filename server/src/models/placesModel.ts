import mongoose, { Model, Schema } from "mongoose";
interface IPlace {
  name: string;
  image: string;
  description: string;
}

const placeSchema: Schema<IPlace> = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    image: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

const Place: Model<IPlace> = mongoose.model("Place",placeSchema);
export default Place;
