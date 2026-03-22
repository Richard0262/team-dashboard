// Interface simple pour typer les données d'un profil
export interface Profile {
  nom: string;
  poste: string;
  statut: 'Actif' | 'En pause' | 'Absent';
  niveau: 'Junior' | 'Intermédiaire' | 'Senior';
}
