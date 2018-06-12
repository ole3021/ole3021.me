import { h, Component } from 'preact'
import LayoutGrid from 'preact-material-components/LayoutGrid'
import 'preact-material-components/LayoutGrid/style.css'
import 'preact-material-components/Theme/style.css'
import './style.scss'

export default class Home extends Component {
  render() {
    return (
      <div class="main header">
        <LayoutGrid>
          <LayoutGrid.Cell class="mdc-theme--primary-bg mdc-theme--on-primary">
            <section class="block">
              <h1>Oliver Wang</h1>
              <h3>I'm </h3>
              <ul>
                <li>
                  A Backend-Devloper in job & Full-stack Developer in life.
                </li>
                <li>
                  A freetime Hacker/Geek, freelancer, Consultant and IOT
                  Programmer.
                </li>
                <li>Big fan of UI/UX also UCD lover</li>
                <li>
                  Master of Software Engineering & Requirement Engineering
                </li>
                <li>Alumnus of University of York.</li>
              </ul>
            </section>
          </LayoutGrid.Cell>
          <LayoutGrid.Cell class="mdc-theme--secondary-bg mdc-theme--on-secondary">
            <section class="block">
              <h1>Skill set</h1>
              <ul>
                <li>Javascript/ES6</li>
                <li>Node.js</li>
                <li>Loopback</li>
                <li>MongoDB</li>
                <li>React/Preact</li>
              </ul>
            </section>
          </LayoutGrid.Cell>
          <LayoutGrid.Cell class="mdc-theme--primary-bg mdc-theme--on-primary">
            <section class="block">
              <h1>Help build success for</h1>
              <ul>
                <li>UbiSoft</li>
                <li>Boqii</li>
                <li>Changbai Spring</li>
                <li>Walmart</li>
                <li>Starbucks</li>
                <li>Hilton</li>
              </ul>
            </section>
          </LayoutGrid.Cell>
          <LayoutGrid.Cell class="mdc-theme--secondary-bg mdc-theme--on-primary">
            <section class="block">
              <h1>Location</h1>
              <ul>
                <li>Shanghai</li>
              </ul>
            </section>
          </LayoutGrid.Cell>
          <LayoutGrid.Cell class="mdc-theme--primary-bg mdc-theme--on-primary">
            <section class="block">
              <h1>Contact</h1>
              <form>
                <label for="name">Name</label>
                <input id="name" type="text" />
                <br />
                <label for="contact">Email/Mobile</label>
                <input id="contact" type="text" />
                <br />
                <label for="message">Message</label>
                <textarea id="message" rows="3" cols="15" />
                <button type="submmit" onclick="">
                  Submmit
                </button>
              </form>
            </section>
          </LayoutGrid.Cell>
        </LayoutGrid>
      </div>
    )
  }
}
