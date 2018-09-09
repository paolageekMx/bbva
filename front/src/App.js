import React, { Component } from 'react';
import './App.css';
import Routes from './Routes'
import { Layout, Breadcrumb, Icon } from 'antd'
import 'antd/dist/antd.css';
const { Header, Content, Footer } = Layout;
class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout style={{ minHeight: '100vh' }}>
          <Content style={{ margin: '0 16px' }}>
            <Routes />
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            IronHack ©2018 Created by MefitDev, MyrnaAR.
                        </Footer>
        </Layout>

      </div>
    );
  }
}

export default App;
