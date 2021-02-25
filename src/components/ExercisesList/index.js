import React from "react";
import Card from "../Card/index";

const ExercisesList = (props) => (
  <div>
    {props.exercises.map((exercise) => {
      return (
        <Card
          key={exercise.id}
          title={exercise.title}
          description={exercise.description}
          img={exercise.img}
          leftColor={exercise.leftColor}
          rigthColor={exercise.rightColor}
        ></Card>
      );
    })}
  </div>
);

export default ExercisesList;
