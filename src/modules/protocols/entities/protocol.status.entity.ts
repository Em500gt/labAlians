import { Column, Entity, OneToMany, PrimaryGeneratedColumn, } from "typeorm";
import { Protocols } from "./protocols.entitiy";

@Entity()
export class ProtocolStatus {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    status: string;

    @OneToMany(() => Protocols, protocols => protocols.protocolstatus)
    protocols: Protocols[];
}