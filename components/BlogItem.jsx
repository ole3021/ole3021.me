import React from 'react'

class BlogItem extends React.Component {
  render () {
    const { props: { blog } } = this

    return (
      <div>
        <div className='uk-card uk-card-default uk-visible@s'>
          <div className='uk-card-media-top'>
            <img src={blog.cover} alt='' />
          </div>
          <div className='uk-card-body'>
            <h3 className='uk-card-title'>{blog.title}</h3>
            <p>{blog.meta}</p>
          </div>
        </div>
        <div className='uk-card uk-card-default uk-child-width-1-1 uk-hidden@s' data-uk-grid>
          {/* <div className='uk-card-media-left uk-cover-container'>
            <img src={blog.cover} data-uk-cover />
            <canvas width='' height='' />
          </div> */}
          <div>
            <div className='uk-card-body'>
              <h6 className='uk-card-title'>{blog.title}</h6>
              {/* <p>{blog.meta}</p> */}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default BlogItem
