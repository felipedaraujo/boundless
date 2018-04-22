import React, { Component } from 'react';
import { Layout } from 'antd';
const { Header, Content } = Layout;

class Home extends Component {
  render() {
    return (
      <Layout>
        <Header>Header</Header>
        <Content style={{ height: '100%' }}>Content</Content>
      </Layout>
    );
  }
}

export default Home;
