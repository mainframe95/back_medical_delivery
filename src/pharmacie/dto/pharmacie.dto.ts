import { IsAlphanumeric, IsString } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


export class PharmacieDTO {
    @PrimaryGeneratedColumn()
    id: number;

    @IsString()
    nom: string;

    @IsString()
    adresse: string;

    @IsString()
    boitePostale: string;

    @IsString()
    pharmacienPrincipal: string;

    @IsString()
    telFixe: any;

    @IsString()
    telMobile: any;

    @IsAlphanumeric()
    gps: string;

    @IsString()
    pays: string;
    
    @IsString()
    region: string;

    @IsString()
    ville: string;

    @IsString()
    quartier: string;

}
