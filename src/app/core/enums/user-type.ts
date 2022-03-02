export enum UserType {
  COMMON = 'common',
  ADMINISTRATOR = 'administrator',
  DEVELOPER = 'developer'
}

export const UserTypeLabel = new Map<string, string>([
  [UserType.COMMON, 'Comum'],
  [UserType.ADMINISTRATOR, 'Administrador'],
  [UserType.DEVELOPER, 'Desenvolvedor']
]);