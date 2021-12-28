import { gql } from '@apollo/client';
export const SELECT_BABIES = gql`
  query SelectBabies {
    baby_aggregate {
      aggregate {
        count
      }
    }
    baby(order_by: { name: asc }) {
      id
      name
    }
  }
`;

export const INSERT_BABY_ONE = gql`
  mutation InsertBabyOne($name: String!) {
    insert_baby_one(object: { name: $name }, on_conflict: { constraint: baby_name_key, update_columns: name }) {
      id
      name
      status
    }
  }
`;
