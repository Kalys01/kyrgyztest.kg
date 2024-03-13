export enum ApplaoutsEnum {
  default = "default",
  login = "login",
  error = "error",
  auth = "auth",
  info = "info",
  news = "news",
  profile = "profile",
  mainPage = "mainPage"
}

export const AppLayoutToFileMap: Record<ApplaoutsEnum, string> = {
  default: "AppLayoutDefault.vue",
  login: "AppLayoutLogin.vue",
  error: "AppLayoutError.vue",
  auth: "AppLayoutAuth.vue",
  info: "AppLayoutInfo.vue",
  news: "AppLayouNews.vue",
  profile: "AppLayoutProfile.vue",
  mainPage: "AppLayoutMainPage.vue"
};