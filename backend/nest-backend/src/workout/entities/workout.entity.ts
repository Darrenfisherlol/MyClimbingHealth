import {Entity, Column, PrimaryGeneratedColumn, ManyToMany} from 'typeorm';
import {WorkoutPlan} from "../../workout-plan/entities/workout-plan.entity";

@Entity()
export class Workout {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @ManyToMany(() => WorkoutPlan, (workoutPlan) => workoutPlan.workouts)
    workoutPlans: WorkoutPlan[];
}
