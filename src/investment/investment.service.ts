import { Injectable } from "@nestjs/common";
import { InvestmentInsertDTO, InvestmentUpdateDTO, InvestmentInsertResponseDTO, InvestmentUpdateResponseDTO } from "./investment.dto";
import { Investment } from "./investment";

@Injectable()
export class InvestmentService {
    getAll(): string {
        return 'Returning all investments';
    }

    getById(id): string {
        return `Return investment by ID ${id}`
    }

    insert(investmentInsertDTO:InvestmentInsertDTO): InvestmentInsertResponseDTO {
        console.log(investmentInsertDTO.value);
        console.log(investmentInsertDTO.dueDays)
        return new InvestmentInsertResponseDTO(1000.0, true);
    }

    updateById(id: any, investmentUpdateDTO:InvestmentUpdateDTO): InvestmentUpdateResponseDTO {
        console.log(`ID a ser atualizado: ${id}`);

        const randomInvestmentInstance = new Investment(1000, 365); 
        console.log(`Valor inicial ${randomInvestmentInstance.value}`);
        console.log(`Dias de carencia iniciais ${randomInvestmentInstance.dueDays}`);

        return new InvestmentUpdateResponseDTO(investmentUpdateDTO.value, investmentUpdateDTO.dueDays, true);
    }

    deleteById(id: any) {
        return `Investmento ID ${id} deletado.`;
    }
}