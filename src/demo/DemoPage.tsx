import { VFC } from 'react'
import { Post } from 'features/posts/Post'
import { PostDetail } from 'features/posts/PostDetail'
import dummyPosts from 'dummy/dummyPosts.json'

export const DemoPage: VFC = () => {
  const posts = dummyPosts
  return (
    <Post>
      {posts.posts.map((post) => (
        <PostDetail
          key={post.username}
          username={post.username}
          photoUrl={post.photoUrl}
          description={post.description}
          image={post.image}
        />
      ))}
    </Post>
  )
}
