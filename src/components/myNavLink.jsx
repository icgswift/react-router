// 自定义组件     App-->MyNavLink-->NavLink 组件的渲染顺序也是props的传递过程
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class MyNavLink extends Component {

    render() {
        console.log({ ...this.props })
        console.log(this.props)
        console.log({ ...this.props } === this.props)
        return (
            /*反应中的扩张运算符语法
          在需要   多个参数         用于函数调用
                   多个元素        用于数组文字
                   多个变量        用于解构赋值  
             的位置扩张表达式
                   
                  接受this.props的所有属性并将它们分配给元素NavLink
              */
            <NavLink {...this.props} activeClassName='activeClass'></NavLink>
        )

    }
}
