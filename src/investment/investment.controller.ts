import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import {InvestmentService} from "./investment.service";
import { InvestmentInsertDTO, InvestmentUpdateDTO } from "./investment.dto";

@Controller('/investments')
export class InvestmentController {
    constructor(private readonly investmentService: InvestmentService) {}

    @Get()
    getInvestments(): string {
        return this.investmentService.getAll();
    }

    @Get(':id')
    getInvestmentById(@Param('id') id: any): string {
        return this.investmentService.getById(id);
    }

    @Post()
    insertInvestment(@Body() investmentInsertDTO : InvestmentInsertDTO) {
        return this.investmentService.insert(investmentInsertDTO);
    }

    @Put(':id')
    updateInvestment(@Param('id') id: any, @Body() investmentUpdateDTO : InvestmentUpdateDTO) {
        return this.investmentService.updateById(id, investmentUpdateDTO);
    }

    @Delete(':id')
    deleteInvestmentById(@Param('id') id: any) {
        return this.investmentService.deleteById(id);
    }
}