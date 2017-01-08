import React from 'react'

class Article extends React.Component {
  render () {
    const { props: { params: { title } } } = this
    return (
      <div>
        {title}
      </div>
    )
  }
}

export default Article
