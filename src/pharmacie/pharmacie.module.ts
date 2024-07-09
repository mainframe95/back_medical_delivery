import { Module } from '@nestjs/common';
import { PharmacieController } from './pharmacie.controller';
import { PharmacieService } from './pharmacie.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pharmacie } from './pharmacie.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Pharmacie])],
  controllers: [PharmacieController],
  providers: [PharmacieService],
  exports: [TypeOrmModule]
})
export class PharmacieModule {}
