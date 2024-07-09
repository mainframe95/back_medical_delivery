import { Injectable } from '@nestjs/common';
import { Search } from './search.interface';

@Injectable()
export class SearchService {


    async sendDemand(text: Search): Promise<any> {
        return text
    }
    
}
