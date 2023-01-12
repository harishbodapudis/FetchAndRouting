// Write your JS code here

import {Link} from 'react-router-dom'
import './index.css'

const BlogItem = props => {
  const {blogList} = props
  const {id, title, topic, imageUrl, avatarUrl, author} = blogList
  const blogPath = `/blogs/${id}`
  console.log(blogPath)
  return (
    <Link className="links" to={blogPath}>
      <li className="course-container">
        <div className="course-details-container">
          <div className="course-image">
            <img src={imageUrl} className="topic-img" alt={topic} />
          </div>
          <div className="course-data">
            <p className="topic">{topic}</p>
            <h1 className="title">{title}</h1>
            <div className="author-avatar-container">
              <img src={avatarUrl} className="author-img" alt={author} />
              <p className="author">{author}</p>
            </div>
          </div>
        </div>
      </li>
    </Link>
  )
}

export default BlogItem
