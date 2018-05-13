import { h, Component } from 'preact'
import { Link } from 'preact-router'
import TopAppBar from 'preact-material-components/TopAppBar'
import Icon from 'preact-material-components/Icon'
import Drawer from 'preact-material-components/Drawer'
import List from 'preact-material-components/List'
import Button from 'preact-material-components/Button'
import 'preact-material-components/TopAppBar/style.css'
import 'preact-material-components/Drawer/style.css'
import 'preact-material-components/List/style.css'
import 'preact-material-components/Button/style.css'
import 'preact-material-components/Theme/style.css'
import style from './style.css'

export default class Header extends Component {
  state = {
    drawerOpened: false
  }

  toggleDrawer = () => {
    this.setState({ drawerOpened: !this.state.drawerOpened })
  }

  render() {
    return (
      <div>
        <Drawer.TemporaryDrawer
          open={this.state.drawerOpened}
          onClose={() => {
            this.setState({
              drawerOpened: false
            })
          }}
          class={style.drawer}
        >
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
            <List>
              <List.LinkItem href="/" onClick={this.toggleDrawer}>
                <List.ItemGraphic>home</List.ItemGraphic>
                <List.TextContainer>
                  <List.PrimaryText>Home</List.PrimaryText>
                  <List.SecondaryText>The Home page of site</List.SecondaryText>
                </List.TextContainer>
              </List.LinkItem>
              <List.LinkItem href="/blogs" onClick={this.toggleDrawer}>
                <List.ItemGraphic>mms</List.ItemGraphic>
                <List.TextContainer>
                  <List.PrimaryText>Blogs</List.PrimaryText>
                  <List.SecondaryText>The blogs of my own</List.SecondaryText>
                </List.TextContainer>
              </List.LinkItem>
              <List.LinkItem href="/works" onClick={this.toggleDrawer}>
                <List.ItemGraphic>folder_special</List.ItemGraphic>
                <List.TextContainer>
                  <List.PrimaryText>Works</List.PrimaryText>
                  <List.SecondaryText>
                    The works that i have done
                  </List.SecondaryText>
                </List.TextContainer>
              </List.LinkItem>
              <List.LinkItem href="/about" onClick={this.toggleDrawer}>
                <List.ItemGraphic>face</List.ItemGraphic>
                <List.TextContainer>
                  <List.PrimaryText>About</List.PrimaryText>
                  <List.SecondaryText>About myself</List.SecondaryText>
                </List.TextContainer>
              </List.LinkItem>
            </List>
          </Drawer.DrawerContent>
        </Drawer.TemporaryDrawer>

        <TopAppBar class={style.topBar} fixed>
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
      </div>
    )
  }
}
