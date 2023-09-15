import { Form, Input, Button } from 'antd';


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

const AccountSection: React.FC = () => {
const [form] = Form.useForm();
const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
};

return (
    <Form
        {...formItemLayout}
        form={form}
        name="Account Information"
        onFinish={onFinish}
        style={{ maxWidth: 600, marginTop : 40 }}
        scrollToFirstError
    >

        <Form.Item
            name="User Name"
            label="User Name"
            tooltip="What do you want others to call you?"
            rules={[{ required: true, message: 'Please input your User Name!', whitespace: true }]}
        >
            <Input />
        </Form.Item>

        <Form.Item
            name="password"
            label="Password"
            tooltip='Max 15 characters, at least one uppercase letter, one number and one special character:'
            rules={[
            {
                required: true,
                message: 'Please input your password!',
                pattern: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,15}$/,
            }
            ]}
        hasFeedback
        >
        <Input.Password />
        </Form.Item>

        <Form.Item
            name="confirm"
            label="Confirm Password"
            dependencies={['password']}
            hasFeedback
            rules={[
            {
                required: true,
                message: 'Please confirm your password!',
            },
            ({ getFieldValue }) => ({
                validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                }
                return Promise.reject(new Error('The new password that you entered do not match!'));
                },
            }),
            ]}
        >
            <Input.Password />
        </Form.Item>
        <Form.Item label=" " colon={false}>
            <Button type="primary" htmlType="submit">
            Validate It!
            </Button>
        </Form.Item>
        </Form>
    );
};


export default AccountSection