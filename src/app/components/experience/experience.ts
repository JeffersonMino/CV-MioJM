import { Component , signal} from '@angular/core';
import { CommonModule } from '@angular/common';


interface experiencia{
  date: string;
  role: string;
  company: string;
  location: string;
  description: string[];
  technologies: string[];
}

@Component({
  selector: 'app-experience',
  imports: [CommonModule],
  templateUrl: './experience.html',
  styleUrl: './experience.css'
})

export class Experience {
  protected readonly showDetails = signal(true);
protected readonly experiences = signal<experiencia[]>([
  {
      date: '09/2024 - 02/2026',
      role: 'Desarrollador Especialista',
      company: 'PROCONTY',
      location: 'Quito',
      description: [
        'Diseño e implementación de aplicaciones Full Stack utilizando .NET Core, ASP.NET, Java y Angular',        
        'Desarrollo y consumo de APIs REST para integración de sistemas críticos.',
        'Análisis técnico, optimización de procesos y resolución de incidencias complejas.',
        'Gestión de código y 􀃮ujos de trabajo con Git y GitLab, asegurando calidad y trazabilidad.',
        'Trabajo con SQL Server y Oracle en entornos productivos de alta disponibilidad.'
      ],
      technologies: ['.NET', '.NET Core', 'DevExpress', 'MVC', 'Oracle', 'Angular', 'C#', 'HTML', 'CSS', 'Java', 'Git', 'GitLab']
    },  
  {
      date: '04/2024 - 08/2024',
      role: 'Desarrollador Especialista',
      company: 'Consejo Nacional Electoral "CNE"',
      location: 'Quito',
      description: [
        'Desarrollo de aplicaciones electorales especializadas.',
        'Desarrollo y mantenimiento de módulos backend en C# y .NET Core.',
        'Aplicación de metodología MVC para proyectos escalables.',
        'Optimización de consultas y gestión de bases de datos con Oracle 12.5.'
      ],
      technologies: ['.NET', '.NET Core', 'DevExpress', 'MVC', 'Oracle 12.5', 'Angular', 'C#', 'HTML', 'CSS']
    },
    {
      date: '03/2022 - 12/2023',
      role: 'Desarrollador Especialista',
      company: 'Consejo Nacional Electoral "CNE"',
      location: 'Quito',
      description: [
        'Desarrollo de sistemas para control de la contabilidad electoral.',
        'Desarrollo Full Stack para integración de datos y finalización electoral.'
      ],
      technologies: ['.NET', '.NET Core', 'DevExpress', 'MVC', 'Oracle 12.5', 'Angular', 'C#', 'HTML', 'CSS']
    },
    {
      date: '10/2020 - 03/2022',
      role: 'Desarrollador Semi Senior',
      company: 'Lead Solutions',
      location: 'Quito',
      description: [
        'Creación de sistema de facturación y migración de sistemas antiguos.',
        'Creación de servicios REST y SOAP.',
        'Desarrollo Full Stack con módulos independientes.'
      ],
      technologies: ['SQL Server', '.NET', 'C#', 'Angular']
    },
    {
      date: '09/2019 - 09/2020',
      role: 'Desarrollador',
      company: 'NimbusSoft',
      location: 'Quito',
      description: [
        'Servicios REST y SOAP para sistemas de aduanas.',
        'Uso de múltiples lenguajes: HTML, CSS, jQuery, C#, Java, Bootstrap, ASPX, .NET, Kotlin, TypeScript, JS.'
      ],
      technologies: ['SQL Server', 'Scripts', 'Stored Procedures', 'Jobs', 'Triggers']
    },
    {
      date: '09/2018 - 09/2019',
      role: 'Desarrollador Junior',
      company: 'IT del Ecuador',
      location: 'Quito',
      description: [
        'Mantenimiento de servidores.',
        'Desarrollo de aplicaciones web con C# y DevExpress.',
        'Bases de datos SQL Server y Oracle.'
      ],
      technologies: ['SQL Server', 'Oracle', 'C#', 'DevExpress']
    },
    {
      date: '09/2013 - 09/2014',
      role: 'Desarrollador Junior (Pasante)',
      company: 'EMASEO',
      location: 'Quito',
      description: [
        'Prácticas pre-profesionales en sistemas de control de ingreso y salida de empleados.',
        'Creación de APIs con .NET y base de datos SQL Server.'
      ],
      technologies: ['.NET', 'SQL Server']
    },
    {
      date: '06/2012 - 06/2013',
      role: 'Call Center',
      company: 'TATA',
      location: 'Quito',
      description: ['Atención al cliente.'],
      technologies: ['Aplicaciones de banca']
    }
  ]);
}
