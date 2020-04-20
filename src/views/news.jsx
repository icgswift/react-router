import React,{Component} from 'react'
import {Route,Link} from 'react-router-dom'

import NewsDetails from './newsDetails'
 
export default class News extends Component{
    state={data:[]
                   }

// 模拟ajax请求
componentDidMount(){
   
     setTimeout(
        ()=>{
            const data= [ {id:1,title:'first'},
            {id:2,title:'two'},
            {id:3,title:'three'} ]

           this.setState({data})
        } 
        ,1000)
}

showDetail=(id)=>{
    console.log(id)
    this.props.history.push(`/about/news/${id}`)
}

goForward=()=>{
    this.props.history.goForward()
}
goBack=()=>{
    this.props.history.goBack()
}

    render(){
        const {data} =this.state
        // debugger
              return(
                <div>
                   <ul className='nav'>
                       {
                         data.map(
                           (list,index)=>(
                             <li key={index}>
                                                             {/*将id值绑定在路径中传入路由子组件的props  */}
                                <Link to={`/about/news/${list.id}`}>title:{list.title}</Link>

                                {        /*事件处理传递参数两种方式  */}
                                {/* <button onClick={ ()=> this.showDetail(list.id) }>查看</button> */}
                                <button onClick={this.showDetail.bind(this,list.id)}>查看</button>
                             </li>
                            )
                        )    
                       }
                   </ul>
                               
                       <button onClick={this.goForward}>前进</button>
                       <button onClick={this.goBack}>后退</button>



                   <section>
                                                       {/*:id 占位符兼标识  */}
                       <Route path={`/about/news/:id`}  component={NewsDetails} ></Route> 
                     
                   </section>
                </div>
              )
    }
}
