import {Component} from '@angular/core';
import {SocialMedia} from "./social-media";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  // Envoi de données à la vue
  userCard = {
    name: 'Kirito Kirigaya',
    avatar: 'assets/avatar.jpg',
    backgroundImage: 'assets/background.jpg',
    biography: "Epéiste, Kirito est un personnage de fiction de l'univers de Sword Art Online.",
    links: [
      {title: 'Visitez mon Github pour des projets sympas!',     icon: SocialMedia.GITHUB,    url: 'https://www.youtube.com/watch?v=iik25wqIuFo'},
      {title: 'Faites un tour sur ma chaîne Youtube',    icon: SocialMedia.YOUTUBE,   url: 'https://www.youtube.com/watch?v=iik25wqIuFo'},
      {title: 'Ne manquez pas une info sur Twitter',    icon: SocialMedia.TWITTER,   url: 'https://www.youtube.com/watch?v=iik25wqIuFo'},
      {title: 'Pour les contacts pro rdv sur LinkedIn',   icon: SocialMedia.LINKEDIN,  url: 'https://www.youtube.com/watch?v=iik25wqIuFo'},
      {title: 'Pour me voir en bikini sur Instagram',  icon: SocialMedia.INSTAGRAM, url: 'https://www.youtube.com/watch?v=iik25wqIuFo'},
      {title: 'Jamais utilisé Behance, ça se mange?',    icon: SocialMedia.BEHANCE,   url: 'https://www.youtube.com/watch?v=iik25wqIuFo'},
      {title: 'Messenger pour les vieux...',  icon: SocialMedia.MESSENGER, url: 'https://www.youtube.com/watch?v=iik25wqIuFo'},
      {title: 'Ou joignez moi tout simplement par Email',      icon: SocialMedia.EMAIL,     url: 'https://www.youtube.com/watch?v=iik25wqIuFo'},
    ],
    animations: {
      card: 'animate__fadeInDown',
      backgroundImage: 'animate__fadeIn',
    }
  };

}
