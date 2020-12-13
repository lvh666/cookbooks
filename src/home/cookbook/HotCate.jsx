import { useState } from 'react';
import { Grid } from 'antd-mobile';

import {
    HotCateWrap
} from './StyledCookBook'

const HotCate = () => {
    const [ list, setList ] = useState([{title:'家常菜'},{title:'汤'},{title:'川菜'},{title:'粤菜'},{title:'早餐'}, ])

    return (
        <HotCateWrap>
            <div>热门分类</div>
            <Grid data={list}
                  columnNum={4}
                  renderItem={dataItem => (
                      <div className="grid-items">
                          <div style={{ color: '#888', fontSize: '14px'}}>
                              <span>{dataItem.title}</span>
                          </div>
                      </div>
                  )}
            />
        </HotCateWrap>
    );
};

export default HotCate;
