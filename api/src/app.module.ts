import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { OpenrouterModule } from './openrouter/openrouter.module';
import { ConfigModule } from '@nestjs/config';
import { OpenrouterService } from './openrouter/openrouter.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    OpenrouterModule,
  ],
  controllers: [AppController],
  providers: [OpenrouterService],
})
export class AppModule {}
