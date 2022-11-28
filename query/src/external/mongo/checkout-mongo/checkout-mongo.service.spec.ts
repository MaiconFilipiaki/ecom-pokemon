import { Test, TestingModule } from '@nestjs/testing';
import { CheckoutMongoService } from './checkout-mongo.service';

describe('CheckoutMongoService', () => {
  let service: CheckoutMongoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CheckoutMongoService],
    }).compile();

    service = module.get<CheckoutMongoService>(CheckoutMongoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
