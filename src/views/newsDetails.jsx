/* 
向路由组件Route传递数据：
      一般组件传递：定义class传递  <App list={this.state.xxx}/>
    路由组件看似不能直接传递数据，其传递的数据都保存在props中，直接调用即可
                                const {id}=props.match.params
*/


import React from 'react'

const details =[ {id:1,title:'first',content:'我爱你，中国'},
                 {id:2,title:'two',content:'我爱你，父母'},
                 {id:3,title:'three',content:'我爱你，孩子'} ]

export default function NewsDetails (props){
    /* 
       工厂函数和类传递props的区别：
              工厂函数：接受props参数，直接调用
                   类 ：this.props调用，无需接受参数    
    */
    const {id}=props.match.params
    const de=details.find(
        (detail,index)=>
            detail.id===id*1
        
    )
    // console.log(de)
    return(
        <div>
        <li>{de.id}</li>
        <li>{de.title}</li>
        <li>{de.content}</li>
        </div>
)
} 