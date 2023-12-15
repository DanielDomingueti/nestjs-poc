import { Module } from '@nestjs/common';
import { InvestmentController } from './investment/investment.controller';
import { InvestmentService } from './investment/investment.service';

@Module({
  imports: [],
  controllers: [InvestmentController],
  providers: [InvestmentService],
})
export class AppModule {}
