import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { PatientTherapistLink } from '../../patient/entities/patient-therapist-link.entity';

@Entity()
export class PhysicalTherapist {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  userId: number;

  @OneToOne(() => User, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'userId' })
  user: User;

  // Shown to patients when they sign up to link to this PT.
  // well have an that has this code or somethign to join program
  @Column({ unique: true, length: 16 })
  joinCode: string;

  @OneToMany(() => PatientTherapistLink, (link) => link.physicalTherapist)
  patientLinks: PatientTherapistLink[];
}
