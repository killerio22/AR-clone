import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class CurrencyService {
  async getExchangeRates(): Promise<any> {
    try {
      const response = await axios.get(this.apiUrl);
      return response.data;
    } catch (error) {
      throw new Error(`Error fetching exchange rates: ${error.message}`);
    }
  }

  private apiUrl =
    'https://api.privatbank.ua/p24api/pubinfo?exchange&coursid=5';
}
