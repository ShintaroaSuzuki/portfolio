import { useRouter } from 'next/router'
import { usePostQuery } from '../../generated/generated'
import RichTextEditor from '../../components/richTextEditor'
import Title from '../../components/title'
import { Box } from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import { Descendant } from 'slate'

export const getServerSideProps = () => {
  const router = useRouter()
  const { postId } = router.query

  const { loading, data } = usePostQuery({ variables: { postId }})

  return {
    props: {
      loading,
      data,
    }
  }
}

const Post = () => {
  const [title, setTitle] = useState<string>(undefined)
  const [body, setBody] = useState<Descendant[]>([{type: 'paragraph', children: [{ text: 'loading ...' }]}])

  useEffect(() => {
    if (data) {
        setTitle(data.post.title)
        setBody(JSON.parse(data.post.body))
      }
    }, [data])

  if (loading) return <p>Loading ...</p>

  return (
    <Box maxW="960px" mx="auto">
      <Title value ={title} setValue={setTitle} />
      <RichTextEditor value={body} setValue={setBody} />
    </Box>
  )
}

export default Post
