
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
  const [bookMarks, setBookMarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0)

  const handleAddToBookMark = (blog) => {
    const newBookMarks = [...bookMarks, blog];
    setBookMarks(newBookMarks);
  }

  const handleMarkAsRead  = time =>{
    setReadingTime(readingTime + time);    
  }

  return (
    <>
      <Header></Header>
      <div className='md:flex md:container mx-auto p-4 gap-5'>
        <Blogs handleAddToBookMark={handleAddToBookMark} handleMarkAsRead={handleMarkAsRead}></Blogs>
        <Bookmarks readingTime={readingTime}  bookMarks={bookMarks}></Bookmarks>
      </div>
    </>
  )
}

export default App
