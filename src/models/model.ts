import { TranslateResult } from "vue-i18n";
import { i18n } from "@/main";

export default interface Link {
  caption: string | TranslateResult;
  link: string | TranslateResult;
}

// export function getEcosystemPlugins() {
//   return [
//     {
//       caption: i18n.t("header.main"),
//       url: "/"
//     }
//   ]
// }