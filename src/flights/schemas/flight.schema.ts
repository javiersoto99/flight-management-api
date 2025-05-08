import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { FlightCategory } from '../flights.constants';

export class Passenger {
  @Prop({ required: true })
  id: number;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  hasConnections: boolean;

  @Prop({ required: true })
  age: number;

  @Prop({ required: true, enum: ['Black', 'Platinum', 'Gold', 'Normal'] })
  flightCategory: FlightCategory;

  @Prop({ required: true })
  reservationId: string;

  @Prop({ required: true })
  hasCheckedBaggage: boolean;
}

@Schema({ timestamps: true })
export class Flight extends Document {
  @Prop({ required: true, unique: true })
  flightCode: string;

  @Prop({ type: [Object], required: true })
  passengers: Passenger[];
}

export const FlightSchema = SchemaFactory.createForClass(Flight);
