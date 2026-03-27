import React from 'react';
import { Navigate,Link } from 'react-router';



interface MyClimbProps {

}

var Holds = [
  "Crimp",
  "Sloper",
  "Jug",
  "Pocket",
  "Pinch"
];

const TrainingPlans = [
  "1 On 1 Off",
  "1 On 2 Off",
  "Kilter Borad",
  "Moon Borad",
  "Pull ups",
  "Block Pinch",
  "Jump & Grads"
];

function AddToTrainingPlan() {

}

function CreateNewTrainingPlan() {

}


export default function ClimbingJournal() {
  


    return (
    
    <>
        <h1>My Climb</h1>

        
        
        <div>
            <div>
                <div>Monthly Climbs: 5</div>
                <div>Most common workout: Kilter Board</div>
                <div>Last workout: Pull Ups</div>
            </div>
            <div>
                chart showing count of climbs rolling monrth
            </div>
        </div>

        <div>
            <div>
                Add new climb
            </div>
            <div>
                Start a workout
            </div>
            <div>
                Add new climb
            </div>
        </div>



    </>
  );
}


