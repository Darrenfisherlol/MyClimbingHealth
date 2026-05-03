import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    JoinTable,
    ManyToMany,
    ManyToOne,
    JoinColumn,
} from 'typeorm';
import { Workout } from '../../workout/entities/workout.entity';
import { PhysicalTherapist } from '../../physical-therapist/entities/physical-therapist.entity';

@Entity()
export class WorkoutPlan {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    physicalTherapistId: number;

    @ManyToOne(() => PhysicalTherapist, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'physicalTherapistId' })
    physicalTherapist: PhysicalTherapist;

    // owner side TypeORM auto-creates the join table for many-to-many
    @ManyToMany(() => Workout, (workout) => workout.workoutPlans)
    @JoinTable()
    workouts: Workout[];
}
