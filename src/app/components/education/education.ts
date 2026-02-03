import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Educacion {
  date: string;
  title: string;
  institution: string;
  details?: string;
}

@Component({
  selector: 'app-education',
  imports: [CommonModule],
  templateUrl: './education.html',
  styleUrl: './education.css'
})
export class Education {
 protected readonly education = signal<Educacion[]>([
  
    {
      date: '2026',
      title: 'Curso Desarollo con IA',
      institution: 'Big School',
      details: 'Implementacion de IA en Desarrollo de software'
    },  
    {
      date: '2014 - 2019',
      title: 'Ingeniería en Sistemas',
      institution: 'Universidad Yanki Kypala Repuplica de Belarus',
      details: 'Especialización en desarrollo de software y bases de datos.'
    },
    {
      date: '2018',
      title: 'Desarrollo',
      institution: 'Microsoft',
      details: 'Desarrollo de aplicaciones con C#, ASP.NET y SQL Server.'
    },
    {
      date: '2021',
      title: 'Curso Avanzado en Angular',
      institution: 'Platzi',
      details: 'Aplicaciones web SPA modernas con Angular y TypeScript.'
    }
    
  ]);
}
