import { Test, TestingModule } from '@nestjs/testing';
import { CheckoutPostgresService } from './checkout-postgres.service';

describe('CheckoutPostgresService', () => {
  let service: CheckoutPostgresService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CheckoutPostgresService],
    }).compile();

    service = module.get<CheckoutPostgresService>(CheckoutPostgresService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
