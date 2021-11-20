import type { NextPage } from 'next'
import RichTextEditor from '../../components/richTextEditor'
import Title from '../../components/title'
import { Box, Button } from '@chakra-ui/react'
import { useState } from 'react'
import { useAddPostMutation, usePostsQuery } from '../../generated/generated'
import { initialValue } from '../../utils/initialText'
import { Descendant } from 'slate'
import { gql, useMutation } from '@apollo/client'

const ADD_POST = gql`
  mutation createPost($post: CreatePostInput!) {
    createPost(createPostInput: $post) {
      title
      body
    }
  }
`

const LeftIcon = () => {
  return <span className="material-icons">post_add</span>
}

const Admin: NextPage = (props) => {
  const [title, setTitle] = useState<string>('')
  const [body, setBody] = useState<Descendant[]>(initialValue)
  // const { loading, data }  = usePostsQuery()
  const [ createPost, { loading, error, data } ] = useAddPostMutation()
  // const [ createPost, { loading, error, data }] = useMutation(ADD_POST)

  if (loading) return <p>Loading ...</p>

  return (
    <Box maxW="960px" mx="auto">
      <Title value ={title} setValue={setTitle} />
      <RichTextEditor value={body} setValue={setBody} />
      <Button leftIcon={<LeftIcon />} colorScheme="teal" variant="solid" onClick={() => createPost({ variables: { post: {title: title, body: JSON.stringify(body) }}})}>Create</Button>
    </Box>
  )
}

export default Admin

      // {data && data.posts.map((post) => <div key={post.postId}><li>{post.title}</li><li>{post.body}</li></div>)}

