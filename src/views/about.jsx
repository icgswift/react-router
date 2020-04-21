import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
// import '../css/bootstrap.css'

import MyNavLink from '../components/myNavLink'
import News from './news'
import Message from './message'

export default class About extends Component {

    render() {
        return (
            <div>
                <section>
                    <h2>about组件内容</h2>
                </section>
                <div className='nav nav-tabs'>

                    <li>
                        <MyNavLink className='th' to='/about/news'>news</MyNavLink>
                    </li>
                    <li>
                        <MyNavLink className='th' to='/about/message'>message</MyNavLink>
                    </li>

                </div>


                <div>
                    <Switch>
                        <Route path='/about/news' component={News} />
                        <Route path='/about/message' component={Message} />

                        <Redirect to='/about/news' />
                    </Switch>
                </div>


            </div>
        )
    }

}

