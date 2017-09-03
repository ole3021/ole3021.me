import React from 'react'
import { Link, browserHistory } from 'react-router'
import classNames from 'classnames'
import axios from 'axios'
import yaml from 'js-yaml'

import Navigation from '../components/Navigation'
import Loading from '../components/Loading'
import { buildCategories } from '../utils'

class CategoryTabs extends React.Component {
  render () {
    const { props: { blogCategories, currentCategory } } = this

    const CategoryNavs = blogCategories
      ? Object.keys(blogCategories).map((name, index) => {
        return <li key={index}
          className={classNames({'uk-active': currentCategory === name})}>
          <Link to={`/blogs/${name}`}>{name.replace('_', ' ')}</Link>
        </li>
      })
      : null
    return (
      <ul className="uk-subnav uk-subnav-pill" data-uk-switcher>
        {CategoryNavs}
      </ul>      
    )
  }
}

class CategoryBlogs extends React.Component {
  render () {
    const { props: { blogCategories, currentCategory } } = this
    
    const blogList = (blogs) => {
      const blogItems = blogs.map((blog, index) => 
        <Link key={index} to={`/post/${blog.title}`} className="uk-width-1-4@m">
          <div className="uk-card uk-card-default">
            <div className="uk-card-media-top">
              <img src={ blog.cover } alt="" />
            </div>
            <div className="uk-card-body">
              <h3 className="uk-card-title">{blog.title}</h3>
              <p>{blog.meta}</p>
            </div>
          </div>
        </Link>
      )
      return (
        <div className="uk-grid-medium uk-child-width-expand@s uk-text-center" data-uk-grid>
          {blogItems}
        </div>
      )
    }

    const blogByCategories = blogCategories
      ? Object.keys(blogCategories).map((name, index) => 
        <li key={index}>{blogList(blogCategories[name])}</li>
      )
      : <Loading />

    return (
      <ul className="uk-switcher uk-margin">
        {blogByCategories}
      </ul>
    )
  }
}

class Blogs extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      isLoading: true,
      blogCategories: null
    }
  }

  componentDidMount () {
    const { props: { params: { category } } } = this
    const postInfoPath = '/postInfos.yml'
    axios.get(postInfoPath).then(({data}) => {
      const posts = yaml.load(data)
      const categories = buildCategories(posts)
      // article = marked(data)
      this.setState({ isLoading: false, blogCategories: categories })
      if (!category) {
        browserHistory.push(`/blogs/${Object.keys(categories)[0]}`)
      }
    })
  }

  render () {
    const { props: { location: { pathname } }, props: { params: { category } }, state: { blogCategories } } = this

    return (
      <div className="uk-container">
        <Navigation pathname={pathname} />
        <div className="uk-flex uk-flex-column uk-flex-middle">
          <CategoryTabs currentCategory={category} blogCategories={blogCategories}/>
          <CategoryBlogs currentCategory={category} blogCategories={blogCategories} />
        </div>
      </div>
    )
  }
}

export default Blogs
