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
import { CreateFlightDto } from './dto/create-flight.dto';
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
}
