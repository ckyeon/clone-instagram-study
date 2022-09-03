import { Module } from '@nestjs/common';
import {ConfigModule} from "@nestjs/config";
import {validationSchema} from "./validation-schema";
import { join } from 'path';

const configFilePath = join(__dirname,'../config');
const envFilePath = [join(configFilePath, `.${process.env['NODE' + 'ENV'] || `development`}.env`),];

@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath,
            isGlobal: true,
            validationSchema,
        }),
    ],
})

export class BackendConfigModule {}