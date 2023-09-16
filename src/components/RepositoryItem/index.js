// Write your code here
import './index.css'

const RepositoryItem = props => {
  const {item} = props
  const {issuesCount, forksCount, starsCount, avatarUrl, name} = item
  console.log(name)
  return (
    <li>
      <img src={avatarUrl} alt={name} className="image" />
      <h1 className="head">{name}</h1>
      <div className="card">
        <img
          src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
          alt="stars"
          className="icon"
        />
        <p>{starsCount} stars</p>
      </div>
      <div className="card">
        <img
          src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
          alt="forks"
          className="icon"
        />
        <p>{forksCount} forks</p>
      </div>
      <div className="card">
        <img
          src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
          alt="open issues"
          className="icon"
        />
        <p>{issuesCount} open issues</p>
      </div>
    </li>
  )
}

export default RepositoryItem
