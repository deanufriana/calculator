import { Layout, Menu, Breadcrumb, Card, Row, Col, Table, Input } from 'antd';
const { Header, Content, Footer } = Layout;
import { useState } from 'react'

const Calculator = () => {
    const [history, setHistory] = useState([])
    const [firstNumber, setFirstNumber] = useState('')
    const [operator, setOperator] = useState('')
    const [lastNumber, setLastNumber] = useState('')

    const clear = () => {
        setOperator('')
        setLastNumber('')
        setFirstNumber('')
    }

    const calculate = (value) => {

        if (value == 'CE') return clear()

        if (typeof value == 'number') {
            if (operator == '') {
                setFirstNumber(firstNumber.toString() + value.toString())
            } else {
                setLastNumber(lastNumber.toString() + value.toString())
            }
        }

        if (['+', '-', '*', '/'].includes(value) && firstNumber != '') {
            setOperator(value)
        }

        if (value == '=' && lastNumber != '') {
            let result;
            if (operator == '+') result = +firstNumber + +lastNumber
            if (operator == '-') result = +firstNumber - +lastNumber
            if (operator == '*') result = +firstNumber * +lastNumber
            if (operator == '/') result = +firstNumber / +lastNumber

            setHistory([...history, { firstNumber, lastNumber, result: result.toString(), operator }])
            clear()
        }

    }

    const data = [
        { row: [7, 8, 9, '/'] },
        { row: [4, 5, 6, '-'] },
        { row: [1, 2, 3, '+'] },
        { row: ['CE', 0, '*', '='] }
    ]

    const columns = [
        {
            title: 'Angka Pertama',
            dataIndex: 'firstNumber',
            key: 'firstNumber'
        },
        {
            title: 'Operator',
            dataIndex: 'operator',
            key: 'operator',
        },
        {
            title: 'Angka Terakhir',
            dataIndex: 'lastNumber',
            key: 'lastNumber',
        },
        {
            title: 'Hasil',
            dataIndex: 'result',
            key: 'result',
        },
    ];

    const title = firstNumber + operator + lastNumber
    return <Content style={{ padding: '0 50px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Kalkulator</Breadcrumb.Item>
        </Breadcrumb>
        <div className="site-layout-content">
            <Row gutter={[8, 8]}>
                <Col span={8}>
                    <Card style={{ textAlign: 'right' }} title={title ? title : '0'}>
                        {data.map((item, index) => {
                            return item.row.map(cal => {
                                return <a onClick={() => calculate(cal)}> <Card.Grid style={{ width: '25%', textAlign: 'center', backgroundColor: typeof cal == 'string' ? 'rgba(52,52,52,0.1)' : 'white' }}>
                                    {cal}
                                </Card.Grid></a>
                            })
                        })}
                    </Card>
                </Col>
                <Col span={16}>
                    <Table columns={columns} dataSource={history}></Table>
                </Col>
            </Row>
        </div>
    </Content>

}

export default Calculator;