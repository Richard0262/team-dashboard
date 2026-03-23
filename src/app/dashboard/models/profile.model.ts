export interface Profile {
  nom: string;
  poste: string;
  statut: 'Actif' | 'En pause' | 'Absent';
  niveau: 'Junior' | 'Intermédiaire' | 'Senior';
}
