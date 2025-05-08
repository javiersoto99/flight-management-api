import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Flight } from './schemas/flight.schema';
import { Model } from 'mongoose';
import { CreateFlightDto } from './dto/create-flight.dto';
import { UpdateFlightDto } from './dto/update-flight.dto';

@Injectable()
export class FlightsService {
  constructor(@InjectModel(Flight.name) private flightModel: Model<Flight>) {}

  async create(createFlightDto: CreateFlightDto): Promise<Flight> {
    const newFlight: Flight = new this.flightModel(createFlightDto);

    return newFlight.save();
  }

  async update(id: string, updateFlightDto: UpdateFlightDto): Promise<Flight> {
    const updatedFlight = await this.flightModel
      .findByIdAndUpdate(id, updateFlightDto, { new: true })
      .exec();

    if (!updatedFlight) {
      throw new NotFoundException('Flight not found');
    }

    return updatedFlight;
  }

  async delete(id: string): Promise<Flight> {
    const flightToDelete = await this.flightModel.findByIdAndDelete(id).exec();

    if (!flightToDelete) {
      throw new NotFoundException('Flight not found');
    }

    return flightToDelete;
  }

  async findAll(): Promise<Flight[]> {
    const flights: Flight[] = await this.flightModel.find().exec();

    return flights;
  }
}
