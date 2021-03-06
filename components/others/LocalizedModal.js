import { Modal, Button, Form, Input } from "antd";
import React from 'react';
import httpAgent from '../../httpAgent';
import { HEAD_PIC } from '../../lib/constants';
import { mathFloor, allAgentInfo } from 'zgl-utils-js';


class LocalizedModal extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            visible: this.props.visible
        }
    }
    componentWillReceiveProps(nextProps) {
        const { visible } = this.state;
        const newdata = nextProps.visible.toString();
        if (visible.toString() !== newdata) {
            this.setState({
                visible: nextProps.visible,
                content: nextProps.content
            })
        }
    }
    layout = {
        labelCol: { span: 4 },
        wrapperCol: { span: 20 },
    };

    onFinish = values => {
        this.setState({
            visible: false,
        });
        const params = {
            userid: window.localStorage.getItem("userid"),
            ...values,
            headPicture: HEAD_PIC[mathFloor(5, 0)],
            agent: allAgentInfo()
        };
        httpAgent({url: '/user/addUser', method: 'post' , params}).then(res => {
            if (res.code === 0) {
                this.props.callback(res.data)
                window.localStorage.setItem('nickname', res.data.nickname)
                window.localStorage.setItem('userid', res.data.id)
                window.localStorage.setItem('email', res.data.email)
                window.localStorage.setItem('phone', res.data.phone)
                window.localStorage.setItem('userid', res.data.id)
                window.localStorage.setItem('headPicture', res.data.headPicture)
            }
            this.setState({
                visible: false
            })
        })
    };
    showModal = () => {
        this.setState({visible: true})
    };
    handleOk = () => {
        setTimeout(() => {
            this.setState({visible: false})
        }, 2000);
    };
    handleCancel = () => {
        this.setState({visible: false})
    };
    render() {
        return (
        <>
            <Modal
                title="完善一次信息"
                visible={this.state.visible}
                onOk={this.handleOk}
                onCancel={this.handleCancel}
                footer={false}
                okText="确认"
                cancelText="取消"
            >
                <Form {...this.layout} name="nest-messages" onFinish={this.onFinish} >
                    <Form.Item 
                        name="nickname" 
                        label="昵称：" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item 
                        name="email" 
                        label="邮箱" rules={[{ type: 'email' }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item 
                        name="phone" 
                        label="手机" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item wrapperCol={{ span: 4, offset: 20 }}>
                        <Button type="primary" htmlType="submit">
                            提交
                        </Button>
                    </Form.Item>
                </Form>      
            </Modal>
        </>
        );
    }
}
export default LocalizedModal;