import { useEffect, useState } from 'react';
import { Table, Select, Flex, Radio, Input } from 'antd';
import type { TableColumnsType, TableProps } from 'antd';

const { Option } = Select;
const { Search } = Input;

type TableRowSelection<T> = TableProps<T>['rowSelection'];

interface DataType {
    key: React.Key;
    division: string;
    division_superior: string;
    colaboradores: number;
    nivel: number;
    subdivisiones: number;
    embajador: string;
}

const selectBefore = (
    <Select defaultValue="Columnas" style={{width: "200px", textAlign: 'left'}} dropdownStyle={{width: "200px"}}>
        <Option value="division">División</Option>
        <Option value="division_superior">División superior</Option>
        <Option value="colaboradores">Colaboradores</Option>
        <Option value="nivel">Nivel</Option>
        <Option value="subdivisiones">Subdivisiones</Option>
        <Option value="embajador">Embajador</Option>
    </Select>
);

export default function App() {
    const [data, setData] = useState<DataType[]>();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        setLoading(true);
        fetch(`${process.env.REACT_APP_BACKEND_HOST}/api/departments`)
        .then((res) => res.json())
        .then(({ data }) => {
            setData(data);
            setLoading(false);
        });
    };

    const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);

    const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
        setSelectedRowKeys(newSelectedRowKeys);
    };

    const rowSelection: TableRowSelection<DataType> = {
        selectedRowKeys,
        onChange: onSelectChange
    };

    const divisiones = data ? Array.from(
        new Set(data?.map((item: any) => item.division)),
        (item) => ({ text: item, value: item})
    ) : [];

    const division_superiores = data ? Array.from(
        new Set(data?.map((item: any) => item.division_superior)),
        (item) => ({ text: item, value: item})
    ) : [];

    const niveles = data ? Array.from(
        new Set(data?.map((item: any) => item.nivel)),
        (item) => ({ text: item, value: item})
    ) : [];

    const columns: TableColumnsType<DataType> = [
        {
            title: 'División',
            dataIndex: 'division',
            sorter: (a, b) => a.division.localeCompare(b.division),
            filters: divisiones,
            onFilter: (value, record) => record.division.indexOf(value as string) === 0,
        },
        {
            title: 'División superior',
            dataIndex: 'division_superior',
            sorter: (a, b) => a.division_superior.localeCompare(b.division_superior),
            filters: division_superiores,
            onFilter: (value, record) => record.division_superior.indexOf( value as string) === 0,
        },
        {
            title: 'Colaboradores',
            dataIndex: 'colaboradores',
            sorter: (a, b) => a.colaboradores - b.colaboradores,
        },
        {
            title: 'Nivel',
            dataIndex: 'nivel',
            sorter: (a, b) => a.nivel - b.nivel,
            filters: niveles,
            onFilter: (value, record) => record.nivel === value,
        },
        {
            title: 'Subdivisiones',
            dataIndex: 'subdivisiones',
            sorter: (a, b) => a.subdivisiones - b.subdivisiones,
        },
        {
            title: 'Embajador',
            dataIndex: 'embajador',
        }
    ];

     return (
        <>
            <Flex justify={ 'space-between' } align={ 'center' }>
                <Radio.Group defaultValue="a" style={{ margin: '10px 0px' }}>
                    <Radio.Button value="Listado">Listado</Radio.Button>
                    <Radio.Button value="Árbol" disabled>Árbol</Radio.Button>
                </Radio.Group>
                <div>
                    <Search addonBefore={selectBefore} placeholder="Buscar" allowClear />
                </div>
            </Flex>
            <Table bordered size={'small'} rowSelection={rowSelection} columns={columns} loading={loading} dataSource={data} />
        </>
    );
}