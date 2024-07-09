import { Test, TestingModule } from '@nestjs/testing';
import { PharmacieController } from './pharmacie.controller';

describe('PharmacieController', () => {
  let controller: PharmacieController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PharmacieController],
    }).compile();

    controller = module.get<PharmacieController>(PharmacieController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
