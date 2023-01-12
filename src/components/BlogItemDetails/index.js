// Write your JS code here

import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class BlogItemDetails extends Component {
  state = {blogDetailsData: {}, loader: true}

  componentDidMount() {
    this.getBlogItemDetails()
  }

  getBlogItemDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const blogItemData = await response.json()
    const blogDetails = {
      id: blogItemData.id,
      author: blogItemData.author,
      topic: blogItemData.topic,
      title: blogItemData.title,
      imageUrl: blogItemData.image_url,
      avatarUrl: blogItemData.avatar_url,
      content: blogItemData.content,
    }
    this.setState({blogDetailsData: blogDetails, loader: false})
  }

  render() {
    const {blogDetailsData, loader} = this.state
    console.log(blogDetailsData)
    const {imageUrl, avatarUrl, content, author, title} = blogDetailsData
    return (
      <div className="details-container">
        {loader ? (
          <div data-testid="loader" className="loader-box">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          <div>
            <h1 className="heading">{title}</h1>
            <div className="details-author-avatar-container">
              <img src={avatarUrl} className="author-img" alt={author} />
              <p className="details-author">{author}</p>
            </div>
            <img src={imageUrl} className="details-topic-img" alt={title} />
            <p className="content-para">{content}</p>
          </div>
        )}
      </div>
    )
  }
}

export default BlogItemDetails
