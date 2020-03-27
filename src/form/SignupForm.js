import React , {Component} from 'react'
import { connect } from 'react-redux'
import { Form,Input, Button ,Select, DatePicker,TimePicker } from 'antd'
import moment from 'moment';

import '../css/SignupForm.css'

import { postRegister } from '../actions/user'

const { Option } = Select;

class SignupForm extends Component {
  _isMounted = false;
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this._isMounted = true;
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        let data = {
          "username":values.username,
          "email":values.email,
          "visitType":values.visitType,
          "ptv":values.ptv,
          "dateofentry": moment().format(" MMMM Do YYYY"),
          "toe":values.toe,
          "toexit":values.toexit
        }
        console.log(data)
        const { postData } = this.props;
        postData(data);
        this.props.form.resetFields()
      }
    });
  };



  componentWillUnmount() {
    this._isMounted = false;
  }

  render(){

    const { getFieldDecorator } = this.props.form;
    const FormItem = Form.Item;

    return (
      <>
        <div>
            <h3>Signup</h3>
        </div>
        <Form onSubmit={this.handleSubmit} className="signup-form">
          
              <FormItem label="User name">
                {getFieldDecorator('username', {
                  rules: [
                    {required: true, message: 'Please provide your name.'},
                    {max:25}
                  ],
                })(
                  <Input
                  placeholder='Enter your name'
                  size='large'
                  className='mb-3'
                  />
                  )}
              </FormItem>

              <FormItem label="Email id">
                {getFieldDecorator('email', {
                  rules: [
                    {type: 'email', message: 'Enter a valid e-mail id!',}, 
                    {required: true, message: 'Please provide your e-mail id.',},
                    {max:50},
                  ],
                })(
                  <Input
                    placeholder='Enter your email id'
                    size='large'
                    className='mb-3'
                  />
                )}
              </FormItem>

              <FormItem label="Type of visit">
                {getFieldDecorator('visitType', {
                  rules: [{
                    required: true, message: 'Please provide your visiting type.',
                  },{max:50}],
                })(
                  <Select placeholder="Type of visit" size="large">
                    <Option value="Meeting">Meeting</Option>
                    <Option value="Delivery">Delivery</Option>
                    <Option value="Personal">Personal</Option>
                  </Select>
                )}
              </FormItem>


              <FormItem label="Person to visit">
                {getFieldDecorator('ptv', {
                  rules: [
                    {required: true, message: 'Please provide a name.'},
                    {max:25}
                  ],
                })(
                  <Input
                  placeholder='Enter a person name'
                  size='large'
                  className='mb-3'
                  />
                  )}
              </FormItem>

              <FormItem label="Date of entry">
                {getFieldDecorator('dateofentry', {
                })(
                  <DatePicker
                    placeholder={moment().format(" MMMM Do YYYY")}
                    disabled
                    size="large"
                  />
                )}
              </FormItem>

              <FormItem label="time of entry">
                {getFieldDecorator('toe', {
                  rules: [
                    {required: true, message: 'Please provide a value.'},
                  ],
                })(
                  <TimePicker 
                  // defaultValue={moment('HH:mm:ss a')} 
                  size="large" />
                  )}
              </FormItem>

              <FormItem label="time of exit">
                {getFieldDecorator('toexit', {
                  rules: [
                    {required: true, message: 'Please provide a value.'},
                  ],
                })(
                  <TimePicker 
                  // defaultValue={moment('HH:mm:ss a')} 
                  size="large" />
                  )}
              </FormItem>

              <Button size='large' className='signup-btn mb-4'  htmlType="submit">Create Account</Button>
        </Form>
      </>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    postData : (url,data) => dispatch(postRegister(url,data))
  }
}

const WrappedSignupForm = Form.create()(SignupForm);
const ConnectedSignup = connect(null, mapDispatchToProps)(WrappedSignupForm)

export default ConnectedSignup
