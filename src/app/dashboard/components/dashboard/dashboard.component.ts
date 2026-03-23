import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Profile } from '../../models/profile.model';
import { ProfileCardComponent } from '../profile-card/profile-card.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, ProfileCardComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  // Données d'exemple
  profils: Profile[] = [
    { nom: 'Richard ANAGONOU', poste: 'Développeur Frontend', statut: 'Actif', niveau: 'Senior' },
    { nom: 'Jean HIMRA', poste: 'Designer UI/UX', statut: 'En pause', niveau: 'Intermédiaire' },
    { nom: 'Dibi DOBO', poste: 'Développeur Backend', statut: 'Absent', niveau: 'Junior' },
    { nom: 'Araphat DJ', poste: 'Chef de projet', statut: 'Actif', niveau: 'Senior' }
  ];

  // Filtre 
  filtreActif: 'Tous' | 'Actifs' | 'Absents' = 'Tous';

  // Getter pour filtrer les profils
  get profilsFiltres(): Profile[] {
    if (this.filtreActif === 'Tous') {
      return this.profils;
    } else if (this.filtreActif === 'Actifs') {
      return this.profils.filter(p => p.statut === 'Actif');
    } else {
      return this.profils.filter(p => p.statut === 'Absent');
    }
  }

  // Méthode pour changer le filtre
  setFiltre(filtre: 'Tous' | 'Actifs' | 'Absents'): void {
    this.filtreActif = filtre;
  }

  // Méthode pour changer le statut
  toggleStatut(profile: Profile): void {
    if (profile.statut === 'Actif') {
      profile.statut = 'En pause';
    } else if (profile.statut === 'En pause') {
      profile.statut = 'Actif';
    }
   
  }
}
