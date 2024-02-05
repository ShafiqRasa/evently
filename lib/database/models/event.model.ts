import { Document } from "mongodb";
import { Schema, model, models } from "mongoose";

export interface IEvent extends Document {
  _id: String;
  title: string;
  description?: string;
  location?: string;
  createdAt: Date;
  imageUrl: string;
  startDateTime: string;
  endDateTime: string;
  price?: string;
  ifFree: boolean;
  url?: string;
  category: { _id: String; name: String };
  organizer: { _id: String; firstname: String; lastname: String };
}

const EventSchema = new Schema({
  title: { type: String, require: true },
  description: String,
  location: String,
  createdAt: { type: Date, default: Date.now },
  imageUrl: { type: String, require: true },
  startDateTime: { type: String, default: Date.now },
  endDateTime: { type: String, default: Date.now },
  price: String,
  ifFree: { type: Boolean, default: false },
  url: String,
  category: { type: Schema.Types.ObjectId, ref: "Category" },
  organizer: { type: Schema.Types.ObjectId, ref: "User" },
});

const Event = models.Event || model("Event", EventSchema);

export default Event;
