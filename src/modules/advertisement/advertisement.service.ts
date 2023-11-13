import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Advertisement } from './advertisement.entity';

@Injectable()
export class AdvertisementService {
  constructor(
    @InjectRepository(Advertisement)
    private readonly advertisementRepository: Repository<Advertisement>,
  ) {}

  async getAdvertisementInfo(advertisementId: number): Promise<Advertisement> {
    try {
      const advertisement: Advertisement | undefined =
        await this.advertisementRepository.findOne({
          where: { id: advertisementId },
        });

      if (!advertisement) {
        throw new Error(`Advertisement with ID ${advertisementId} not found`);
      }

      return advertisement;
    } catch (error) {
      throw new Error(`Error getting advertisement info: ${error.message}`);
    }
  }

  async createAdvertisement(
    advertisementData: Partial<Advertisement>,
  ): Promise<Advertisement> {
    try {
      const newAdvertisement =
        this.advertisementRepository.create(advertisementData);
      return await this.advertisementRepository.save(newAdvertisement);
    } catch (error) {
      throw new Error(`Error creating advertisement: ${error.message}`);
    }
  }
}
