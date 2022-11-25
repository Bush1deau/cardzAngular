import {Component} from '@angular/core';
import {SocialMediaIcon} from "./models/social-media-icon";
import {AnimationClasses} from "./models/animation-classes";
import {Card} from "./models/card";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  userCard: Card = {
    name: 'Rudy Evrard',
    biography: 'I am a software developer',
    avatar: 'url(assets/avatar.jpg)',
    animation: AnimationClasses.FADE_IN_LEFT,
    background: {
      image: 'url(assets/background.jpg)',
      animation: AnimationClasses.FADE_IN
    },
    links: [
      {
        url: 'https://www.youtube.com/watch?v=iik25wqIuFo',
        text: 'Visitez mon Github pour des projets sympas!',
        icon: SocialMediaIcon.GITHUB,
      },
      {
        url: 'https://www.youtube.com/watch?v=iik25wqIuFo',
        text: 'Visitez mon Github pour des projets sympas!',
        icon: SocialMediaIcon.BEHANCE,
      },
      {
        url: 'https://www.youtube.com/watch?v=iik25wqIuFo',
        text: 'Visitez mon Github pour des projets sympas!',
        icon: SocialMediaIcon.INSTAGRAM,
      },
      {
        url: 'https://www.youtube.com/watch?v=iik25wqIuFo',
        text: 'Visitez mon Github pour des projets sympas!',
        icon: SocialMediaIcon.GITHUB,
      },
      {
        url: 'https://www.youtube.com/watch?v=iik25wqIuFo',
        text: 'Visitez mon Github pour des projets sympas!',
        icon: SocialMediaIcon.BEHANCE,
      },
      {
        url: 'https://www.youtube.com/watch?v=iik25wqIuFo',
        text: 'Visitez mon Github pour des projets sympas!',
        icon: SocialMediaIcon.INSTAGRAM,
      }
    ]
  }
}
