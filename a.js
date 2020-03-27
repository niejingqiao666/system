import React, {PureComponent} from 'react';
import {message, Card, Button, Modal, Form, Input, Radio, Spin} from 'antd';
import UserTable from "../../component/system/userList";
import axios from '../../util/axios';


class UserList extends PureComponent {
  state = {
    id:'',
    title:'',
    visible: false,
    loading: false,
    data: {
      list: [],
      pagination: {
        total: '',
        pageSize: '',
        current: '',
      }
    }
  };
  //编辑
  handleEd=(recode)=>{
    this.props.form.setFieldsValue({
      phone:recode.phone,
      email:recode.email
    });
    this.setState({
      visible: true,
      id:recode.id,
      title:recode.username
    })
  };
  //删除
  handleDelete = (id) => {
    const _this = this;
    Modal.confirm({
      title: '确认要删除吗?',
      okText: '确认',
      okType: 'danger',
      cancelText: '取消',
      async onOk() {
        axios({
          method: 'post',
          url: `/api/delUser`,
          data: {id}
        }).then(result => {
          let {code} = result;
          if (parseInt(code) === 200) {
            message.success('您已成功删除');
            _this.queryData();
          } else {
            message.error('删除失败');
          }
        })
      },
    });
  };
  //获取列表数据
  queryData = () => {
    this.setState({
      loading: true
    }, () => {
      axios({
        method: 'get',
        url: `/api/getList?currentPage=1&pageSize=50`,
      }).then(result => {
        const {code, data: {count, pageSize, current, rows}} = result;
        let dataList = [];
        for (const [index, val] of rows.entries()) {
          const obj = {key: (index + 1)};
          Object.assign(val, obj);
          dataList.push(val);
        }
        let objData = {
          pagination: {
            total: count,
            pageSize,
            current,
          },
          list: dataList,
        };
        this.setState({
          data: objData,
          loading: false
        })
      })
    });
  };
  //增加
  handleAdd = () => {
    this.setState({
      visible: true
    })
  };
  handleOk = () => {
    let _this = this;
    if(_this.state.id!==''){
      _this.props.form.validateFields((err, values) => {
        if (values.email !== '' && typeof values.email !== 'undefined' &&
          values.phone !== '' && typeof values.phone !== 'undefined') {
          let regEmail = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/g,
            regPhone = /^[1][34578][0-9]{9}$/g;
          if (!regPhone.test(values.phone)) {
            return false;
          }
          if (!regEmail.test(values.email)) {
            return false;
          }
          axios({
            method: 'post',
            url: `/api/updateUser`,
            data: {
              id:_this.state.id,
              phone: values.phone,
              email: values.email
            }
          }).then(result => {
            let {code} = result;
            if (parseInt(code) === 200) {
              message.success('修改成功');
              _this.queryData();
              _this.setState({
                visible: false,
                id:'',
                title:''
              });
              _this.props.form.resetFields(['phone','email']);
            } else {
              message.error('修改失败')
            }
          })
        } else {
          return false;
        }
      });
    }else {
      _this.props.form.validateFields((err, values) => {
        if (values.title !== '' && typeof values.title !== 'undefined' &&
          values.email !== '' && typeof values.email !== 'undefined' &&
          values.phone !== '' && typeof values.phone !== 'undefined') {
          let regEmail = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/g,
            regPhone = /^[1][34578][0-9]{9}$/g;
          if (!regPhone.test(values.phone)) {
            return false;
          }
          if (!regEmail.test(values.email)) {
            return false;
          }
          axios({
            method: 'post',
            url: `/api/saveUser`,
            data: {
              username: values.title,
              phone: values.phone,
              email: values.email
            }
          }).then(result => {
            let {code} = result;
            if (parseInt(code) === 200) {
              message.success('添加成功');
              _this.queryData();
              _this.setState({
                visible: false,
              });
              _this.props.form.resetFields(['title','phone','email']);
            } else {
              message.error('添加失败')
            }
          })
        } else {
          return false;
        }
      });
    }

  };
  handleCancel = () => {
    this.setState({
      visible: false,
    })
    this.props.form.resetFields(['title','phone','email']);
  };

  componentDidMount() {
    this.queryData();
  }

  render() {
    let {getFieldDecorator} = this.props.form;
    return (
      <Spin spinning={this.state.loading} delay={6000}>
        <Card bordered={false}>
          <Button type="primary" onClick={this.handleAdd}>增加</Button>

          <UserTable data={this.state.data}
                     handleDelete={this.handleDelete}
                     handleEd={this.handleEd}
          />

          <Modal
            title="用户信息"
            visible={this.state.visible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
          >
            <Form layout="vertical">
              {this.state.id!=='' &&
                <Form.Item label="用户名">
                  <span className="ant-form-text">{this.state.title}</span>
                </Form.Item>
              }
              {this.state.id ==='' &&
              <Form.Item label="用户名">
              {getFieldDecorator('title', {
                rules: [{required: true, message: '请输入用户名!'}],
              })(<Input/>)}
                </Form.Item>
              }
              <Form.Item label="邮箱">
                {getFieldDecorator('email', {
                  rules: [{required: true, type: 'email', message: '请输入正确的邮箱!'}],
                })(<Input/>)}
              </Form.Item>
              <Form.Item label="电话">
                {getFieldDecorator('phone', {
                  rules: [{required: true, pattern: new RegExp(/^[1][34578][0-9]{9}$/, "g"), message: '请输入正确的联系方式!'},
                  ],
                })(<Input/>)}
              </Form.Item>

            </Form>
          </Modal>
        </Card>
      </Spin>
    );
  }
}


export default (Form.create()(UserList));
