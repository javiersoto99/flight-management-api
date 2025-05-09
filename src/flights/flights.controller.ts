import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { FlightsService } from './flights.service';
import { CreateFlightDto, PassengerDto } from './dto/create-flight.dto';
import { UpdateFlightDto } from './dto/update-flight.dto';

@Controller('flights')
export class FlightsController {
  constructor(private readonly flightsService: FlightsService) {}

  @Get()
  findAll() {
    return this.flightsService.findAll();
  }

  @Post()
  create(@Body() createFlightDto: CreateFlightDto) {
    return this.flightsService.create(createFlightDto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFLightDto: UpdateFlightDto) {
    return this.flightsService.update(id, updateFLightDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.flightsService.delete(id);
  }

  @Post(':flightId/passengers')
  addPassenger(
    @Param('flightId') flightId: string,
    @Body() passenger: PassengerDto
  ) {
    return this.flightsService.addPassenger(flightId, passenger);
  }

  @Patch(':flightId/passengers/:passengerId')
  updatePassenger(
    @Param('flightId') flightId: string,
    @Param('passengerId') passengerId: number,
    @Body() passengerData: Partial<PassengerDto>
  ) {
    return this.flightsService.updatePassenger(
      flightId,
      passengerId,
      passengerData
    );
  }

  @Delete(':flightId/passengers/:passengerId')
  deletePassenger(
    @Param('flightId') flightId: string,
    @Param('passengerId') passengerId: number
  ) {
    return this.flightsService.deletePassenger(flightId, passengerId);
  }
}
