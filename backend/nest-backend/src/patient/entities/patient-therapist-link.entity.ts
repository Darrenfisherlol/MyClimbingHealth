import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
  Unique,
} from 'typeorm';
import { Patient } from './patient.entity';
import { PhysicalTherapist } from '../../physical-therapist/entities/physical-therapist.entity';

/** One patient account can be linked to multiple PTs (multiple codes over time). */
@Entity()
@Unique(['patientId', 'physicalTherapistId'])
export class PatientTherapistLink {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  patientId: number;

  @ManyToOne(() => Patient, (p) => p.therapistLinks, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'patientId' })
  patient: Patient;

  @Column()
  physicalTherapistId: number;

  @ManyToOne(() => PhysicalTherapist, (pt) => pt.patientLinks, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'physicalTherapistId' })
  physicalTherapist: PhysicalTherapist;

  @CreateDateColumn()
  linkedAt: Date;
}
