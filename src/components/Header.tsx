import { Layout, Menu } from 'antd';

const { Header } = Layout;

const logo = 'https://dummyimage.com/300x200/000000/fff&text=+LOGO';

const menu = [
    {
        key: 1,
        label: 'Dashboard',
        style: {
            borderRadius: '5px',
            margin: 'auto 10px auto 10px' 
        }
    },
    {
        key: 2,
        label: 'Organización',
        style: {
            borderRadius: '5px',
            margin: 'auto 10px auto 0' 
        }
    },
    {
        key: 3,
        label: 'Modelos',
        style: {
            borderRadius: '5px',
            margin: 'auto 10px auto 0' 
        }
    },
    {
        key: 4,
        label: 'Seguimiento',
        style: {
            borderRadius: '5px',
            margin: 'auto 10px auto 0' 
        }
    }
];

export default function App() {
    return (
        <Header style={{ display: 'flex', alignItems: 'center', lineHeight: '40px', padding: 0, height: 55, background: '#178bf7'  }}>
            <img src={logo} className="App-logo" alt="logo" />
            <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            items={menu}
            style={{ flex: 1, minWidth: 0, background: '#178bf7'}}
            />
        </Header>
    );
}