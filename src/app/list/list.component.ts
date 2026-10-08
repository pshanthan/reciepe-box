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
    cusine: new FormControl('', {
      nonNullable: true,
      validators: Validators.required,
    }),
    prepTime: new FormControl('', {
      nonNullable: true,
      validators: Validators.required,
    }),
    vegetarian: new FormControl('', {
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
    this.recieveService.addReciepe(r).subscribe((created) => {
      this.reciepes = [...this.reciepes, created];
    });
  }
  deleteReciepe(id: number) {
    this.recieveService.deleteReciepe(id).subscribe(() => {
      this.reciepes = this.reciepes.filter((r) => r.id !== id);
    });
  }
  updateReciepe(r: Reciepe) {
    this.recieveService.updateReciepe(r).subscribe((r) => {
      const found = this.reciepes.filter((reciepe) => r.id === reciepe.id);
      if (found) {
      }
    });
  }
  startEdit(r: Reciepe) {
    this.recieceForm.patchValue({
      name: r.name,
      cusine: r.cuisine,
      vegetarian: String(r.vegetarian),
      dateCreated: r.createdDate,
      prepTime: String(r.prepTime),
    });
  }
  onSubmit() {}
}
