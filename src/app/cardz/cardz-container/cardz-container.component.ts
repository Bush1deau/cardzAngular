import { Component } from '@angular/core';
import {Cardz} from "../../models/cardz";
import {AnimationClasses} from "../../models/animation-classes";
import {SocialMediaIcon} from "../../models/social-media-icon";

@Component({
  selector: 'app-cardz-container',
  templateUrl: './cardz-container.component.html',
  styleUrls: ['./cardz-container.component.scss']
})
export class CardzContainerComponent {
  userCard: Cardz = {
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
