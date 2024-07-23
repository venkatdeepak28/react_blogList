// Write your JS code here
import './index.css'

const BlogList = props => {
  const {eachValue} = props
  const {title, description, publishedDate} = eachValue

  return (
    <li className="second-el">
      <div className="inner-container">
        <h1 className="main-heading">{title}</h1>
        <p className="para">{publishedDate}</p>
      </div>
      <p className="para">{description}</p>
    </li>
  )
}

export default BlogList
