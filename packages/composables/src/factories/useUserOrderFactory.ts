import { computed } from '@vue/composition-api';
import {
  Context,
  CustomQuery,
  FactoryParams,
  generateContext,
  Logger,
  sharedRef,
} from '@vue-storefront/core';
import { UseUserOrder, UseUserOrderErrors } from '../types';
import { configureFactoryParams } from '../utils';

export interface UseUserOrderFactoryParams<ORDERS, ORDER_SEARCH_PARAMS> extends FactoryParams {
  searchOrders: (context: Context, params: ORDER_SEARCH_PARAMS & { customQuery?: CustomQuery }) => Promise<ORDERS>;
}

export function useUserOrderFactory<ORDERS, ORDER_SEARCH_PARAMS>(factoryParams: UseUserOrderFactoryParams<ORDERS, ORDER_SEARCH_PARAMS>) {
  return function useUserOrder(): UseUserOrder<ORDERS, ORDER_SEARCH_PARAMS> {
    const _factoryParams = configureFactoryParams(factoryParams);
    const context = generateContext(factoryParams);
    // @ts-ignore
    const orders = sharedRef<ORDERS>([], 'useUserOrder-orders');
    const loading = sharedRef<boolean>(false, 'useUserOrder-loading');
    const error = sharedRef<UseUserOrderErrors>({}, 'useUserOrder-error');

    const search = async (searchParams): Promise<void> => {
      Logger.debug('useUserOrder.search', searchParams);

      try {
        loading.value = true;
        error.value.search = null;
        orders.value = await factoryParams.searchOrders(context, searchParams);
      } catch (err) {
        error.value.search = err;
        Logger.error('useUserOrder/search', err);
      } finally {
        loading.value = false;
      }
    };

    return {
      // @ts-ignore
      orders: computed(() => orders.value),
      search,
      // @ts-ignore
      loading: computed(() => loading.value),
      // @ts-ignore
      error: computed(() => error.value),
    };
  };
}
