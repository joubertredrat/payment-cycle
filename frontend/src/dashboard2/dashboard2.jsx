import React, { Component } from 'react'
import axios from 'axios'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import ValueBox from '../common/widget/valueBox'
import Row from '../common/layout/row'

const base_url = 'http://localhost:3003/api'

export default class Dashboard2 extends Component {
  constructor(props) {
    super(props)
    this.state = { credit: 0, debt: 0 }
  }

  componentWillMount() {
    axios
      .get(`${base_url}/billingCycles/summary`)
      .then(resp => this.setState(resp.data))
  }

  render() {
    const { credit, debt } = this.state

    return (
      <div>
        <ContentHeader title='Dashboard React' small='Versão 1.0' />
        <Content>
          <Row>
            <ValueBox
              cols='12 4'
              color='green'
              icon='bank'
              value={`R$ ${credit}`}
              text='Total de créditos'
            />
            <ValueBox
              cols='12 4'
              color='red'
              icon='credit-card'
              value={`R$ ${debt}`}
              text='Total de débitos'
            />
            <ValueBox
              cols='12 4'
              color='blue'
              icon='money'
              value={`R$ ${credit - debt}`}
              text='Valor consolidado'
            />
          </Row>
        </Content>
      </div>
    )
  }
}
