import React from "react";
import Search from './search' 
import { Table, Divider ,Button} from 'antd';
import { ColumnsType } from 'antd/es/table';

interface Props{}
interface UserData{
    id:string,
    number:string,
    name:string,
    age:number
    class:string          
}
const User : React.FC<Props> = props => {
    const data = [
        {
            id:'100',
            number:'77',
            name:'张三',
            age:18,
            class:'一班'
        },
        {
            id:'101',
            number:'55',
            name:'李四',
            age:15,
            class:'一班'
        },
        {
            id:'102',
            number:'89',
            name:'王',
            age:17,
            class:'一班'
        }
    ]
    const columns :ColumnsType<UserData>= [
        {
            title: '姓名',
            dataIndex: 'name',
            key: 'name',
            align:'center',
            width:200
          },
          {
            title: '年龄',
            dataIndex: 'age',
            key: 'age',
            align:'center',
            width:200
          },
          {
            title: '班级',
            dataIndex: 'class',
            key: 'class',
            align:'center',
            width:200
          },
          {
            title: '得分',
            dataIndex: 'number',
            key: 'number',
            align:'center',
            width:200
          },
          {
            title: '操作',
            align:'center',
            render:(record:any)=>{
                return <div>
                    <Button type='link' onClick={() => {
                    } }>查看</Button>
                    <Button type='link' onClick={() => {
                    } }>编辑</Button>
                    <Button type='link' onClick={() => {
                    } }>删除</Button>
                </div>;
            }
          }
    ]
    return (
        <div>
            <Search></Search>
            <Divider />
            <Table
                dataSource={data}
                columns={columns}
            />
        </div>
    )
}
export default User;