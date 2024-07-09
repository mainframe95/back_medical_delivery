import { Body, Controller, Post } from '@nestjs/common';
import { Search } from './search.interface';
import { SearchService } from './search.service';

@Controller('search')
export class SearchController {
    constructor( private searchServ: SearchService) {}

    @Post()
    async search(@Body() text: Search): Promise<any> {
        return this.searchServ.sendDemand(text);
    }
}
