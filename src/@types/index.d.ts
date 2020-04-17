export type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
declare module "*.png";
declare module "*.ttf";
declare module "*.jpg";
declare module "*.js";
declare module "supportedLanguages" {}
