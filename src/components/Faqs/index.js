import {Component} from 'react'

import FaqItem from '../FaqItem'

import './index.css'

class Faqs extends Component {
  state = {expandingTextList: []}

  updateExpandingTextList = id => {
    const {expandingTextList} = this.state
    if (expandingTextList.includes(id)) {
      expandingTextList.pop(id)
      this.setState({expandingTextList})
    } else {
      this.setState(prevState => ({
        expandingTextList: [...prevState.expandingTextList, id],
      }))
    }
  }

  render() {
    const {faqsList} = this.props
    const {expandingTextList} = this.state
    return (
      <div className="bg-container">
        <div className="inner-container">
          <h1 className="main-heading">FAQs</h1>
          <ul className="faq-items-container">
            {faqsList.map(eachFaq => (
              <FaqItem
                key={eachFaq.id}
                faqDetails={eachFaq}
                expandingTextList={expandingTextList}
                updateExpandingTextList={this.updateExpandingTextList}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs
