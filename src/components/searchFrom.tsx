import React, { useState } from "react";
import { Form, Select, Input, Button, Col, Row } from 'antd';

interface Props {
    formItems: Item[];
    search: Function;
    save:()=>void;
}
interface Item {
    type: string;
    label: string;
    name: string;
    selectValue?: any;
}

const SearchFrom: React.FC<Props> = (props) => {
    const [form] = Form.useForm()
    const [expand, setExpand] = useState(true);
    const renderItem = (type: string, label: string, selectValue?: any) => {
        if (type === 'input') {
            return <Input placeholder={`请输入${label}`} style={{ width: 200 }} />
        }
        if (type === 'select') {
            return (
                <Select placeholder={`请选择${label}`} style={{ width: 200 }}>
                    {selectValue.map((item: any) =>
                        <Select.Option value={item.value} key={item.value}>
                            {item.text}
                        </Select.Option>
                    )}
                </Select>
            )
        }
    }
    const search = () => {
        const data = form.getFieldsValue();
        const searchData: any = [];
        Object.keys(data).forEach(i => {
            if (data[i]) {
                searchData.push({ text: i, value: data[i] })
            }
        })
        console.log(searchData)
    }

    return (
        <div>
            <Form form={form}>

                <Row>
                    {
                        (expand ? props.formItems.slice(0, 3) : props.formItems).map(item =>
                            <Col span={7} key={item.name}>
                                <Form.Item name={item.name} >
                                    {renderItem(item.type, item.label, item.selectValue)}
                                </Form.Item>
                            </Col>
                        )
                    }
                    {
                        props.formItems.length > 3 && (
                            <Button type="link" style={{ marginLeft: 8 }} onClick={() => {
                                setExpand(!expand)
                            }}>
                                {expand ? '展开' : '收起'}
                            </Button>
                        )
                    }
                </Row>
                
                    <Button type="primary" onClick={() => {
                        // const fromData = form.getFieldsValue();
                        // props.search(fromData);
                        search();
                    }}>查询</Button>
                    <Button
                        style={{ marginLeft: 8 }}
                        onClick={() => {
                            form.resetFields();
                            props.search({});
                        }}
                    >
                        重置
                    </Button>
                    <Button
                        type="dashed" 
                        style={{ marginLeft: 8 }}
                        onClick={() => {
                            props.save()
                        }}
                    >
                        新增
                    </Button>
            </Form>
        </div>
    )
}
export default SearchFrom;