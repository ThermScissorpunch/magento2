/* istanbul ignore file */
import { UserOrderGetters } from '@vue-storefront/core';
import { Order, OrderItem } from '../../types';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getDate = (order: any): string => order?.created_at || '123';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getId = (order: any): string => order?.id || Math.floor(Math.random() * 100);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getStatus = (order: any): string => order?.status || 'Failed';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getPrice = (order: any): number | null => order?.grand_total || 0;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getItems = (order: any): any[] => order?.items || [];

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getItemSku = (item: any): string => item?.product_sku || 0;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getItemName = (item: any): string => item?.product_name || 0;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getItemQty = (item: any): number => item?.quantity_ordered || 0;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getItemPrice = (item: any): number => item?.product_sale_price?.value || 0;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getFormattedPrice = (price: number) => String(price);

const orderGetters: UserOrderGetters<Order, OrderItem> = {
  getDate,
  getId,
  getStatus,
  getPrice,
  getItems,
  getItemSku,
  getItemName,
  getItemQty,
  getItemPrice,
  getFormattedPrice,
};

export default orderGetters;
