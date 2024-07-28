import React, { useContext, useMemo } from 'react'
import {
    Layout,
    theme,
    Flex,
    Space,
    Avatar,
    Typography,
    Button,
    Menu,
} from 'antd'
import styled from 'styled-components'
import {
    AppstoreOutlined,
    BarChartOutlined,
    CloudOutlined,
    ShopOutlined,
    TeamOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons'
import { AuthContext } from '../../../context/AuthContext'
import { handleLogout } from '../../../firebase/services'
import { DataContext } from '../../../context/DataContext'
import useFirestore from '../../../hooks/useFirestore'
const { Sider } = Layout
// style
const siderStyle = {
    overflow: 'auto',
    height: '100vh',
    position: 'fixed',
    left: 0,
    top: 0,
    bottom: 0,
    backgroundColor: '#fff',
    minWidth: 300,
}
const boxStyle = {
    width: '100%',
    height: 60,
    padding: '12px',
}
const InFoNameStyled = styled(Typography.Title)`
    &&& {
        margin-bottom: 0;
    }
`

const AddNewRoomButtonStyled = styled(Button)`
    border-radius: 0;
    font-size: 1rem;
    font-weight: 600;
    padding: 2rem;
`
// sidebar items
// const items = [
//     UserOutlined,
//     VideoCameraOutlined,
//     UploadOutlined,
//     BarChartOutlined,
//     CloudOutlined,
//     AppstoreOutlined,
//     TeamOutlined,
//     ShopOutlined,
// ].map((icon, index) => ({
//     key: String(index + 1),
//     icon: React.createElement(icon),
//     label: `nav ${index + 1}`,
// }))

const SideBar = () => {
    const { setIsOpenAddNewRoom, rooms } = useContext(DataContext)
    const {
        user: { photoURL, displayName },
    } = useContext(AuthContext)
    const openModalAddNewRoom = () => {
        setIsOpenAddNewRoom(true)
    }

    const SidebarItems = rooms.map((room, index) => ({
        key: String(index),
        label: room.roomname,
    }))

    const onRoomClick = e => {}

    return (
        <Sider
            width='25%'
            style={siderStyle}>
            <Flex
                vertical
                style={{
                    height: '100%',
                }}>
                <div className='demo-logo-vertical'>
                    <Flex
                        gap='large'
                        justify='space-between'
                        align='center'
                        style={boxStyle}>
                        <Space align='center'>
                            <Avatar src={photoURL}>
                                {photoURL
                                    ? ''
                                    : displayName &&
                                      displayName?.charAt(0).toUpperCase()}
                            </Avatar>
                            <InFoNameStyled
                                ellipsis='true'
                                level={5}>
                                {displayName}
                            </InFoNameStyled>
                        </Space>
                        <Button onClick={handleLogout}>Sign Out</Button>
                    </Flex>
                </div>
                <Menu
                    onClick={onRoomClick}
                    style={{ height: '100%' }}
                    theme='light'
                    mode='inline'
                    defaultSelectedKeys={['1']}
                    items={SidebarItems}
                />
                <AddNewRoomButtonStyled
                    size='large'
                    type='primary'
                    onClick={openModalAddNewRoom}>
                    Add New Room
                </AddNewRoomButtonStyled>
            </Flex>
        </Sider>
    )
}

export default SideBar
