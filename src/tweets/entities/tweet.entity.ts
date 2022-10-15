import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TweetDocument = TweetProps & Document

export type TweetProps = {
  content: string;
  screenName: string;
};

@Schema()
export class Tweet {
  constructor(props: TweetProps) {
    Object.assign(this, props);
  }

  @Prop({ required: true })
  content: string;

  @Prop({ required: true })
  screenName: string;
}

export const TweetSchema = SchemaFactory.createForClass(Tweet);
