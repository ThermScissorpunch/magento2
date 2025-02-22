import gql from 'graphql-tag';

export default gql`
  mutation setBillingAddressOnCart($input: SetBillingAddressOnCartInput) {
    setBillingAddressOnCart(input: $input) {
      cart {
        billing_address {
          firstname
          lastname
          company
          street
          city
          region {
            code
            label
          }
          postcode
          telephone
          country {
            code
            label
          }
        }
      }
    }
  }
`;
