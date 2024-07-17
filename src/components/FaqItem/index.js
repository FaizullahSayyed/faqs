import './index.css'

const FaqItem = props => {
  const {faqDetails, expandingTextList, updateExpandingTextList} = props
  const {id, questionText, answerText} = faqDetails

  const onClickExpand = () => {
    updateExpandingTextList(id)
  }

  const isAnswerVisible = expandingTextList.includes(id)

  return (
    <li className="list-item">
      <div className="question-container">
        <h1 className="question">{questionText}</h1>
        <div className="button-container">
          {!isAnswerVisible ? (
            <button type="button" className="button" onClick={onClickExpand}>
              <img
                src="https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png"
                alt="plus"
                className="button-image"
              />
            </button>
          ) : (
            <button type="button" className="button" onClick={onClickExpand}>
              <img
                src="https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png"
                alt="minus"
                className="button-image"
              />
            </button>
          )}
        </div>
      </div>
      {isAnswerVisible && <hr className="hr-line" />}
      {isAnswerVisible && <p className="answer">{answerText}</p>}
    </li>
  )
}

export default FaqItem
