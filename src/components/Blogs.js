import React, {useEffect, useState} from 'react';
import BlogCard from './BlogCard';

const Blogs = () => {

  const [blogs, setBlogs] = useState([])

  useEffect(() => {
      fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@yushi95')
      .then((r) => r.json())
      .then((blogs) => {
        console.log(blogs)
          setBlogs(blogs.items)
      })
  }, [])

  const blogItems = blogs.map((blog, index) => {
      return(
          <BlogCard 
          key={index}
          tags={blog.categories}
          title={blog.title}
          image={blog.thumbnail}
          link={blog.link}
          pubDate={blog.pubDate.split(' ')[0]}
          />
      )
  })

  return (
    <div id='about' className='text-white mt-40 flex justify-between items-center mx-auto px-6 md:px-6 lg:px-6 w-full'>
      <div className='container mx-auto px-6'>
        <header className='flex flex-col items-center text-center'>
          <h2 className="font-medium text-4xl mb-20 text-transform: uppercase after:mx-auto after:mb-0 after:block after:mt-9 after:rounded-full after:h-1 after:w-24 after:-translate-y-1 after:bg-indigo-600 after:content-['']">Blogs</h2>
        </header>
        <div>
          {blogItems}
        </div>
      </div>
    </div>
  )
}

export default Blogs;