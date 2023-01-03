import {AnimationClasses} from "./animation-classes";
import {CardzLink} from "./cardz-link";

export interface Cardz {
  name: string,
  biography: string,
  avatar: string,
  animation: AnimationClasses,
  background: {
    image: string,
    animation: AnimationClasses,
  }
  links: CardzLink[]
}
