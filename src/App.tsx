import React, { useEffect, useState } from 'react';
import { Layout } from 'antd';
import { Tabs } from 'antd';
import Header from './components/Header';
import DataTable from './components/Table';
import Breadcrumb from './components/Breadcrumb';
import type { TabsProps } from 'antd';

import './App.css';

const { Content } = Layout;
const boxStyle: React.CSSProperties = {
    width: '100%',
    height: 120,
    borderRadius: 6,
    border: '1px solid #40a9ff',
};

const App: React.FC = () => {
    const tabs: TabsProps['items'] = [
        {
            key: '1',
            label: 'Divisiones',
            children: (
                <div className='tab_content'>
                    <DataTable/>
                </div>
            ),
        },
        {
            key: '2',
            label: 'Colaboradores',
            children: (
                <div className='tab_content'>Sin información</div>
            ),
        }
    ];

    return (
        <Layout>
            <Header />
            <Content style={{ padding: '15px 48px', background: 'white' }}>                
                <Breadcrumb />
                <Tabs defaultActiveKey="1" items={tabs} tabBarStyle={{ margin: '0' }}/>
            </Content>
        </Layout>
    );
};

export default App;
