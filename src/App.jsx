import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {

  const [bookmarks, setBookmark] = useState([]);
  const [readingTime, setReadingTime] = useState(0)

  const handleAddBookmark = blog => {
    const newBookmark = [...bookmarks, blog];
    setBookmark(newBookmark);
  }

  const handleMarkedRead = time => {
    const newReadingTime = (readingTime + time);
    setReadingTime(newReadingTime);
  }

  return (
    <>
      <Header></Header>
      <div className='md:flex container mx-auto py-2 gap-5'>
        <Blogs
          handleAddBookmark={handleAddBookmark}
          handleMarkedRead={handleMarkedRead}
        ></Blogs>
        <div className='md:w-1/3'>
          <div className='my-3 text-center text-[#6047EC] bg-[#e8e4ff] border border-[#6047EC] p-3 text-xl font-semibold rounded-2xl'>Spent Time Reading: {readingTime}</div>
          <Bookmarks bookmarks={bookmarks}></Bookmarks>
        </div>
      </div>
    </>
  )
}

export default App
