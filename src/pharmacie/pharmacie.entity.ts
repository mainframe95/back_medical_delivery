import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Pharmacie {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nom: string;

    @Column()
    adresse: string;

    @Column()
    boitePostale: string;

    @Column()
    pharmacienPrincipal: string;

    @Column()
    telFixe: string;

    @Column()
    telMobile: string;

    @Column()
    gps: string;

    @Column()
    ville: string;

    @Column()
    quartier: string;

    @Column()
    pays: string;
    
    @Column()
    region: string;
}
