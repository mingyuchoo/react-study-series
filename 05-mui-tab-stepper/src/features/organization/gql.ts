import { gql } from '@apollo/client';
export const SELECT_ORGANIZATIONS = gql`
  query SelectOrganizations {
    organization_aggregate {
      aggregate {
        count
      }
    }
    organization(order_by: { name: asc }) {
      id
      name
      activated
    }
  }
`;

export const INSERT_ORGANIZATION_ONE = gql`
  mutation InsertOrganizationOne($name: String!) {
    insert_organization_one(
      object: { name: $name }
      on_conflict: { constraint: organization_name_key, update_columns: name }
    ) {
      id
      name
      activated
    }
  }
`;
