import React,{Component} from 'react'
import {Switch,Route,Redirect} from 'react-router-dom'

import MyNavLink from './myNavLink'
import Home from '../views/home'
import About from '../views/about'


export default class App extends Component{
   render(){
       return (
        <div className='container'>

          <div className='row'>
            <div>
              <div className='page-header'>
                 <h2>React Router Demo</h2>
                 <hr/>
               </div>
            </div>
          </div>
          
          <div className='row'>
            <div className='col-xs-4'>
              <div className='list-group'>
              {/* link:路牌，指明组件的位置，使用声明式的方式为应用程序提供导航功能 
                   定义的link最终被渲染为一个a标签，使用to属性指明目标组件的路径
                      即和<Router/>的pathname向对应  或地址(location)*/}

               {/* navlink是特殊的link，向当被选中的组件中添加activeclassname来设置选中样式(自定义) */}
                <MyNavLink className='list-group-item'  to='/about'>About</MyNavLink>
                <MyNavLink className='list-group-item'  to='/home'>Home</MyNavLink>
              </div>
            </div>

           <div className='col-xs-8'>
             <div className='panel panel-default'>
                 <div className='panel-body'>
                   {/* Switch组件：渲染匹配location的第一个<Router/>或<Redirect/>(初识定向) */}
                    <Switch>
                        {/* Router组件：当location和Router的pathname匹配时渲染Router中的Component(一个或多个)
                                            component注意小写 */}
                       <Route path='/about' component={About}/>
                       <Route path='/home'  component={Home}/>
                       
                       <Redirect to='/home'/>
                    </Switch>
                 </div>
             </div>
           </div> 
          </div>
        </div>
       )
     
     
     
  }
}