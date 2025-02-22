import gql from 'graphql-tag';

export default gql`
 query wishlist {
    wishlist {
      items_count
      sharing_code
      updated_at
      items {
        id
        qty
        description
        added_at
        product {
          id
          name
          sku
          special_price
          attribute_set_id
          image{
            url,
            label
          }
          price_tiers{
            discount {
              amount_off
              percent_off
            }
            final_price {
              currency
              value
            }
            quantity
          }
          type_id
          manufacturer
          categories{
            id
            name
            path
          }
          canonical_url
          media_gallery{
            url
            label
          }
        }
      }
    }
  }
`;
