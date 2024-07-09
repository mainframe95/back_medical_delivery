import { IsString } from "class-validator";



export class AcceptClientRequestDTO {

    @IsString()
    requestId: string;

}