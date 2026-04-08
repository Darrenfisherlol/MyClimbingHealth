import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Patient } from "../../patient/entities/patient.entity";

@Entity()
export class PhysicalTherapist {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany(() => Patient,
        (patient) => patient.physicalTherapist)
    patients: Patient[]

}
