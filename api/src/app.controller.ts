import { Body, Controller, Post } from '@nestjs/common';
import { OpenrouterService } from './openrouter/openrouter.service';

@Controller()
export class AppController {
  constructor(private readonly openrouterService: OpenrouterService) {}

  @Post('tarot/reading')
  async getTarotReading(@Body() body: any): Promise<string> {
    return await this.openrouterService.generateTarotReading(
      body.question,
      body.language,
      body.spread,
      body.spreadType,
    );
  }
}
