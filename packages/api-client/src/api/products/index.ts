import gql from 'graphql-tag';
import { ApolloQueryResult } from 'apollo-client';
import { CustomQuery } from '@vue-storefront/core';
import { ProductAttributeFilterInput, ProductAttributeSortInput, Products } from '../../types/GraphQL';
import { detailQuery, listQuery } from './query';
import { Context } from '../../types/context';
import { GetProductSearchParams } from '../../types/API';

const enum ProductsQueryType {
  list = 'LIST',
  detail = 'DETAIL',
}

type Variables = {
  pageSize: number;
  currentPage: number;
  search?: string;
  filter?: ProductAttributeFilterInput;
  sort?: ProductAttributeSortInput;
};

const getProduct = async (
  context: Context,
  searchParams?: GetProductSearchParams,
  customQuery?: CustomQuery,
): Promise<ApolloQueryResult<Products>> => {
  const defaultParams = {
    pageSize: 20,
    currentPage: 1,
    queryType: ProductsQueryType.list,
    ...searchParams,
  };

  const query = defaultParams.queryType === ProductsQueryType.list ? listQuery : detailQuery;

  const variables: Variables = {
    pageSize: defaultParams.pageSize,
    currentPage: defaultParams.currentPage,
  };

  if (defaultParams.search) variables.search = defaultParams.search;

  if (defaultParams.filter) variables.filter = defaultParams.filter;

  if (defaultParams.sort) variables.sort = defaultParams.sort;

  const { products } = context.extendQuery(
    customQuery, {
      products: {
        query,
        variables: defaultParams,
      },
    },
  );

  return context.client.query({
    query: gql`${products.query}`,
    variables: products.variables,
    fetchPolicy: 'no-cache',
  });
};

export default getProduct;
