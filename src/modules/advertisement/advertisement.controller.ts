import { Controller, Post, Body } from '@nestjs/common';
import { AdvertisementService } from './advertisement.service';
import { Advertisement } from './advertisement.entity';

@Controller('advertisement')
export class AdvertisementController {
  constructor(private readonly advertisementService: AdvertisementService) {}

  @Post()
  createAdvertisement(
    @Body() advertisementData: Partial<Advertisement>,
  ): Promise<Advertisement> {
    return this.advertisementService.createAdvertisement(advertisementData);
  }
}
