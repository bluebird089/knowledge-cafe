import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() { 

  const [bookmarks, setBookmark] = useState([]);
  
  const handleAddBookmark = blog =>{
    const newBookmark = [...bookmarks, blog];
    setBookmark(newBookmark);
  }

  return (
    <>
      <Header></Header>
      <div className='md:flex container mx-auto py-2 gap-5'>
        <Blogs handleAddBookmark={handleAddBookmark}></Blogs>
        <Bookmarks bookmarks={bookmarks}></Bookmarks>
      </div>
    </>
  )
}

export default App
