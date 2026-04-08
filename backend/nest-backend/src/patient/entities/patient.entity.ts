import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import {PhysicalTherapist} from "../../physical-therapist/entities/physical-therapist.entity";

@Entity()
export class Patient {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    physicalTherapistId: number;

    @ManyToOne(() => PhysicalTherapist, (physicalTherapist) => physicalTherapist.patients)
    @JoinColumn({ name: 'physicalTherapistId' })
    physicalTherapist: PhysicalTherapist
}
