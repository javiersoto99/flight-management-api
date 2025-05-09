import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Flight, Passenger } from './schemas/flight.schema';
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

  async addPassenger(flightId: string, passenger: Passenger): Promise<Flight> {
    const flight = await this.flightModel.findById(flightId).exec();
    if (!flight) {
      throw new NotFoundException('Flight not found');
    }
    flight.passengers.push(passenger);
    return flight.save();
  }

  async updatePassenger(
    flightId: string,
    passengerId: number,
    passengerData: Partial<Passenger>
  ): Promise<Flight> {
    const flight = await this.flightModel.findById(flightId).exec();
    if (!flight) {
      throw new NotFoundException('Flight not found');
    }
    const passengerIndex = flight.passengers.findIndex(
      (p) => p.id === passengerId
    );
    if (passengerIndex === -1) {
      throw new NotFoundException('Passenger not found');
    }
    flight.passengers[passengerIndex] = {
      ...flight.passengers[passengerIndex],
      ...passengerData,
    };
    return flight.save();
  }

  async deletePassenger(
    flightId: string,
    passengerId: number
  ): Promise<Flight> {
    const flight = await this.flightModel.findById(flightId).exec();
    if (!flight) {
      throw new NotFoundException('Flight not found');
    }
    flight.passengers = flight.passengers.filter((p) => p.id !== passengerId);
    return flight.save();
  }
}
