import { push } from 'connected-react-router';

/**
 * Функция для переадресации пользователя после авторизации по признаку(feature) или правам(rights)
 *
 * @export
 * @param {number} feature
 * @param {object} rights
 * @returns {object} history
 */
export function forwardByFeature(feature, rights) {
  if (typeof rights === 'object' && rights.LabShowLaboratory) { // ShowLaboratory
    return push('/biomaterials');
  }
  switch (feature || rights) {
    case 1:
      return push('/reception');
    case 2:
      return push('/hospitalized/referral');
    case 3:
      return push('/biomaterials');
    default:
      return push('/patients');
  }
}
