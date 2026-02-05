import { Component,signal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Skill {
  name: string;
  image: string;
  url: string; // página oficial
}

@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrl: './skills.css'
})
export class Skills {
 protected readonly skills = signal<Skill[]>([
    { name: '.NET', image: './img/DoNet.png' , url: 'https://dotnet.microsoft.com/' },
    { name: 'SQL', image: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png', url: 'https://www.microsoft.com/en-us/sql-server' },
    { name: 'ORACLE', image: 'https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg', url: 'https://www.oracle.com/' },
    { name: 'PostgreSQL', image: 'https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg', url: 'https://www.postgresql.org/' },
    { name: 'Java', image: 'https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg', url: 'https://www.java.com/' },
    { name: 'CSS', image: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
    { name: 'GITLAB', image: 'https://about.gitlab.com/images/press/logo/png/gitlab-icon-rgb.png', url: 'https://gitlab.com/' },
    { name: 'Angular', image: 'https://angular.io/assets/images/logos/angular/angular.svg',   url: 'https://angular.io/' } 
    
  ]);

  
    protected readonly itemWidth = 160; // ancho de cada item en px
  protected readonly gap = 24;         // margen entre items
  protected readonly currentIndex = signal(0);

  private intervalId!: any;

  ngOnInit() {
    this.startAutoScroll();
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

  next() {
    this.currentIndex.update(i => (i + 1) % this.skills().length);
  }

  prev() {
    this.currentIndex.update(i => (i - 1 + this.skills().length) % this.skills().length);
  }

  trackTranslate() {
    return `translateX(-${this.currentIndex() * (this.itemWidth + this.gap)}px)`;
  }

  startAutoScroll() {
    this.intervalId = setInterval(() => {
      this.next();
    }, 1000); 
  }

}
