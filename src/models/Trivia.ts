import {
  ModelOptions,
  Severity,
  getModelForClass,
  index,
  post,
  prop,
} from "@typegoose/typegoose";
import mongoose from "mongoose";

@ModelOptions({
  schemaOptions: {
    timestamps: true,
    collection: "trivia",
  },
  options: {
    allowMixed: Severity.ALLOW,
  },
})
@index({ title: 1 })
class TriviaClass {
  @prop({ required: true })
  slug: string;

  @prop({ default: 1 })
  completedCount: number;
}

const Trivia = getModelForClass(TriviaClass);
export { Trivia, TriviaClass };
