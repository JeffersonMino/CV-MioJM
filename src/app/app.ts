
import { Component, signal } from '@angular/core';
import { Header } from './components/header/header';
import { About } from './components/about/about';
import { Experience } from './components/experience/experience';
import { Education } from './components/education/education';
import { Skills } from './components/skills/skills';
import { Contact} from './components/contact/contact';
import {TRANSLATION_IMPORTS} from './shared/transloco.shared' 
import { TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'app-root',
    imports: [
    Header,
    About,
    Experience,
    Education,
    Skills,
    Contact,
    TRANSLATION_IMPORTS
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('CV-JM');
  views = signal(0);

  ngOnInit() {
    fetch('https://api.countapi.xyz/hit/jefferson-cv/views')
      .then(res => res.json())
      .then(data => this.views.set(data.value));
  }
}
