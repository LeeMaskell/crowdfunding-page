import React from 'react';
import StandCSS from '../../styles/StandType.module.css';

const StandType = (props) => {
    return (
        <div className={StandCSS.stand}>
            <div className={StandCSS.heading}>
                <h2 className={StandCSS.title}>{props.title}</h2>
                <h3 className={StandCSS.pledge}>{props.pledge}</h3>
            </div>

            <p className={StandCSS.content}>{props.info}</p>
            <div className={StandCSS.footing}>
                <div className={StandCSS.footingSub}>
                    <h1 className={StandCSS.number}>100</h1>
                    <p className={StandCSS.numberSub}>left</p>
                </div>
                <button className={StandCSS.reward}>Select Reward</button>
            </div>

        </div>
    )
}

export default StandType
