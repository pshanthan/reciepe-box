import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Reciepe } from '../models/Reciepe';
import { CommonModule } from '@angular/common';
import { PrepTimePipe } from '../pipes/prep-time.pipe';
import { VegPipe } from '../pipes/veg.pipe';
@Component({
  selector: 'app-reciepe-card',
  imports: [CommonModule, PrepTimePipe, VegPipe],
  templateUrl: './reciepe-card.component.html',
  styleUrl: './reciepe-card.component.css',
})
export class ReciepeCardComponent {
  @Input() r!: Reciepe;
  @Output() edit = new EventEmitter<Reciepe>();
  @Output() delete = new EventEmitter<number>();
}
