import Post from '../Post/Post'
import styles from './Posts.module.css'
import { useURLContext } from "../../providers/UrlProvider"; 
import { useContext } from "react";

const Posts = () => {
  // const postsID = [
  //   {
  //     id: 0,
  //     url: 'https://images.unsplash.com/photo-1706459006208-6c7ea1a5cfe8?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  //   },
  //   {
  //     id: 1,
  //     url: 'https://images.unsplash.com/photo-1682685797769-481b48222adf?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  //   },
  //   {
  //     id: 2,
  //     url: 'https://plus.unsplash.com/premium_photo-1701207573559-1f14f4f94c3c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' 
  //   },
  //   {
  //     id: 3,
  //     url: 'https://images.unsplash.com/photo-1706271952260-a846f6df1048?q=80&w=1349&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  //   },
  //   {
  //     id: 4,
  //     url: 'https://images.unsplash.com/photo-1706449511874-6a0ca25fa750?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' 
  //   },
  // ]
  
  const {urls} = useContext()

  console.log(urls);

  return (
    // <UrlProvider>
      <div className={styles.container}>
        {urls.map(url => <Post key={url.id} postId={url.id+1} url={url.url}></Post>)}
      </div>
    // </UrlProvider>
  )
}



export default Posts