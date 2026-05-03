import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    ManyToMany,
    ManyToOne,
    JoinColumn,
} from 'typeorm';
import { WorkoutPlan } from '../../workout-plan/entities/workout-plan.entity';
import { PhysicalTherapist } from '../../physical-therapist/entities/physical-therapist.entity';

@Entity()
export class Workout {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    physicalTherapistId: number;

    @ManyToOne(() => PhysicalTherapist, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'physicalTherapistId' })
    physicalTherapist: PhysicalTherapist;

    @ManyToMany(() => WorkoutPlan, (workoutPlan) => workoutPlan.workouts)
    workoutPlans: WorkoutPlan[];
}
