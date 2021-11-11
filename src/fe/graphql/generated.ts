import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
};

export type CreatePostInput = {
  /** body of post */
  body: Scalars['String'];
  /** title of post */
  title: Scalars['String'];
};

export type CreateUserInput = {
  /** email of the user */
  email: Scalars['String'];
  /** Example field (placeholder) */
  exampleField: Scalars['Int'];
  /** first name of the user */
  firstName: Scalars['String'];
  /** last name of the user */
  lastName: Scalars['String'];
  /** role of the user */
  role: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createPost: Post;
  createUser: User;
  removePost: Post;
  removeUser: User;
  updatePost: Post;
  updateUser: User;
};


export type MutationCreatePostArgs = {
  createPostInput: CreatePostInput;
};


export type MutationCreateUserArgs = {
  createUserInput: CreateUserInput;
};


export type MutationRemovePostArgs = {
  postId: Scalars['String'];
};


export type MutationRemoveUserArgs = {
  userId: Scalars['String'];
};


export type MutationUpdatePostArgs = {
  updatePostInput: UpdatePostInput;
};


export type MutationUpdateUserArgs = {
  updateUserInput: UpdateUserInput;
};

export type Post = {
  __typename?: 'Post';
  /** body of post */
  body: Scalars['String'];
  /** created date of post */
  created: Scalars['DateTime'];
  /** id of the post */
  postId: Scalars['String'];
  /** title of post */
  title: Scalars['String'];
  /** updated date of post */
  updated: Scalars['DateTime'];
};

export type Query = {
  __typename?: 'Query';
  posts: Post;
  user: User;
  users: Array<User>;
};


export type QueryPostsArgs = {
  postId: Scalars['String'];
};


export type QueryUserArgs = {
  userId: Scalars['String'];
};

export type UpdatePostInput = {
  /** body of post */
  body?: Maybe<Scalars['String']>;
  postId: Scalars['String'];
  /** title of post */
  title?: Maybe<Scalars['String']>;
};

export type UpdateUserInput = {
  /** email of the user */
  email?: Maybe<Scalars['String']>;
  /** Example field (placeholder) */
  exampleField?: Maybe<Scalars['Int']>;
  /** first name of the user */
  firstName?: Maybe<Scalars['String']>;
  /** last name of the user */
  lastName?: Maybe<Scalars['String']>;
  /** role of the user */
  role?: Maybe<Scalars['String']>;
  userId: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  /** email of the user */
  email: Scalars['String'];
  /** Example field (placeholder) */
  exampleField: Scalars['Int'];
  /** first name of the user */
  firstName: Scalars['String'];
  /** last name of the user */
  lastName: Scalars['String'];
  /** role of the user */
  role: Scalars['String'];
  /** id of the user */
  userId: Scalars['String'];
};


export const AddPostDocument = gql`
    mutation addPost($post: CreatePostInput!) {
  createPost(createPostInput: $post) {
    postId
    title
    body
    created
    updated
  }
}
    `;
export type AddPostMutationFn = Apollo.MutationFunction<AddPostMutation, AddPostMutationVariables>;

/**
 * __useAddPostMutation__
 *
 * To run a mutation, you first call `useAddPostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddPostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addPostMutation, { data, loading, error }] = useAddPostMutation({
 *   variables: {
 *      post: // value for 'post'
 *   },
 * });
 */
export function useAddPostMutation(baseOptions?: Apollo.MutationHookOptions<AddPostMutation, AddPostMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddPostMutation, AddPostMutationVariables>(AddPostDocument, options);
      }
export type AddPostMutationHookResult = ReturnType<typeof useAddPostMutation>;
export type AddPostMutationResult = Apollo.MutationResult<AddPostMutation>;
export type AddPostMutationOptions = Apollo.BaseMutationOptions<AddPostMutation, AddPostMutationVariables>;
export const PostsDocument = gql`
    query posts($postId: String!) {
  posts(postId: $postId) {
    postId
    title
    body
    created
    updated
  }
}
    `;

/**
 * __usePostsQuery__
 *
 * To run a query within a React component, call `usePostsQuery` and pass it any options that fit your needs.
 * When your component renders, `usePostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePostsQuery({
 *   variables: {
 *      postId: // value for 'postId'
 *   },
 * });
 */
export function usePostsQuery(baseOptions: Apollo.QueryHookOptions<PostsQuery, PostsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PostsQuery, PostsQueryVariables>(PostsDocument, options);
      }
export function usePostsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PostsQuery, PostsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PostsQuery, PostsQueryVariables>(PostsDocument, options);
        }
export type PostsQueryHookResult = ReturnType<typeof usePostsQuery>;
export type PostsLazyQueryHookResult = ReturnType<typeof usePostsLazyQuery>;
export type PostsQueryResult = Apollo.QueryResult<PostsQuery, PostsQueryVariables>;
export type AddPostMutationVariables = Exact<{
  post: CreatePostInput;
}>;


export type AddPostMutation = { __typename?: 'Mutation', createPost: { __typename?: 'Post', postId: string, title: string, body: string, created: any, updated: any } };

export type PostsQueryVariables = Exact<{
  postId: Scalars['String'];
}>;


export type PostsQuery = { __typename?: 'Query', posts: { __typename?: 'Post', postId: string, title: string, body: string, created: any, updated: any } };
