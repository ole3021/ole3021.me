import React from 'react'
import { Link, browserHistory } from 'react-router'
import classNames from 'classnames'
import axios from 'axios'
import yaml from 'js-yaml'
import mixitup from 'mixitup'

import Loading from '../components/Loading'
import { buildCategories } from '../utils'

window.mixitup = mixitup

class CategorySwitcher extends React.Component {
  render () {
    const { props: { blogCategories, currentCategory } } = this

    const categorySwitchers = blogCategories ? Object.keys(blogCategories).map((name, index) => {
      return (
        <Link key={index} to={`/blogs/${name}`} className={classNames('uk-button', {'uk-button-primary': currentCategory === name})} data-mix-filter={`.${name}`}>
          {name.replace('_', ' ')}
        </Link>
      )
    })
    : null

    return (
      <div className='uk-container uk-container-center'>
        <div className='uk-flex uk-flex-center'>
          <div className='uk-button-group uk-visible@s'>
            {categorySwitchers}
          </div>
          <div className='uk-inline uk-hidden@s'>
            <button className='uk-button uk-button-default' type='button'>Click</button>
            <div data-uk-dropdown={'mode: click'}>
              {categorySwitchers}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

class CategoryBlogs extends React.Component {
  render () {
    return (
      <div className='uk-section'>
        <div className='uk-container uk-container-center'>
          <ul id='mix-wrapper' className='uk-grid-medium uk-child-width-expand@s uk-text-center' style={{}} data-uk-grid data-mix-container />
        </div>
      </div>
    )
  }
}

class Blogs extends React.Component {
  constructor (props) {
    super(props)

    this.mixer = null

    this.state = {
      isLoading: true,
      blogCategories: null,
      posts: null
    }
  }

  componentDidMount () {
    const { props: { params: { category } } } = this
    const postInfoPath = '/postInfos.yml'

    const container = document.querySelector('[data-mix-container]')

    const render = blog => (
      `<li class='mix-target ${blog.category} uk-width-1-1@s uk-width-1-3@m uk-width-1-4@l' data-mix-item data-mix-date=${blog.created.toISOString().split('T')[0]}>` +
        `<a href='/post/${blog.title}'>` +
          `<div class='uk-margin uk-text-center uk-card uk-card-default uk-card-small'>` +
            `<div class='uk-card-media-top'>` +
              `<img src=${blog.cover} alt='' />` +
            `</div>` +
            `<div class='uk-card-body'>` +
              `<h3 class='uk-card-title'>${blog.title}</h3>` +
              `<div class='el-meta uk-margin uk-text-meta'>${blog.meta}</div>` +
            `</div>` +
          `</div>` +
        `</a>` +
      `</li>`
    )

    this.mixer = mixitup(container, {
      data: {
        uidKey: 'path'
      },
      render: {
        target: render
      },
      selectors: {
        target: '[data-mix-item]'
      }
    })

    axios.get(postInfoPath).then(({data}) => {
      const posts = yaml.load(data)
      const categories = buildCategories(posts)
      this.setState({ isLoading: false, blogCategories: categories, posts: posts })

      if (!category) {
        browserHistory.push(`/blogs/all`)
      }

      this.mixer.dataset(posts)
      this.mixer.filter(category === 'all' ? 'all' : `.${category}`)
    })
  }

  componentWillUnmount () {
    this.mixer.destroy()
  }

  render () {
    const { props: { params: { category } }, state: { blogCategories, posts } } = this

    if (category && this.mixer) {
      this.mixer.filter(category === 'all' ? 'all' : `.${category}`)
    }

    return (
      <div className='uk-container'>
        <CategorySwitcher currentCategory={category} blogCategories={blogCategories} />
        <CategoryBlogs currentCategory={category} posts={posts} />
      </div>
    )
  }
}

export default Blogs
