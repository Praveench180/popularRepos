import {Component} from 'react'
import './index.css'
import Loader from 'react-loader-spinner'
import LanguageFilterItem from '../LanguageFilterItem'
import RepositoryItem from '../RepositoryItem'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

class GithubPopularRepos extends Component {
  state = {
    activeId: languageFiltersData[0].id,
    itemsList: [],
    succesStatus: false,
    isLoading: true,
  }

  componentDidMount() {
    this.getRespone()
  }

  onClickFilterItem = id => {
    this.setState({activeId: id}, this.getRespone)
  }

  loader = () => (
    <div data-testid="loader">
      <Loader type="ThreeDots" color="#0284c7" height={80} width={80} />
    </div>
  )

  getRespone = async () => {
    const {activeId} = this.state
    const filterdeId = languageFiltersData.find(each => each.id === activeId)
    const {language} = filterdeId
    const url = `https://apis.ccbp.in/popular-repos?language=${language}`
    console.log(url)
    const response = await fetch(url)
    if (response.ok === true) {
      const data = await response.json()
      const fetchedData = data.popular_repos.map(each => ({
        name: each.name,
        id: each.id,
        issuesCount: each.issues_count,
        forksCount: each.forks_count,
        starsCount: each.stars_count,
        avatarUrl: each.avatar_url,
      }))
      this.setState({
        itemsList: fetchedData,
        isLoading: false,
      })
    } else {
      this.setState({succesStatus: true, isLoading: false})
    }
  }

  failureView = () => (
    <div className="container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
        alt="failure view"
        className="fail"
      />
      <p>Something went Wrong</p>
    </div>
  )

  render() {
    const {itemsList, activeId, succesStatus, isLoading} = this.state
    console.log(itemsList)
    return (
      <div className="bgContainer">
        <h1 className="pop">Popular</h1>
        <ul className="languages">
          {languageFiltersData.map(each => (
            <LanguageFilterItem
              languageItem={each}
              key={each.id}
              isActive={activeId === each.id}
              click={this.onClickFilterItem}
            />
          ))}
        </ul>
        {succesStatus ? (
          this.failureView()
        ) : (
          <>
            {isLoading ? (
              this.loader()
            ) : (
              <ul className="RepositoryItem">
                {itemsList.map(each => (
                  <RepositoryItem item={each} key={each.id} />
                ))}
              </ul>
            )}{' '}
          </>
        )}
      </div>
    )
  }
}
export default GithubPopularRepos
