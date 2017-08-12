// Feel free to extend this interface
// depending on your app specific config.
export interface EnvConfig {
  production?: boolean;
  API?: string;
  ENV?: string;
  PROJECTS_API?: string;
  AUTH_REDIRECT_URL?: string;
}
