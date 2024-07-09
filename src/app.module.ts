import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './user/user.module';
import { DataSource } from 'typeorm';
import { User } from './user/user.entity';
import { UsersHttpModule } from './users-http/users-http.module';
import { SearchModule } from './search/search.module';
import { PharmacieModule } from './pharmacie/pharmacie.module';
import { Pharmacie } from './pharmacie/pharmacie.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      //host: './',
      //port: 3306,
      //username: 'root',
      //password: 'root',
      database: 'test.db',
      entities: [User, Pharmacie],
      synchronize: true,
    }),
    UsersModule,
    UsersHttpModule,
    SearchModule,
    PharmacieModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
