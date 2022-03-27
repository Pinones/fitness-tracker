import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Exercise } from '../exercise.model';


import { TrainingService } from '../training.service';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.scss']
})
export class NewTrainingComponent implements OnInit {
  exercices: Exercise[] = [];
  constructor(private trainingService: TrainingService) { }

  ngOnInit(): void {
    //this.exercices = this.trainingService.getAvailableExercies();
    //this.db.collection('availableExercises').valueChanges().subscribe(result => console.log(result))
  }

  onStartTraining(form: NgForm) {
    this.trainingService.startExercise(form.value.exercise);
  }

}
