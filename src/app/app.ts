
import { Component, signal } from '@angular/core';
import { Header } from './components/header/header';
import { About } from './components/about/about';
import { Experience } from './components/experience/experience';
import { Education } from './components/education/education';
import { Skills } from './components/skills/skills';
import { Contact} from './components/contact/contact';

@Component({
  selector: 'app-root',
    imports: [
    Header,
    About,
    Experience,
    Education,
    Skills,
    Contact
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('CV-JM');
}
