import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import RichTextEditor from '../../components/richTextEditor'
import Title from '../../components/title'
import { Box } from '@chakra-ui/react'
import { useState } from 'react'

const Admin: NextPage = (props) => {
  const [title, setTitle] = useState('')
  return (
    <Box maxW="960px" mx="auto">
      <Title title={title} onChangeText={(value) => setTitle(value)}/>
      <RichTextEditor />
    </Box>
  )
}

export default Admin
