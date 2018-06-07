import { h, Component } from 'preact'
import { route } from 'preact-router'
import TopAppBar from 'preact-material-components/TopAppBar'
import Icon from 'preact-material-components/Icon'
import Drawer from 'preact-material-components/Drawer'
import List from 'preact-material-components/List'
// import Dialog from 'preact-material-components/Dialog'
// import Switch from 'preact-material-components/Switch'
// import 'preact-material-components/Switch/style.css'
// import 'preact-material-components/Dialog/style.css'
import 'preact-material-components/TopAppBar/style.css'
import 'preact-material-components/Drawer/style.css'
import 'preact-material-components/List/style.css'
import 'preact-material-components/Theme/style.css'

// import style from './style';

export default class Header extends Component {
  toggleDrawer = () => {
    this.drawer.MDComponent.open = !this.drawer.MDComponent.open
  }

  drawerRef = drawer => (this.drawer = drawer)

  linkTo = path => () => {
    route(path)
    this.toggleDrawer()
  }

  goHome = this.linkTo('/')
  goBlogs = this.linkTo('/blogs')
  goWorks = this.linkTo('/works')
  goAbout = this.linkTo('/about')

  render() {
    return (
      <div>
        <TopAppBar fixed>
          <TopAppBar.Row>
            <TopAppBar.Section align-start>
              <TopAppBar.Icon navigation onClick={this.toggleDrawer}>
                menu
              </TopAppBar.Icon>
              <TopAppBar.Title>OLE3021 BLOG</TopAppBar.Title>
            </TopAppBar.Section>
            <TopAppBar.Section align-end>
              <TopAppBar.Icon>favorite_border</TopAppBar.Icon>
            </TopAppBar.Section>
          </TopAppBar.Row>
        </TopAppBar>

        <Drawer.TemporaryDrawer ref={this.drawerRef}>
          <Drawer.DrawerHeader class="mdc-theme--primary-bg">
            <div>
              <h1 class="mdc-theme--text-primary-on-dark">Oliver.W</h1>
              {/* <h3>OLE3021</h3> */}
              <h5 class="mdc-theme--text-secondary-on-dark">
                github.com/ole3021
              </h5>
              <h5 class="mdc-theme--text-secondary-on-dark">ole3021.me</h5>
            </div>
          </Drawer.DrawerHeader>
          <Drawer.DrawerContent>
            <Drawer.DrawerItem onClick={this.goHome}>
              <List.ItemGraphic>home</List.ItemGraphic>
              <List.TextContainer>
                <List.PrimaryText>Home</List.PrimaryText>
                <List.SecondaryText>The Home page of site</List.SecondaryText>
              </List.TextContainer>
            </Drawer.DrawerItem>
            <Drawer.DrawerItem onClick={this.goBlogs}>
              <List.ItemGraphic>mms</List.ItemGraphic>
              <List.TextContainer>
                <List.PrimaryText>Blogs</List.PrimaryText>
                <List.SecondaryText>The blogs of my own</List.SecondaryText>
              </List.TextContainer>
            </Drawer.DrawerItem>
            <Drawer.DrawerItem onClick={this.goWorks}>
              <List.ItemGraphic>folder_special</List.ItemGraphic>
              <List.TextContainer>
                <List.PrimaryText>Works</List.PrimaryText>
                <List.SecondaryText>
                  The works that i have done
                </List.SecondaryText>
              </List.TextContainer>
            </Drawer.DrawerItem>
            <Drawer.DrawerItem onClick={this.goAbout}>
              <List.ItemGraphic>face</List.ItemGraphic>
              <List.TextContainer>
                <List.PrimaryText>About</List.PrimaryText>
                <List.SecondaryText>About myself</List.SecondaryText>
              </List.TextContainer>
            </Drawer.DrawerItem>
          </Drawer.DrawerContent>
        </Drawer.TemporaryDrawer>
      </div>
    )
  }
}
