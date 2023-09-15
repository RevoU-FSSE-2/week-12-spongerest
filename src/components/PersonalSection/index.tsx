import { Button, Form, Input, DatePicker } from 'antd';


const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
    },
};

const tailFormItemLayout = {
    wrapperCol: {
        xs: {
        span: 24,
        offset: 0,
        },
        sm: {
        span: 16,
        offset: 8,
        },
    },
};

const PersonalSection: React.FC = () => {
const [form] = Form.useForm();
const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
};
const config = {
    rules: [{ type: 'object' as const, required: true, message: 'Please Input Date of Birth!' }],
};



return (
    <Form
        {...formItemLayout}
        form={form}
        name="Personal Information"
        onFinish={onFinish}
        style={{ maxWidth: 600, marginTop : 40 }}
        scrollToFirstError
    >

        <Form.Item
            name="Full Name"
            label="Full Name"
            rules={[{ required: true, message: 'Please input your nickname!', whitespace: true }]}
        >
            <Input />
        </Form.Item>

        <Form.Item name="Date of Birth" label="Date of Birth" {...config}     {...formItemLayout} style={{ maxWidth: 600 }}>
            <DatePicker style={{ display: 'flex' }} />
        </Form.Item>

        <Form.Item
            name="email"
            label="E-mail"
            rules={[
            {
                type: 'email',
                message: 'The input is not valid E-mail!',
            },
            {
                required: true,
                message: 'Please input your E-mail!',
            },
            ]}
        >
        
        <Input />
        </Form.Item>

        <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit" >
            Validate It!
            </Button>
        </Form.Item>
        </Form>
    );
};


export default PersonalSection