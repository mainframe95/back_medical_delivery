import { Body, Controller, Post } from '@nestjs/common';
import { PharmacieService } from './pharmacie.service';
import { AcceptClientRequestDTO } from './dto/acceptClientRequest';

@Controller('pharmacie')
export class PharmacieController {

    constructor(private pharmacieServ: PharmacieService){}

    @Post('accept')
    async acceptRequest(@Body() request: AcceptClientRequestDTO): Promise<any> {
        return await this.pharmacieServ.aceeptClientRequest(request)
    }
}
