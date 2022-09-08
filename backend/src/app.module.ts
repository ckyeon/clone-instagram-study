import { Module } from '@nestjs/common';
import {BackendConfigModule} from "./config/config.module";
import { BackendDatabaseModule } from './backend-database/backend-database.module';
import { AuthModule } from './auth/auth.module';
import { BackendDatabaseModule } from './backend-database/backend-database.module';

@Module({
  imports: [BackendConfigModule, BackendDatabaseModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
