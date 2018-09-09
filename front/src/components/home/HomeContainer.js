import React, { Component } from 'react'
import { Layout, Breadcrumb, Icon, Input } from 'antd'
import {buscaSaldo} from '../../lib/service'
const Search = Input.Search;
const { Header, Content, Footer } = Layout;

export default class HomeContainer extends Component {
    state = {
        rfc: "",
    };

    onCollapse = (collapsed) => {
        console.log(collapsed);
        this.setState({ collapsed });
    }

 

    // onHandleChange = event =>{
    //     this.setState ({
    //         rfc: event.target.value
    //     })
    // console.log(this.state)
    // }

    onSubmit = event => {
        console.log ('Saludos', event)
        buscaSaldo(this.state.rfc)
        .then (response =>{
            console.log(response)
        return response
        })
        .catch (err =>{
            console.log(err)
        })

    }
    render() {
        return (
            <div>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item> <Icon type="home" /> </Breadcrumb.Item>
                    <Breadcrumb.Item>Inicio</Breadcrumb.Item>
                </Breadcrumb>
                <div style={{ padding: 24, background: '#fff', minHeight: 360, display: 'flex', flexDirection: 'column' }}>
                    <h1 style={{ textAlign: "center" }}>Ingrese el RFC: </h1>
                    <Search
                        placeholder="input search text"
                        //onChange={this.onHandleChange}
                        style={{ maxWidth: '500px', margin: '0 auto' }}
                        onSearch={value => this.onSubmit(value)}
                         enterButton
                    />

                </div>
            </div>
        )
    }
}