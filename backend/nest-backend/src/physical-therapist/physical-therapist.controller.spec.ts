import { Test, TestingModule } from '@nestjs/testing';
import { PhysicalTherapistController } from './physical-therapist.controller';
import { PhysicalTherapistService } from './physical-therapist.service';

describe('PhysicalTherapistController', () => {
  let controller: PhysicalTherapistController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PhysicalTherapistController],
      providers: [PhysicalTherapistService],
    }).compile();

    controller = module.get<PhysicalTherapistController>(
      PhysicalTherapistController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
