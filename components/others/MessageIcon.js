import React from 'React';
import styles from '../../styles/MessageIcon.module.scss';
import { Modal, Button, Form, Input, notification } from "antd";
import { HEAD_PIC } from '../../lib/constants';
import { mathFloor, allAgentInfo } from 'zgl-utils-js';
import httpAgent from '../../httpAgent';

class MessageIcon extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            thumdsStatus: this.props.thumdsStatus,
            thumdsSum: this.props.thumdsSum,
            articleId: this.props.articleId,
            ip: this.props.user_ip,
            name: '',
            email: '',
            changeNum: 0
        };
    }
    layout = {
        labelCol: { span: 4 },
        wrapperCol: { span: 20 },
    };

    validateMessages = {
        required: '${label} is required!',
        types: {
          email: '${label} is not a valid email!',
          number: '${label} is not a valid number!',
        },
        number: {
          range: '${label} must be between ${min} and ${max}',
        },
    };
    openNotification = () => {
        notification.open({
            message: '留言成功',
            description:
                '您好，我稍后会以邮件回复您',
            onClick: () => {
            },
        });
    };
    onFinish = values => {
        this.setState({
            visible: false,
        });
        if (this.state.name) {
            values.name =  this.state.name
        }
        if (this.state.email) {
            values.email =  this.state.email
        }
        const params = {
            ip: this.state.ip,
            ...values,
            headPicture: HEAD_PIC[mathFloor(5, 0)],
            agent: allAgentInfo()
        };
        httpAgent({url: '/message/addMessage', method: 'post' , params}).then(res => {
            if (res.code === 0) {
                this.openNotification()
            }
            this.setState({
                visible: false
            })
        })
    };
    handleZanshangVo = () => {
        this.setState({visible: true})
    }
    handleOk = () => {
        setTimeout(() => {
            this.setState({visible: false})
        }, 2000);
    }
    handleCancel = () => {
        this.setState({
            visible: false
        })
    }
    
    componentDidMount() {
        const params = {
            ip: this.state.ip,
            agent: allAgentInfo()
        };
        httpAgent({url: '/user/getUserInfo', method: 'post' , params}).then(res => {
            if (res.code === 0) {
                this.setState({
                    name: res.data.nickname,
                    email: res.data.email
                })
            }
        })
    }
    render() {
        const {visible, name, email} = this.state;
        return (
            <div className={styles._3Pnjry}>
                <div className={styles._1pUUKr} >
                    <div  className={styles.svgZan} onClick={this.handleZanshangVo}>
                        <i className={styles.anticon}>
                            <svg t="1609649450678" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3673" width="24" height="24">
                                <path d="M829.487911 488.777089c-29.217439 1.107217-43.718711 23.069415-43.980677 69.125357-0.424672 74.618465 0.25992 149.247162-0.275269 223.865627-0.418532 58.217936-11.900028 70.305229-70.793346 70.569242-149.243069 0.667196-298.490232 0.629333-447.733301 0.031722-61.683874-0.248663-72.132854-11.446703-72.234161-74.29817-0.287549-178.364317-0.10847-356.731704-0.077771-535.096021 0.001023-9.096169-0.13917-18.23327 0.583285-27.284413 2.218528-27.76946 17.714454-43.033096 45.226041-45.196365 14.479783-1.136893 29.103852-0.544399 43.662429-0.552585 101.923344-0.061398 203.849758 0.443092 305.767985-0.36225 37.81935-0.298805 56.615439-15.948227 57.853639-43.61024 1.286296-28.77844-16.582677-45.778626-54.342676-45.99966-127.396505-0.750083-254.82371-1.537006-382.192585 0.571005-60.902068 1.004887-100.435457 42.084491-106.665345 103.205547-1.654686 16.240893-1.251503 32.718169-1.269923 49.086975-0.105401 92.823082-0.051165 185.647187-0.051165 278.469246 0.029676 0 0.057305 0 0.084934 0 0 101.925391-1.02126 203.859991 0.317225 305.764915 1.111311 84.644819 44.12394 126.740566 129.545448 127.143749 171.081447 0.803295 342.172103 0.818645 513.25355 0.00921 85.549421-0.403183 128.425951-42.699498 129.504516-126.977973 1.11745-87.34737 0.671289-174.72544 0.104377-262.084067C875.478362 509.525646 859.378685 487.645312 829.487911 488.777089z" p-id="3674" fill="#bfbfbf"></path><path d="M905.789715 134.822638c-17.720593-14.248516-37.137829-14.317077-55.447846-1.790786-10.380418 7.103792-19.064194 16.811898-28.058033 25.799596C662.621463 318.363861 502.968299 477.908554 343.549473 637.684514c-11.455913 11.481496-23.734564 23.405059-31.019481 37.509289-14.547321 28.16855 6.831592 61.061704 48.710398 62.711274 10.386558-7.755638 28.999474-18.48705 43.719734-33.126468C566.282301 544.329313 727.011982 383.287523 887.827621 222.332714c8.986675-8.994861 18.790972-17.699104 25.590841-28.234041C926.537248 173.776835 922.870742 148.557454 905.789715 134.822638z" p-id="3675" fill="#bfbfbf"></path></svg>
                        </i>
                    </div>
                    <div className={styles.P63n6G}>
                    <div className={styles._2LKTFF}>
                        <span className={styles._1GPnWJ} role="button" aria-label="查看点赞列表">留言</span>
                    </div>
                </div>
                <Modal 
                    visible={visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    footer={null}
                    closable={false}
                    okText="确认"
                    cancelText="取消"
                >
                    {
                        name && email?
                        <div className={styles.wrapImg}>
                            <Form 

                            className={styles.formwrap}
                            {...this.layout} name="nest-messages" onFinish={this.onFinish} validateMessages={this.validateMessages}>
                                <Form.Item 
                                    name="name" 
                                    label="昵称">
                                    <Input 
                                    disabled={name}
                                    defaultValue={name}/>
                                </Form.Item>
                                <Form.Item 
                                    name="email" 
                                    label="邮箱">
                                    <Input 
                                    disabled={email}
                                    defaultValue={email}/>
                                </Form.Item>
                                <Form.Item 
                                    name="content" 
                                    label="内容">
                                    <Input />
                                </Form.Item>
                                <Form.Item 
                                wrapperCol={{ span: 2 , offset: 20 }}>
                                    <Button type="primary" htmlType="submit">
                                        提交
                                    </Button>
                                </Form.Item>
                            </Form>
                        </div>: 
                        <div className={styles.wrapImg}>
                            <Form {...this.layout} name="nest-messages" onFinish={this.onFinish} validateMessages={this.validateMessages}>
                                <Form.Item 
                                    name="name" 
                                    label="昵称" rules={[{ required: true }]}>
                                    <Input 
                                    disabled={name}
                                    defaultValue={name}/>
                                </Form.Item>
                                <Form.Item 
                                    name="email" 
                                    label="邮箱" rules={[{ type: 'email' }]}>
                                    <Input 
                                    disabled={email}
                                    defaultValue={email}/>
                                </Form.Item>
                                <Form.Item 
                                    name="content" 
                                    label="内容">
                                    <Input />
                                </Form.Item>
                                <Form.Item wrapperCol={{ ...this.layout.wrapperCol, offset: 8 }}>
                                    <Button type="primary" htmlType="submit">
                                        提交
                                    </Button>
                                </Form.Item>
                            </Form>
                        </div>
                    }
                </Modal>
                </div>
            </div>
        )
    }
}

export default MessageIcon;
