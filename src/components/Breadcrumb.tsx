import { Breadcrumb, Button, Flex } from 'antd';
import { DownloadOutlined, UploadOutlined, PlusOutlined } from '@ant-design/icons';

const breadcrumbs = [
    {
        title: 'Organización'
    }
];

export default function App() {
    return (
        <Flex justify={ 'space-between' } align={ 'center' }>
            <Breadcrumb style={{ margin: '0px', fontSize: 20 }} items={breadcrumbs} />
            <div>
                <Button type="primary" icon={<PlusOutlined />}/>
                <Button type="primary" icon={<UploadOutlined />} style= {{ background: 'white', color: '#1677ff', border: '1px solid #f0f0f0', margin: '0 0 0 10px' }} />
                <Button type="primary" icon={<DownloadOutlined />} style= {{ background: 'white', color: '#1677ff', border: '1px solid #f0f0f0', margin: '0 0 0 10px' }} />
            </div>
        </Flex>
    );
}