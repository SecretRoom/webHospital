import MainAPI from '../main.api';

/**
 * API для страницы "Возрастные группы"
 *
 * @class UsersAPI
 * @extends {MainAPI}
 */
class Age_groupsAPI extends MainAPI {
    load = (
      data,
    ) => {
      return this.getData(
        '/age_groups/load',
        data,
      )
    };

    loadDetail = (
      data,
    ) => {
      return this.getData(
        '/age_groups/load_detail',
        data,
      )
    };

    add = (
      data,
    ) => {
      return this.getData(
        '/age_groups/add',
        data,
      )
    };

    addDetail = (
      data,
    ) => {
      return this.getData(
        '/age_groups/add_detail',
        data,
      )
    };

    deleteAgeGroup = (
      data,
    ) => {
      return this.getData(
        '/age_groups/delete',
        data,
      )
    };

    deleteAgeGroupDetail = (
      data,
    ) => {
      return this.getData(
        '/age_groups/delete_detail',
        data,
      )
    };

    updateAgeGroupDetail = (
      data,
    ) => {
      return this.getData(
        '/age_groups/update_detail',
        data,
      )
    };

    updateAgeGroup = (
      data,
    ) => {
      return this.getData(
        '/age_groups/update',
        data,
      )
    };

    deleteUser = (
      data,
    ) => {
      return this.getData(
        '/user/users_delete',
        data,
      )
    };

    loadUserRoles = (
      data,
    ) => {
      return this.getData(
        '/user/userroles_list',
        data,
      )
    };

    addUserRole = (
      data,
    ) => {
      return this.getData(
        '/user/userroles_add',
        data,
      )
    };

    updateUserRole = (
      data,
    ) => {
      return this.getData(
        '/user/userroles_update',
        data,
      )
    };

    deleteUserRole = (
      data,
    ) => {
      return this.getData(
        '/user/userroles_delete',
        data,
      )
    };

    loadRoles = (
      data,
    ) => {
      return this.getData(
        '/user/roles_list',
        data,
      )
    };

    addRole = (
      data,
    ) => {
      return this.getData(
        '/user/roles_add',
        data,
      )
    };

    updateRole = (
      data,
    ) => {
      return this.getData(
        '/user/roles_update',
        data,
      )
    };

    deleteRole = (
      data,
    ) => {
      return this.getData(
        '/user/roles_delete',
        data,
      )
    };

    loadRolesRight = (
      data,
    ) => {
      return this.getData(
        '/user/rolerights_list',
        data,
      )
    };

    addRoleRight = (
      data,
    ) => {
      return this.getData(
        '/user/rolerights_add',
        data,
      )
    };

    updateRoleRight = (
      data,
    ) => {
      return this.getData(
        '/user/rolerights_update',
        data,
      )
    };

    deleteRoleRight = (
      data,
    ) => {
      return this.getData(
        '/user/rolerights_delete',
        data,
      )
    };

    loadOrigRole = (
      data,
    ) => {
      return this.getData(
        '/user/origroles_list',
        data,
      )
    };

    addOrigRole = (
      data,
    ) => {
      return this.getData(
        '/user/origroles_add',
        data,
      )
    };

    updateOrigRole = (
      data,
    ) => {
      return this.getData(
        '/user/origroles_update',
        data,
      )
    };

    deleteOrigRole = (
      data,
    ) => {
      return this.getData(
        '/user/origroles_delete',
        data,
      )
    };

    loadOrigRight = (
      data,
    ) => {
      return this.getData(
        '/user/origrights_list',
        data,
      )
    };

    addOrigRight = (
      data,
    ) => {
      return this.getData(
        '/user/origrights_add',
        data,
      )
    };

    updateOrigRight = (
      data,
    ) => {
      return this.getData(
        '/user/origrights_update',
        data,
      )
    };

    deleteOrigRight = (
      data,
    ) => {
      return this.getData(
        '/user/origrights_delete',
        data,
      )
    };

    loadOrigRoleRight = (
      data,
    ) => {
      return this.getData(
        '/user/origrolerights_list',
        data,
      )
    };

    addOrigRoleRight = (
      data,
    ) => {
      return this.getData(
        '/user/origrolerights_add',
        data,
      )
    };

    updateOrigRoleRight = (
      data,
    ) => {
      return this.getData(
        '/user/origrolerights_update',
        data,
      )
    };

    deleteOrigRoleRight = (
      data,
    ) => {
      return this.getData(
        '/user/origrolerights_delete',
        data,
      )
    };

    loadRoleRightLPU = (
      data,
    ) => {
      return this.getData(
        '/user/rolerightlpu_list',
        data,
      )
    };

    addRoleRightLPU = (
      data,
    ) => {
      return this.getData(
        '/user/rolerightlpu_add',
        data,
      )
    };

