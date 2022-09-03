import { Module } from '@nestjs/common';
import {BackendConfigModule} from "./config/config.module";

@Module({
  imports: [BackendConfigModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
