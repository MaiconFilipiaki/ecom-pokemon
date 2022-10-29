import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostgresqlModule } from './postgresql/postgresql.module';
import Checkout from '../core/checkout/models/checkout';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'postgres',
            password: 'root',
            database: 'pokemon',
            entities: [Checkout],
            synchronize: true,
          }),
        PostgresqlModule
    ],
    exports: [PostgresqlModule]
})
export class ExternalModule {}
