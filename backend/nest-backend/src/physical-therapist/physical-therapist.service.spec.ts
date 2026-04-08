import { Test, TestingModule } from '@nestjs/testing';
import { PhysicalTherapistService } from './physical-therapist.service';

describe('PhysicalTherapistService', () => {
  let service: PhysicalTherapistService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PhysicalTherapistService],
    }).compile();

    service = module.get<PhysicalTherapistService>(PhysicalTherapistService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
