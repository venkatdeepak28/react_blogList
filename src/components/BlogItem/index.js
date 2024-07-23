// Write your JS code here
import BlogList from '../BlogList'
import './index.css'

const BlogItem = props => {
  const {blogsList} = props

  return (
    <ul className="second-list">
      {blogsList.map(eachValue => (
        <BlogList key={eachValue.id} eachValue={eachValue} />
      ))}
    </ul>
  )
}

export default BlogItem
