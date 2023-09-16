// Write your code here
import './index.css'

const LanguageFilterItem = props => {
  const {languageItem, isActive, click} = props
  const {id, language} = languageItem

  const OnClick = () => {
    click(id)
  }

  const buttonActive = isActive ? 'but-Style' : 'butt'

  return (
    <li>
      <button type="button" className={buttonActive} onClick={OnClick}>
        {language}
      </button>
    </li>
  )
}

export default LanguageFilterItem
