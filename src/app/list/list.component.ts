import { Component, OnInit } from '@angular/core';
import { ReciepeService } from '../reciepe.service';
import { Reciepe } from '../models/Reciepe';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-list',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent implements OnInit {
  editingId: number | null = null;
  constructor(private recieveService: ReciepeService) {}
  reciepes: Reciepe[] = [];
  recieceForm = new FormGroup({
    name: new FormControl('', {
      nonNullable: true,
      validators: Validators.required,
    }),
    cuisine: new FormControl('', {
      nonNullable: true,
      validators: Validators.required,
    }),
    prepTime: new FormControl('', {
      nonNullable: true,
      validators: Validators.required,
    }),
    vegetarian: new FormControl(false, {
      nonNullable: true,
      validators: Validators.required,
    }),
    dateCreated: new FormControl('', {
      nonNullable: true,
      validators: Validators.required,
    }),
  });
  ngOnInit(): void {
    this.getReciepes();
  }
  getReciepes() {
    this.recieveService.getReciepes().subscribe((r) => (this.reciepes = r));
  }
  addReciepes(r: Reciepe) {
    r.id = Date.now();
    this.recieveService.addReciepe(r).subscribe((created) => {
      this.reciepes = [...this.reciepes, created];
    });
  }

  startEdit(r: Reciepe) {
    this.recieceForm.patchValue({
      name: r.name,
      cuisine: r.cuisine,
      vegetarian: Boolean(r.vegetarian),
      dateCreated: r.createdDate,
      prepTime: String(r.prepTime),
    });
  }
  onSubmit() {}
}
