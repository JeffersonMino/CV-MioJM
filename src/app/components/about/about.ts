import { Component,signal } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About {
 protected readonly aboutText = signal(`
Soy desarrollador de software con más de ocho años de experiencia en desarrollo web y de aplicaciones.
He trabajado en cinco empresas, liderando proyectos con tecnologías modernas como C#, .NET Core, Angular, React, Flutter, Spring Boot y JavaFX. 
Tengo experiencia en diseño y consumo de APIs REST, frontend con HTML, CSS y Bootstrap, y bases de datos SQL Server y Oracle.
  
Logros destacados:
• Desarrollo de aplicaciones escalables con .NET Core y Spring Boot, mejorando rendimiento y escalabilidad.
• Interfaces interactivas y responsivas con Angular y React, optimizando la experiencia de usuario.
• Gestión de proyectos exitosos con metodologías ágiles como Scrum.
  
Apasionado por la innovación, busco crear soluciones eficientes y robustas, liderando proyectos de principio a fin con enfoque en calidad y cumplimiento de objetivos.
  `);
}