    updateRoleRightLPU = (
      data,
    ) => {
      return this.getData(
        '/user/rolerightlpu_update',
        data,
      )
    };

    deleteRoleRightLPU = (
      data,
    ) => {
      return this.getData(
        '/user/rolerightlpu_delete',
        data,
      )
    };

    addRoleRightLPUTasks = (
      data,
    ) => {
      return this.getData(
        '/user/rolerightlpu_addtasks',
        data,
      )
    };

    loadRolesCompact = (
      data = {},
    ) => {
      return this.getData(
        '/user/roles_compact',
        data,
      )
    };

    loadRoleBasesCompact = (
      data = {},
    ) => {
      return this.getData(
        '/user/rolebase_compact',
        data,
      )
    };

    loadRolesEditCompact = (
      data = {},
    ) => {
      return this.getData(
        '/user/roles_edit_compact',
        data,
      )
    };

    loadPersonsCompact = (
      data = {},
    ) => {
      return this.getData(
        '/user/persons_compact',
        data,
      )
    };

    loadRoleRightUserCompact = (
      data = {},
    ) => {
      return this.getData(
        '/user/rolerightuser_compact',
        data,
      )
    };

    loadOrigRoleCompact = (
      data = {},
    ) => {
      return this.getData(
        '/user/origroles_compact',
        data,
      )
    };

    loadOrigRightCompact = (
      data = {},
    ) => {
      return this.getData(
        '/user/origrights_compact',
        data,
      )
    };

    loadLPUAdminCompact = (
      data = {},
    ) => {
      return this.getData(
        '/user/lpu_admin_compact',
        data,
      )
    };

    loadLPUCompact = (
      data = {},
    ) => {
      return this.getData(
        '/user/lpu_compact',
        data,
      )
    };

    loadOrigRoleRightCompact = (
      data = {},
    ) => {
      return this.getData(
        '/user/origrolerights_compact',
        data,
      )
    };

    loadFieldsDescription = (
      cdtable = '',
    ) => {
      return this.getData(
        '/user/fieldsdescription_list',
        cdtable,
      )
    };

    loadOtdels = (
      data = {},
    ) => {
      return this.getData(
        '/user/otdel_list',
        data,
      )
    };

    addOtdel = (
      data,
    ) => {
      return this.getData(
        '/user/otdel_add',
        data,
      )
    };

    updateOtdel = (
      data,
    ) => {
      return this.getData(
        '/user/otdel_update',
        data,
      )
    };

    deleteOtdel = (
      data,
    ) => {
      return this.getData(
        '/user/otdel_delete',
        data,
      )
    };

    loadOtdPro = (
      data,
    ) => {
      return this.getData(
        '/user/otdpro_list',
        data,
      )
    };

    addOtdPro = (
      data,
    ) => {
      return this.getData(
        '/user/otdpro_add',
        data,
      )
    };

    updateOtdPro = (
      data,
    ) => {
      return this.getData(
        '/user/otdpro_update',
        data,
      )
    };

    deleteOtdPro = (
      data,
    ) => {
      return this.getData(
        '/user/otdpro_delete',
        data,
      )
    };

    loadOtdelPriznCompact = () => Promise.resolve(
      [
        {
          prizn: 1,
          nmtypeclinic: 'Поликлиника',
        },
        {
          prizn: 2,
          nmtypeclinic: 'Стационар',
        },
        {
          prizn: 3,
          nmtypeclinic: 'Параклиника',
        },
      ]);

    loadKategsCompact = (
    ) => {
      return this.getData(
        '/user/kateg_compact',
        {},
      )
    };

    loadProfFilterCompact = (
      data = {},
    ) => {
      return this.getData(
        '/user/prof_filter_compact',
        data,
      )
    };

    loadPolicPriznCompact = () => Promise.resolve(
      [
        {
          polic: 0,
          nmpolic: 'Стационар',
        },
        {
          polic: 1,
          nmpolic: 'Поликлиника',
        },
        {
          polic: 2,
          nmpolic: 'ДС на дому',
        },
      ]);

    loadSotrCompact = (
      data = {},
    ) => {
      return this.getData(
        '/user/sotr_compact',
        data,
      )
    };

    loadVidmedpomCompact = (
    ) => {
      return this.getData(
        '/user/vidmedpom_compact',
        {},
      )
    };

    loadEmChanges = (
    ) => {
      return this.getData(
        '/user/emchanges_list',
        {},
      )
    };

    addEmChange = (
      data,
    ) => {
      return this.getData(
        '/user/emchanges_add',
        data,
      )
    };

    updateEmChange = (
      data,
    ) => {
      return this.getData(
        '/user/emchanges_update',
        data,
      )
    };

    deleteEmChange = (
      data,
    ) => {
      return this.getData(
        '/user/emchanges_delete',
        data,
      )
    };
}
export default new Age_groupsAPI();
