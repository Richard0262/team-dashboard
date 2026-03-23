import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Profile } from '../../models/profile.model';
import { StatusBadgeComponent } from '../status-badge/status-badge.component';

@Component({
  selector: 'app-profile-card',
  standalone: true,
  imports: [CommonModule, StatusBadgeComponent],
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.scss']
})
export class ProfileCardComponent {
  @Input() profile!: Profile;
  @Output() onToggleStatut = new EventEmitter<Profile>();


  get niveauStyles(): { [key: string]: string } {
    const borderColors: { [key: string]: string } = {
      'Junior': 'blue',
      'Intermédiaire': 'purple',
      'Senior': 'goldenrod'
    };
    return {
      'border-left': `4px solid ${borderColors[this.profile.niveau] || 'gray'}`,
    };
  }

  toggleStatut(): void {
    this.onToggleStatut.emit(this.profile);
  }
}
