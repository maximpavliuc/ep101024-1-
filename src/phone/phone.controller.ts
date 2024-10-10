import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { PhoneService } from './phone.service';
import { Phone } from './phone.entity/phone.entity';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('phones') 
@Controller('phones')
export class PhoneController {
  constructor(private readonly phoneService: PhoneService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new phone' })
  create(@Body() phone: Phone) {
    return this.phoneService.create(phone);
  }

  @Get()
  @ApiOperation({ summary: 'Get all phones' })
  findAll() {
    return this.phoneService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a phone by ID' })
  findOne(@Param('id') id: string) {
    return this.phoneService.findOne(+id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a phone by ID' })
  update(@Param('id') id: string, @Body() phone: Phone) {
    return this.phoneService.update(+id, phone);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a phone by ID' })
  remove(@Param('id') id: string) {
    return this.phoneService.remove(+id);
  }
}
