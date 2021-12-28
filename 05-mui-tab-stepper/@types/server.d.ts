type Maybe<T> = T | null;
type InputMaybe<T> = Maybe<T>;
type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']>;
  _gt?: InputMaybe<Scalars['Boolean']>;
  _gte?: InputMaybe<Scalars['Boolean']>;
  _in?: InputMaybe<Array<Scalars['Boolean']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Boolean']>;
  _lte?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Scalars['Boolean']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "baby" */
type Baby = {
  __typename?: 'baby';
  id: Scalars['Int'];
  name: Scalars['String'];
  status?: Maybe<Scalars['Int']>;
};

/** aggregated selection of "baby" */
type Baby_Aggregate = {
  __typename?: 'baby_aggregate';
  aggregate?: Maybe<Baby_Aggregate_Fields>;
  nodes: Array<Baby>;
};

/** aggregate fields of "baby" */
type Baby_Aggregate_Fields = {
  __typename?: 'baby_aggregate_fields';
  avg?: Maybe<Baby_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Baby_Max_Fields>;
  min?: Maybe<Baby_Min_Fields>;
  stddev?: Maybe<Baby_Stddev_Fields>;
  stddev_pop?: Maybe<Baby_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Baby_Stddev_Samp_Fields>;
  sum?: Maybe<Baby_Sum_Fields>;
  var_pop?: Maybe<Baby_Var_Pop_Fields>;
  var_samp?: Maybe<Baby_Var_Samp_Fields>;
  variance?: Maybe<Baby_Variance_Fields>;
};

