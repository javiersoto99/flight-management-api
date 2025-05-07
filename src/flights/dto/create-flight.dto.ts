import { Type } from 'class-transformer';
import {
  IsArray,
  IsBoolean,
  IsEnum,
  IsNumber,
  IsString,
  ValidateNested,
} from 'class-validator';
import { FlightCategory } from '../constants';

export class PassengerDto {
  @IsNumber()
  id: number;

  @IsString()
  name: string;

  @IsBoolean()
  hasConnections: boolean;

  @IsNumber()
  age: number;

  @IsEnum(['Black', 'Platinum', 'Gold', 'Normal'])
  flightCategory: FlightCategory;

  @IsString()
  reservationId: string;

  @IsBoolean()
  hasCheckedBaggage: boolean;
}

export class CreateFlightDto {
  @IsString()
  flightCode: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => PassengerDto)
  passengers: PassengerDto[];
}
