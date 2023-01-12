// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'
import BlogItem from '../BlogItem'

class BlogList extends Component {
  state = {blogsList: [], loader: true}

  componentDidMount() {
    this.getBlogData()
  }

  getBlogData = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const blogsData = await response.json()

    const blogsListData = blogsData.map(eachItem => ({
      id: eachItem.id,
      title: eachItem.title,
      imageUrl: eachItem.image_url,
      avatarUrl: eachItem.avatar_url,
      author: eachItem.author,
      topic: eachItem.topic,
    }))
    this.setState({blogsList: [...blogsListData], loader: false})
  }

  render() {
    const {blogsList, loader} = this.state
    console.log(blogsList)

    return (
      <ul className="courses-box">
        {loader ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          blogsList.map(eachItem => (
            <BlogItem key={eachItem.id} blogList={eachItem} />
          ))
        )}
      </ul>
    )
  }
}

export default BlogList
