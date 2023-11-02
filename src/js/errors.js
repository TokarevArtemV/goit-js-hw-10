import { Notify } from "notiflix";
import { options } from "./refs";

export function errorFn(error) {
    Notify.failure(
      error + ' Please try to reload page later',
      options.notiflix
    );
}