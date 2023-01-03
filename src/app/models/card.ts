import {Link} from "./link";
import {AnimationClasses} from "./animation-classes";

export interface Card {
  name: string,
  biography: string,
  avatar: string,
  animation: AnimationClasses,
  background: {
    image: string,
    animation: AnimationClasses,
  }
  links: Link[]
}
