import { Injectable } from '@nestjs/common';
import { AcceptClientRequestDTO } from './dto/acceptClientRequest';

@Injectable()
export class PharmacieService {


    async aceeptClientRequest(req: AcceptClientRequestDTO): Promise<any> {
        return req.requestId
    }
}
