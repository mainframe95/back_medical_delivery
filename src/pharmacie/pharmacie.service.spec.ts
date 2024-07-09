import { Test, TestingModule } from '@nestjs/testing';
import { PharmacieService } from './pharmacie.service';

describe('PharmacieService', () => {
  let service: PharmacieService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PharmacieService],
    }).compile();

    service = module.get<PharmacieService>(PharmacieService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
