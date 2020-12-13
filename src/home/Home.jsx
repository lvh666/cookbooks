import { useState } from 'react';
import { TabBar } from 'antd-mobile'

import cooksImg from 'assets/images/img11.jpg'
import cooksActiveImg from 'assets/images/img1.jpg'
import shareImg from 'assets/images/img22.jpg'
import shareActiveImg from 'assets/images/img2.jpg'
import messageImg from 'assets/images/img33.jpg'
import messageActiveImg from 'assets/images/im3.jpg'
import mineImg from 'assets/images/img44.jpg'
import mineActiveImg from 'assets/images/img4.jpg'
import CookBook from "./cookbook/CookBook";

/*import { useDispatch, useSelector } from 'react-redux';
import { changeSelected } from './actionCreator';*/

const Home = () => {

    const [ tabs, setTabs ] = useState({
        selectedTab:'cookbook',
        hidden: false,
        fullScreen: true
    })

    return (
        <div>
            <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
                <TabBar
                    unselectedTintColor="#949494"
                    tintColor="#33A3F4"
                    barTintColor="white"
                    hidden={tabs.hidden}
                >
                    <TabBar.Item
                        title="美食大全"
                        key="cookbook"
                        icon={<div style={{
                            width: '30px',
                            height: '30px',
                            background: `url(${cooksImg}) center center /  28px 28px no-repeat` }}
                        />
                        }
                        selectedIcon={<div style={{
                            width: '30px',
                            height: '30px',
                            background: `url(${cooksActiveImg}) center center /  28px 28px no-repeat` }}
                        />
                        }
                        selected={tabs.selectedTab === 'cookbook'}
                        // selected={store.homeReducer.selectedTab === 'cooks'}
                        // selected={store.getIn(['homeReducer', 'selectedTab']) === 'cooks'}
                        onPress={() => {
                            setTabs({
                                selectedTab: 'cookbook'
                            })
                        }}
                        data-seed="logId"
                    >
                        <CookBook/>
                    </TabBar.Item>
                    <TabBar.Item
                        icon={<div style={{
                            width: '30px',
                            height: '30px',
                            background: `url(${shareImg}) center center /  28px 28px no-repeat` }}
                        />
                        }
                        selectedIcon={<div style={{
                            width: '30px',
                            height: '30px',
                            background: `url(${shareActiveImg}) center center /  28px 28px no-repeat` }}
                        />
                        }
                        title=""
                        key="share"
                        selected={tabs.selectedTab === 'share'}
                        // selected={store.getIn(['homeReducer', 'selectedTab']) === 'share'}
                        onPress={() => {
                            // props.change('share')
                            setTabs({
                                selectedTab: 'share'
                            })
                        }}
                        data-seed="logId1"
                    >
                        <div>share</div>
                    </TabBar.Item>
                    <TabBar.Item
                        icon={<div style={{
                            width: '30px',
                            height: '30px',
                            background: `url(${messageImg}) center center /  28px 28px no-repeat` }}
                        />
                        }
                        selectedIcon={<div style={{
                            width: '30px',
                            height: '30px',
                            background: `url(${messageActiveImg}) center center /  28px 28px no-repeat` }}
                        />
                        }
                        title=""
                        key="message"
                        selected={tabs.selectedTab === 'message'}
                        // selected={store.getIn(['homeReducer', 'selectedTab']) === 'message'}
                        onPress={() => {
                            // props.change('message')
                            setTabs({
                                selectedTab: 'message'
                            })
                        }}
                    >
                        <div>3</div>
                    </TabBar.Item>
                    <TabBar.Item
                        icon={<div style={{
                            width: '30px',
                            height: '30px',
                            background: `url(${mineImg}) center center /  28px 28px no-repeat` }}
                        />
                        }
                        selectedIcon={<div style={{
                            width: '30px',
                            height: '30px',
                            background: `url(${mineActiveImg}) center center /  28px 28px no-repeat` }}
                        />}
                        title=""
                        key="mine"
                        selected={tabs.selectedTab === 'mine'}
                        // selected={store.getIn(['homeReducer', 'selectedTab']) === 'mine'}
                        onPress={() => {
                            // props.change('mine')
                            setTabs({
                                selectedTab: 'mine'
                            })
                        }}
                    >
                        <div>4</div>
                    </TabBar.Item>
                </TabBar>
            </div>
        </div>
    );
};

export default Home;
