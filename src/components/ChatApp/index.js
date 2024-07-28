import React from 'react'
import { Layout } from 'antd'
const { Header, Footer, Content } = Layout

import SideBar from './SideBar'

const headerStyle = {
    textAlign: 'center',
    color: '#fff',
    height: 64,
    paddingInline: 48,
    lineHeight: '64px',
    backgroundColor: '#4096ff',
}
const contentStyle = {
    textAlign: 'center',
    minHeight: 120,
    lineHeight: '120px',
    color: '#fff',
    backgroundColor: '#0958d9',
}

const footerStyle = {
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#4096ff',
}
const layoutStyle = {
    width: '100%',
    height: '100%',
}

const ChatApp = () => {
    const selectedRoomID = ''
    return (
        <div className='chat-app'>
            <Layout style={layoutStyle}>
                <SideBar />
                {selectedRoomID ? <></> : <></>}
                <Layout>
                    <Header style={headerStyle}>Header</Header>
                    <Content style={contentStyle}>Content</Content>
                    <Footer style={footerStyle}>Footer</Footer>
                </Layout>
            </Layout>
        </div>
    )
}

export default ChatApp
