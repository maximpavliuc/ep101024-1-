import { Module } from '@nestjs/common';
import { PhoneModule } from './phone/phone.module';

@Module({
  imports: [PhoneModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
