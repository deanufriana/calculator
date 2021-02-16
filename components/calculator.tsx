import { Layout, Breadcrumb, Typography, Card, Row, Col, Table, Button } from 'antd';
const { Content } = Layout;
const { Title } = Typography
import { useState } from 'react'
import { numberWithCommas } from '../lib/function';

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
                if (firstNumber.length > 11) return
                setFirstNumber(firstNumber + value.toString())
            } else {
                if (lastNumber.length > 11) return
                setLastNumber(lastNumber + value.toString())
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
            title: 'Pertama',
            dataIndex: 'firstNumber',
            key: 'firstNumber',
            render: (text, row, index) => {
                return numberWithCommas(text);
            }
        },
        {
            title: 'Op',
            dataIndex: 'operator',
            key: 'operator',
        },
        {
            title: 'Terakhir',
            dataIndex: 'lastNumber',
            key: 'lastNumber',
            render: (text, row, index) => {
                return numberWithCommas(text);
            }
        },
        {
            title: 'Hasil',
            dataIndex: 'result',
            key: 'result',
            render: (text, row, index) => {
                return numberWithCommas(text);
            }
        },
    ];

    const title = numberWithCommas(lastNumber)
    return <Content style={{ padding: '0 50px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Kalkulator</Breadcrumb.Item>
        </Breadcrumb>
        <div className="site-layout-content">
            <Row gutter={[8, 8]}>
                <Col flex="400px">
                    <Row>
                        <Col flex="auto">
                            <Title level={2} style={{ padding: 10, textOverflow: 'ellipsis', maxWidth: '400px', textAlign: 'right' }}>
                                {!firstNumber && '0'}
                                {numberWithCommas(firstNumber)} <br /> {numberWithCommas(lastNumber)} </Title>
                        </Col>
                        <Col><Title level={2} style={{ alignSelf: 'center' }}>{operator}</Title></Col>
                    </Row>

                    {data.map((item, index) => {
                        return item.row.map(cal => {
                            return <a onClick={() => calculate(cal)}> <Card.Grid style={{ width: '25%', textAlign: 'center', backgroundColor: typeof cal == 'string' ? 'rgba(52,52,52,0.1)' : 'white' }}>{cal}</Card.Grid></a>
                        })
                    })}
                </Col>
                <Col flex="auto">
                    <Button onClick={() => setHistory([])} type="primary" style={{ marginBottom: 16, alignSelf: 'self-end' }}> Clear History</Button>
                    <Table size="small" scroll={{ x: 400 }} columns={columns} dataSource={history}></Table>
                </Col>
            </Row>
        </div>
    </Content>

}

export default Calculator;