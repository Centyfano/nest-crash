import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { CreateItemDto } from './models/create-item-dto';
import { ItemsService } from './items.service';
import { Item } from './models/item.schema';

@Controller('items')
export class ItemsController {
  constructor(private itemsService: ItemsService) {}

  @Get()
  getItems(): Promise<Item[]> {
    return this.itemsService.findAllItems();
  }

  @Get(':id')
  getItem(@Param() param: any): Promise<Item> {
    return this.itemsService.findOneItem(param.id);
  }

  @Post()
  createItem(@Body() itemDto: CreateItemDto): Promise<Item> {
    return this.itemsService.createItem(itemDto);
  }

  @Delete(':id')
  deleteItem(@Param('id') id: string): Promise<Item> {
    return this.itemsService.deleteItem(id);
  }

  @Put(':id')
  updateItem(
    @Body() itemDto: CreateItemDto,
    @Param('id') id: string,
  ): Promise<Item> {
    return this.itemsService.updateItem(itemDto, id);
  }
}
