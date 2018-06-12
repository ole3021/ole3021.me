import { h, Component } from 'preact'
import LayoutGrid from 'preact-material-components/LayoutGrid'
import style from './style.css'

export default class Content extends Component() {
  render({ id = null }, state) {
    console.log('>>> blogId', id)
    return (
      <div class={style.content}>
        <div class={style.ribbon} />
        <div>
          <LayoutGrid>
            <LayoutGrid.Inner>
              <LayoutGrid.Cell cols="2" class="mdc-layout-grid--align-left">
                <div />
              </LayoutGrid.Cell>
              <LayoutGrid.Cell cols="8" class=" mdc-layout-grid--align-right">
                <div class={style.main}>
                  <div class={style.crumbs}>
                    Google &gt; Material Design Lite &gt; How to install MDL
                  </div>
                  <h1>How to install MDL</h1>
                  <p>
                    Cillum dolor esse sit incididunt velit eiusmod magna ad
                    nostrud officia aute dolor dolor. Magna esse ullamco
                    pariatur adipisicing consectetur eu commodo officia. Ex
                    cillum consequat mollit minim elit est deserunt occaecat
                    nisi amet. Quis aliqua nostrud Lorem occaecat sunt. Eiusmod
                    quis amet ullamco aliquip dolore ut incididunt duis
                    adipisicing. Elit consequat nisi eiusmod aute ipsum sunt
                    veniam do est. Occaecat mollit aliquip ut proident
                    consectetur amet ex dolore consectetur aliqua elit.
                  </p>
                  <p>
                    Commodo nisi non consectetur voluptate incididunt mollit
                    duis dolore amet amet tempor exercitation. Qui amet aute ea
                    aute id ad aliquip proident. Irure duis qui labore deserunt
                    enim in quis nisi sint consequat aliqua. Ex proident labore
                    et laborum tempor fugiat sint magna veniam minim. Nulla
                    dolor labore adipisicing in enim mollit laboris fugiat eu.
                    Aliquip minim cillum ullamco voluptate non dolore non ex
                    duis fugiat duis ad. Deserunt cillum ad et nisi amet non
                    voluptate culpa qui do. Labore ullamco et minim proident est
                    laborum mollit ad labore deserunt ut irure dolore.
                    Reprehenderit ad ad irure ut irure qui est eu velit eu
                    excepteur adipisicing culpa. Laborum cupidatat ullamco eu
                    duis anim reprehenderit proident aute ad consectetur
                    eiusmod.
                  </p>
                  <p>
                    Tempor tempor aliqua in commodo cillum Lorem magna dolore
                    proident Lorem. Esse ad consequat est excepteur irure eu
                    irure quis aliqua qui. Do mollit esse veniam excepteur ut
                    veniam anim minim dolore sit commodo consequat duis commodo.
                    Sunt dolor reprehenderit ipsum minim eiusmod eu consectetur
                    anim excepteur eiusmod. Duis excepteur anim dolor sit enim
                    veniam deserunt anim adipisicing Lorem elit. Cillum sunt do
                    consequat elit laboris nisi consectetur.
                  </p>
                  <h2>Basic MDL Usage</h2>
                  <p>
                    Cillum dolor esse sit incididunt velit eiusmod magna ad
                    nostrud officia aute dolor dolor. Magna esse ullamco
                    pariatur adipisicing consectetur eu commodo officia. Ex
                    cillum consequat mollit minim elit est deserunt occaecat
                    nisi amet. Quis aliqua nostrud Lorem occaecat sunt. Eiusmod
                    quis amet ullamco aliquip dolore ut incididunt duis
                    adipisicing. Elit consequat nisi eiusmod aute ipsum sunt
                    veniam do est. Occaecat mollit aliquip ut proident
                    consectetur amet ex dolore consectetur aliqua elit.
                  </p>
                  <p>
                    Commodo nisi non consectetur voluptate incididunt mollit
                    duis dolore amet amet tempor exercitation. Qui amet aute ea
                    aute id ad aliquip proident. Irure duis qui labore deserunt
                    enim in quis nisi sint consequat aliqua. Ex proident labore
                    et laborum tempor fugiat sint magna veniam minim. Nulla
                    dolor labore adipisicing in enim mollit laboris fugiat eu.
                    Aliquip minim cillum ullamco voluptate non dolore non ex
                    duis fugiat duis ad. Deserunt cillum ad et nisi amet non
                    voluptate culpa qui do. Labore ullamco et minim proident est
                    laborum mollit ad labore deserunt ut irure dolore.
                    Reprehenderit ad ad irure ut irure qui est eu velit eu
                    excepteur adipisicing culpa. Laborum cupidatat ullamco eu
                    duis anim reprehenderit proident aute ad consectetur
                    eiusmod.
                  </p>
                  <p>
                    Cillum dolor esse sit incididunt velit eiusmod magna ad
                    nostrud officia aute dolor dolor. Magna esse ullamco
                    pariatur adipisicing consectetur eu commodo officia. Ex
                    cillum consequat mollit minim elit est deserunt occaecat
                    nisi amet. Quis aliqua nostrud Lorem occaecat sunt. Eiusmod
                    quis amet ullamco aliquip dolore ut incididunt duis
                    adipisicing. Elit consequat nisi eiusmod aute ipsum sunt
                    veniam do est. Occaecat mollit aliquip ut proident
                    consectetur amet ex dolore consectetur aliqua elit.
                  </p>
                  <p>
                    Commodo nisi non consectetur voluptate incididunt mollit
                    duis dolore amet amet tempor exercitation. Qui amet aute ea
                    aute id ad aliquip proident. Irure duis qui labore deserunt
                    enim in quis nisi sint consequat aliqua. Ex proident labore
                    et laborum tempor fugiat sint magna veniam minim. Nulla
                    dolor labore adipisicing in enim mollit laboris fugiat eu.
                    Aliquip minim cillum ullamco voluptate non dolore non ex
                    duis fugiat duis ad. Deserunt cillum ad et nisi amet non
                    voluptate culpa qui do. Labore ullamco et minim proident est
                    laborum mollit ad labore deserunt ut irure dolore.
                    Reprehenderit ad ad irure ut irure qui est eu velit eu
                    excepteur adipisicing culpa. Laborum cupidatat ullamco eu
                    duis anim reprehenderit proident aute ad consectetur
                    eiusmod.
                  </p>
                  <p>
                    Cillum dolor esse sit incididunt velit eiusmod magna ad
                    nostrud officia aute dolor dolor. Magna esse ullamco
                    pariatur adipisicing consectetur eu commodo officia. Ex
                    cillum consequat mollit minim elit est deserunt occaecat
                    nisi amet. Quis aliqua nostrud Lorem occaecat sunt. Eiusmod
                    quis amet ullamco aliquip dolore ut incididunt duis
                    adipisicing. Elit consequat nisi eiusmod aute ipsum sunt
                    veniam do est. Occaecat mollit aliquip ut proident
                    consectetur amet ex dolore consectetur aliqua elit.
                  </p>
                  <p>
                    Commodo nisi non consectetur voluptate incididunt mollit
                    duis dolore amet amet tempor exercitation. Qui amet aute ea
                    aute id ad aliquip proident. Irure duis qui labore deserunt
                    enim in quis nisi sint consequat aliqua. Ex proident labore
                    et laborum tempor fugiat sint magna veniam minim. Nulla
                    dolor labore adipisicing in enim mollit laboris fugiat eu.
                    Aliquip minim cillum ullamco voluptate non dolore non ex
                    duis fugiat duis ad. Deserunt cillum ad et nisi amet non
                    voluptate culpa qui do. Labore ullamco et minim proident est
                    laborum mollit ad labore deserunt ut irure dolore.
                    Reprehenderit ad ad irure ut irure qui est eu velit eu
                    excepteur adipisicing culpa. Laborum cupidatat ullamco eu
                    duis anim reprehenderit proident aute ad consectetur
                    eiusmod.
                  </p>
                  <p>
                    Cillum dolor esse sit incididunt velit eiusmod magna ad
                    nostrud officia aute dolor dolor. Magna esse ullamco
                    pariatur adipisicing consectetur eu commodo officia. Ex
                    cillum consequat mollit minim elit est deserunt occaecat
                    nisi amet. Quis aliqua nostrud Lorem occaecat sunt. Eiusmod
                    quis amet ullamco aliquip dolore ut incididunt duis
                    adipisicing. Elit consequat nisi eiusmod aute ipsum sunt
                    veniam do est. Occaecat mollit aliquip ut proident
                    consectetur amet ex dolore consectetur aliqua elit.
                  </p>
                  <p>
                    Commodo nisi non consectetur voluptate incididunt mollit
                    duis dolore amet amet tempor exercitation. Qui amet aute ea
                    aute id ad aliquip proident. Irure duis qui labore deserunt
                    enim in quis nisi sint consequat aliqua. Ex proident labore
                    et laborum tempor fugiat sint magna veniam minim. Nulla
                    dolor labore adipisicing in enim mollit laboris fugiat eu.
                    Aliquip minim cillum ullamco voluptate non dolore non ex
                    duis fugiat duis ad. Deserunt cillum ad et nisi amet non
                    voluptate culpa qui do. Labore ullamco et minim proident est
                    laborum mollit ad labore deserunt ut irure dolore.
                    Reprehenderit ad ad irure ut irure qui est eu velit eu
                    excepteur adipisicing culpa. Laborum cupidatat ullamco eu
                    duis anim reprehenderit proident aute ad consectetur
                    eiusmod.
                  </p>
                </div>
              </LayoutGrid.Cell>
              <LayoutGrid.Cell cols="2" class="mdc-layout-grid--align-left">
                <div />
              </LayoutGrid.Cell>
            </LayoutGrid.Inner>
          </LayoutGrid>
        </div>
      </div>
    )
  }
}
