import React, { useContext } from 'react';
import Context from '../container/modalContext';
import SummaryCSS from '../../styles/Summary.module.css';

// import logo from 'logo-mastercraft.svg'

const Summary = () => {
    const newContext = useContext(Context);
    // const [showModalDefault, setShowModalDefault] = useState(false);
    const openModalDefault = () => {
        newContext.setShowModalDefault(!newContext.showModalDefault);
    }
    return (
        <div className={SummaryCSS.summary}>
            <img className={SummaryCSS.logo} src={'/assets/logo-mastercraft.svg'} />
            <h1 className={SummaryCSS.title}>Mastercraft Bamboo Monitor Riser</h1>
            <p className={SummaryCSS.info}>A beautiful & handcrafted monitor stand to reduce nack and eye strain</p>
            <div className={SummaryCSS.buttonContainer}>
                <button className={SummaryCSS.back} onClick={openModalDefault}>Back this project</button>
                <button className={SummaryCSS.slider}>Bookmark</button>
            </div>
            
        </div>
    )
}

export default Summary
