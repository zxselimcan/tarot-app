import { Module } from '@nestjs/common';
import { OpenrouterService } from './openrouter.service';

@Module({
  providers: [OpenrouterService]
})
export class OpenrouterModule {}