/** aggregate fields of "baby" */
type Baby_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Baby_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
type Baby_Avg_Fields = {
  __typename?: 'baby_avg_fields';
  id?: Maybe<Scalars['Float']>;
  status?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "baby". All fields are combined with a logical 'AND'. */
type Baby_Bool_Exp = {
  _and?: InputMaybe<Array<Baby_Bool_Exp>>;
  _not?: InputMaybe<Baby_Bool_Exp>;
  _or?: InputMaybe<Array<Baby_Bool_Exp>>;
  id?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  status?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "baby" */
enum Baby_Constraint {
  /** unique or primary key constraint */
  BabyNameKey = 'baby_name_key',
  /** unique or primary key constraint */
  TestPkey = 'test_pkey',
}

/** input type for incrementing numeric columns in table "baby" */
type Baby_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
  status?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "baby" */
type Baby_Insert_Input = {
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['Int']>;
};

/** aggregate max on columns */
type Baby_Max_Fields = {
  __typename?: 'baby_max_fields';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
};

/** aggregate min on columns */
type Baby_Min_Fields = {
  __typename?: 'baby_min_fields';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
};

/** response of any mutation on the table "baby" */
type Baby_Mutation_Response = {
  __typename?: 'baby_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Baby>;
};

/** on conflict condition type for table "baby" */
type Baby_On_Conflict = {
  constraint: Baby_Constraint;
  update_columns?: Array<Baby_Update_Column>;
  where?: InputMaybe<Baby_Bool_Exp>;
};

/** Ordering options when selecting data from "baby". */
type Baby_Order_By = {
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
};

/** primary key columns input for table: baby */
type Baby_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "baby" */
enum Baby_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Status = 'status',
}

/** input type for updating data in table "baby" */
type Baby_Set_Input = {
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
type Baby_Stddev_Fields = {
  __typename?: 'baby_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  status?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
type Baby_Stddev_Pop_Fields = {
  __typename?: 'baby_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  status?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
type Baby_Stddev_Samp_Fields = {
  __typename?: 'baby_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  status?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
type Baby_Sum_Fields = {
  __typename?: 'baby_sum_fields';
  id?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['Int']>;
};

/** update columns of table "baby" */
enum Baby_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Status = 'status',
}

/** aggregate var_pop on columns */
type Baby_Var_Pop_Fields = {
  __typename?: 'baby_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  status?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
type Baby_Var_Samp_Fields = {
  __typename?: 'baby_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  status?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
type Baby_Variance_Fields = {
  __typename?: 'baby_variance_fields';
  id?: Maybe<Scalars['Float']>;
  status?: Maybe<Scalars['Float']>;
};

/** mutation root */
type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "baby" */
  delete_baby?: Maybe<Baby_Mutation_Response>;
  /** delete single row from the table: "baby" */
  delete_baby_by_pk?: Maybe<Baby>;
  /** delete data from the table: "organization" */
  delete_organization?: Maybe<Organization_Mutation_Response>;
  /** delete single row from the table: "organization" */
  delete_organization_by_pk?: Maybe<Organization>;
  /** insert data into the table: "baby" */
  insert_baby?: Maybe<Baby_Mutation_Response>;
  /** insert a single row into the table: "baby" */
  insert_baby_one?: Maybe<Baby>;
  /** insert data into the table: "organization" */
  insert_organization?: Maybe<Organization_Mutation_Response>;
  /** insert a single row into the table: "organization" */
  insert_organization_one?: Maybe<Organization>;
  /** update data of the table: "baby" */
  update_baby?: Maybe<Baby_Mutation_Response>;
  /** update single row of the table: "baby" */
  update_baby_by_pk?: Maybe<Baby>;
  /** update data of the table: "organization" */
  update_organization?: Maybe<Organization_Mutation_Response>;
  /** update single row of the table: "organization" */
  update_organization_by_pk?: Maybe<Organization>;
};

/** mutation root */
type Mutation_RootDelete_BabyArgs = {
  where: Baby_Bool_Exp;
};

/** mutation root */
type Mutation_RootDelete_Baby_By_PkArgs = {
  id: Scalars['Int'];
};

/** mutation root */
type Mutation_RootDelete_OrganizationArgs = {
  where: Organization_Bool_Exp;
};

/** mutation root */
type Mutation_RootDelete_Organization_By_PkArgs = {
  id: Scalars['Int'];
};

/** mutation root */
type Mutation_RootInsert_BabyArgs = {
  objects: Array<Baby_Insert_Input>;
  on_conflict?: InputMaybe<Baby_On_Conflict>;
};

/** mutation root */
type Mutation_RootInsert_Baby_OneArgs = {
  object: Baby_Insert_Input;
  on_conflict?: InputMaybe<Baby_On_Conflict>;
};

/** mutation root */
type Mutation_RootInsert_OrganizationArgs = {
  objects: Array<Organization_Insert_Input>;
  on_conflict?: InputMaybe<Organization_On_Conflict>;
};

/** mutation root */
type Mutation_RootInsert_Organization_OneArgs = {
  object: Organization_Insert_Input;
  on_conflict?: InputMaybe<Organization_On_Conflict>;
};

/** mutation root */
type Mutation_RootUpdate_BabyArgs = {
  _inc?: InputMaybe<Baby_Inc_Input>;
  _set?: InputMaybe<Baby_Set_Input>;
  where: Baby_Bool_Exp;
};

/** mutation root */
type Mutation_RootUpdate_Baby_By_PkArgs = {
  _inc?: InputMaybe<Baby_Inc_Input>;
  _set?: InputMaybe<Baby_Set_Input>;
  pk_columns: Baby_Pk_Columns_Input;
};

/** mutation root */
type Mutation_RootUpdate_OrganizationArgs = {
  _inc?: InputMaybe<Organization_Inc_Input>;
  _set?: InputMaybe<Organization_Set_Input>;
  where: Organization_Bool_Exp;
};

/** mutation root */
type Mutation_RootUpdate_Organization_By_PkArgs = {
  _inc?: InputMaybe<Organization_Inc_Input>;
  _set?: InputMaybe<Organization_Set_Input>;
  pk_columns: Organization_Pk_Columns_Input;
};

/** column ordering options */
enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last',
}

/** columns and relationships of "organization" */
type Organization = {
  __typename?: 'organization';
  activated: Scalars['Boolean'];
  id: Scalars['Int'];
  name: Scalars['String'];
};

/** aggregated selection of "organization" */
type Organization_Aggregate = {
  __typename?: 'organization_aggregate';
  aggregate?: Maybe<Organization_Aggregate_Fields>;
  nodes: Array<Organization>;
};

/** aggregate fields of "organization" */
type Organization_Aggregate_Fields = {
  __typename?: 'organization_aggregate_fields';
  avg?: Maybe<Organization_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Organization_Max_Fields>;
  min?: Maybe<Organization_Min_Fields>;
  stddev?: Maybe<Organization_Stddev_Fields>;
  stddev_pop?: Maybe<Organization_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Organization_Stddev_Samp_Fields>;
  sum?: Maybe<Organization_Sum_Fields>;
  var_pop?: Maybe<Organization_Var_Pop_Fields>;
  var_samp?: Maybe<Organization_Var_Samp_Fields>;
  variance?: Maybe<Organization_Variance_Fields>;
};

/** aggregate fields of "organization" */
type Organization_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Organization_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
type Organization_Avg_Fields = {
  __typename?: 'organization_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "organization". All fields are combined with a logical 'AND'. */
type Organization_Bool_Exp = {
  _and?: InputMaybe<Array<Organization_Bool_Exp>>;
  _not?: InputMaybe<Organization_Bool_Exp>;
  _or?: InputMaybe<Array<Organization_Bool_Exp>>;
  activated?: InputMaybe<Boolean_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "organization" */
enum Organization_Constraint {
  /** unique or primary key constraint */
  OrganizationNameKey = 'organization_name_key',
  /** unique or primary key constraint */
  OrganizationPkey = 'organization_pkey',
}

/** input type for incrementing numeric columns in table "organization" */
type Organization_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "organization" */
type Organization_Insert_Input = {
  activated?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
type Organization_Max_Fields = {
  __typename?: 'organization_max_fields';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
type Organization_Min_Fields = {
  __typename?: 'organization_min_fields';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "organization" */
type Organization_Mutation_Response = {
  __typename?: 'organization_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Organization>;
};

/** on conflict condition type for table "organization" */
type Organization_On_Conflict = {
  constraint: Organization_Constraint;
  update_columns?: Array<Organization_Update_Column>;
  where?: InputMaybe<Organization_Bool_Exp>;
};

/** Ordering options when selecting data from "organization". */
type Organization_Order_By = {
  activated?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
};

/** primary key columns input for table: organization */
type Organization_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "organization" */
enum Organization_Select_Column {
  /** column name */
  Activated = 'activated',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
}

/** input type for updating data in table "organization" */
type Organization_Set_Input = {
  activated?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
type Organization_Stddev_Fields = {
  __typename?: 'organization_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
type Organization_Stddev_Pop_Fields = {
  __typename?: 'organization_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
type Organization_Stddev_Samp_Fields = {
  __typename?: 'organization_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
type Organization_Sum_Fields = {
  __typename?: 'organization_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "organization" */
enum Organization_Update_Column {
  /** column name */
  Activated = 'activated',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
}

/** aggregate var_pop on columns */
type Organization_Var_Pop_Fields = {
  __typename?: 'organization_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
type Organization_Var_Samp_Fields = {
  __typename?: 'organization_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
type Organization_Variance_Fields = {
  __typename?: 'organization_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "baby" */
  baby: Array<Baby>;
  /** fetch aggregated fields from the table: "baby" */
  baby_aggregate: Baby_Aggregate;
  /** fetch data from the table: "baby" using primary key columns */
  baby_by_pk?: Maybe<Baby>;
  /** fetch data from the table: "organization" */
  organization: Array<Organization>;
  /** fetch aggregated fields from the table: "organization" */
  organization_aggregate: Organization_Aggregate;
  /** fetch data from the table: "organization" using primary key columns */
  organization_by_pk?: Maybe<Organization>;
};

type Query_RootBabyArgs = {
  distinct_on?: InputMaybe<Array<Baby_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Baby_Order_By>>;
  where?: InputMaybe<Baby_Bool_Exp>;
};

type Query_RootBaby_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Baby_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Baby_Order_By>>;
  where?: InputMaybe<Baby_Bool_Exp>;
};

type Query_RootBaby_By_PkArgs = {
  id: Scalars['Int'];
};

type Query_RootOrganizationArgs = {
  distinct_on?: InputMaybe<Array<Organization_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Organization_Order_By>>;
  where?: InputMaybe<Organization_Bool_Exp>;
};

type Query_RootOrganization_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Organization_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Organization_Order_By>>;
  where?: InputMaybe<Organization_Bool_Exp>;
};

type Query_RootOrganization_By_PkArgs = {
  id: Scalars['Int'];
};

type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "baby" */
  baby: Array<Baby>;
  /** fetch aggregated fields from the table: "baby" */
  baby_aggregate: Baby_Aggregate;
  /** fetch data from the table: "baby" using primary key columns */
  baby_by_pk?: Maybe<Baby>;
  /** fetch data from the table: "organization" */
  organization: Array<Organization>;
  /** fetch aggregated fields from the table: "organization" */
  organization_aggregate: Organization_Aggregate;
  /** fetch data from the table: "organization" using primary key columns */
  organization_by_pk?: Maybe<Organization>;
};

type Subscription_RootBabyArgs = {
  distinct_on?: InputMaybe<Array<Baby_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Baby_Order_By>>;
  where?: InputMaybe<Baby_Bool_Exp>;
};

type Subscription_RootBaby_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Baby_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Baby_Order_By>>;
  where?: InputMaybe<Baby_Bool_Exp>;
};

type Subscription_RootBaby_By_PkArgs = {
  id: Scalars['Int'];
};

type Subscription_RootOrganizationArgs = {
  distinct_on?: InputMaybe<Array<Organization_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Organization_Order_By>>;
  where?: InputMaybe<Organization_Bool_Exp>;
};

type Subscription_RootOrganization_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Organization_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Organization_Order_By>>;
  where?: InputMaybe<Organization_Bool_Exp>;
};

type Subscription_RootOrganization_By_PkArgs = {
  id: Scalars['Int'];
};
