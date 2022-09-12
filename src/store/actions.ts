import { RootState } from '@/store/state';
import type { ActionContext, ActionTree } from 'vuex';
import { Modify } from '@/typesUtils/modify';
import { RootActionsType } from '@/store/names/actions.names';
import { RootMutationsType } from '@/store/names/mutations.names';
import { RootMutation } from '@/store/mutations';


export type AugmentedActionContext = Modify<
  ActionContext<RootState, RootState>,
  { commit<K extends keyof RootMutation>(key: K, payload?: Parameters<RootMutation[K]>[1]): ReturnType<RootMutation[K]> }
>;

export type DaoListActions = any
export const actions: ActionTree<RootState, RootState> & DaoListActions = {

};
