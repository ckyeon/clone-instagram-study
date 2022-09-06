import {Injectable} from "@nestjs/common";
import {MongooseModuleOptions, MongooseOptionsFactory} from "@nestjs/mongoose";
import {ConfigService} from "@nestjs/config";

@Injectable()
export class MongoConfigService implements MongooseOptionsFactory {
    constructor(
        private configService: ConfigService,
    ){}
    createMongooseOptions(): MongooseModuleOptions {
        return {
            uri: this.configService.get<string>('MONGO_URI'),
        };
    }
}