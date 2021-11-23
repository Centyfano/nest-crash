import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateItemDto } from './models/create-item-dto';
import { Item, ItemDocument } from './models/item.schema';

@Injectable()
export class ItemsService {
  constructor(@InjectModel(Item.name) private itemModel: Model<ItemDocument>) {}

  async findAllItems(): Promise<Item[]> {
    return this.itemModel.find().exec();
  }

  async findOneItem(id: string): Promise<Item> {
    return this.itemModel.findById(id);
  }

  async createItem(createItemDto: CreateItemDto): Promise<Item> {
    const item = new this.itemModel(createItemDto);
    return item.save();
  }

  async updateItem(updateItemDto: CreateItemDto, id: string): Promise<Item> {
    return this.itemModel.findByIdAndUpdate(id, updateItemDto, { new: true });
  }

  async deleteItem(id: string) {
    return this.itemModel.findByIdAndDelete(id);
  }
}
