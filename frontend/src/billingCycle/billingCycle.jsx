import React, { Component } from 'react'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import Tabs from '../common/tab/tabs'
import TabsHeader from '../common/tab/tabsHeader'
import TabsContent from '../common/tab/tabsContent'
import TabHeader from '../common/tab/tabHeader'

class BillingCycle extends Component {
  render() {
    return (
      <div>
        <ContentHeader title='Ciclos de pagamento' small='Cadastro' />
        <Content>
          <Tabs>
            <TabsHeader>
              <TabHeader label='Listar' icon='bars' target='tab-list' />
              <TabHeader label='Incluir' icon='plus' target='tab-create' />
              <TabHeader label='Alterar' icon='pencil' target='tab-update' />
              <TabHeader label='Excluir' icon='trash-o' target='tab-delete' />
            </TabsHeader>
            <TabsContent>

            </TabsContent>
          </Tabs>
        </Content>
      </div>
    )
  }
}

export default BillingCycle
