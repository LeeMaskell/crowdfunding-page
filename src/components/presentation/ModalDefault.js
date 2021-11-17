import React, { useContext} from 'react';
import ModalCSS from '../../styles/ModalDefault.module.css';
import Context from '../container/modalContext';

const ModalDefault = () => {
    const newContext = useContext(Context);
    return (
        <>{newContext.showModalDefault ?
        <div className={ModalCSS.modal}>
            <h1 className={ModalCSS.title}>Back this Project</h1>
            <p className={ModalCSS.info}>Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?</p>
        </div> : null}</>
    )
}

export default ModalDefault
