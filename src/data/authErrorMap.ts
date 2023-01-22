import type { IAuthErrorMap } from '../lib/interfaces/IAuthErrorMap';

export const authErrorMap: IAuthErrorMap = {
  'user-not-found': 'Neexistující uživatel.',
  'wrong-password': 'Špatné heslo.',
  'network-request-failed': 'Chyba v internetovém připojení',
  'something-wrong': 'Neznámá chyba při přihlasování.',
};
