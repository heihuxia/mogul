import React, { Component } from "react";
import { Button, DatePicker } from "antd";
import { Form, Flex, Item } from "../../../src";
import moment from "moment";

class Demo extends Component {
  validate = () => {
    const form = this.form.state.form;

    console.log(form.validate(), form.errors, form.findFormByFieldName("simpleDemo").getResult());
  };

  render() {
    return (
      <div>
        hello<Button>Btn</Button>
        <Form ref={form => (this.form = form)}>
          <div>111</div>
          <Form.Box
            fieldName={ "simpleDemo" }
            style={{ width: 800 }}
            labelStyle={{ width: "100px" }}
            //            direction={"column"}
            wrap={ "wrap" }
            containerStyle={ {
              width: "50%"
            } }
          >

            <Form.Input
              label={"名称"}
              initialValue={111}
              rules={[
                ["required", "名称必填"],
                ["maxLength", 5, "名称最长为5位"],
                ["minLength", 3, "名称最少为3位"]
              ]}
              placeholder={"名称字段"}
            />
            <Form.Input
              label={"密码"}
              rules={[
                ["required", "密码必填"],
                [val => (val.includes("d") ? true : "😓必须包含字母d")]
              ]}
            />

            <Form.CheckGroup
              //              labelStyle={{ alignSelf: "flex-start" }}
              label={"城市"}
              initialValue={["2"]}
              rules={[["required", value => value.length > 0 ? true : "城市至少选择1个"]]}
              options={[
                {
                  label: "苏州",
                  value: "1"
                },
                {
                  label: "无锡",
                  value: "2"
                },
                {
                  label: "上海",
                  value: "3"
                },
                {
                  label: "杭州",
                  value: "4"
                },
                {
                  label: "南京",
                  value: "5",
                  disabled: true
                },
                {
                  label: "徐州",
                  value: "6"
                }
              ]}
            />


            <Form.FormRadioGroup
              label={ "性别" }
              rules={ [
                ["required", "必须❤选️一个性别"]
              ] }
              options={ [
                {
                  label: "男",
                  value: "0"
                },
                {
                  label: <span style={ { color: "pink"} }>女</span>,
                  value: "1"
                },
                {
                  label: "㊙️秘密",
                  value: "2",
                  disabled: true
                }
              ] }
            />

            <Form.FormSelect
              label={ "品类" }
              rules={ [
                ["required","请选择一个品类"]
              ] }
              options={ [{
                label: "奶制品",
                value: "1"
              },{
                label: "肉制品",
                value: "2"
              },{
                label: "时令蔬菜",
                value: "3"
              }] }
            />

            <Form.FormCascader
              label={ "品类细目" }
              options={ [{
                label: "奶制品",
                value: "1",
                children: [{
                  label: "蒙牛酸奶",
                  value: "4",
                },{
                  label: "伊利牛奶",
                  value: "5"
                }]
              },{
                label: "肉制品",
                value: "2"
              },{
                label: "时令蔬菜",
                value: "3"
              }] }
            />

            <div style={ { width: "100%" } }>
              使用 Form.Connect 自定义的组件：
            </div>
            <Form.Connect
              fieldName={ "selectTimeRange" }
              label={ "请选择时间" }
              initialValue={ [moment(), null] }
              rules={ [
                ["required",(value) => value[0] && value[1] ? true : "时间必填" ]
              ] }
              containerStyle={ {
                width: "100%"
              } }
            >
              { (form) => {
                return <DatePicker.RangePicker
                  style={ { width: "100%" } }
                  //                  value={ form.value }
                  onChange={ (val) => form.changeValue(val)  } />
              } }
            </Form.Connect>
          </Form.Box>
        </Form>
        <Button onClick={this.validate}>验证</Button>
      </div>
    );
  }
}

export default Demo;