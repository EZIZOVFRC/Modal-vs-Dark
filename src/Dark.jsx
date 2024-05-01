import React, { useState } from 'react'
import './App.css'


function Dark() {
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <>
            {
                modalOpen ? (
                    <div className="full">
                        <button onClick={openModal}>Open Modal</button>
                        <div className='mudal'>
                        
                        <div className="block">
                        
                        <button onClick={closeModal}>X</button>
                            Some Text in the modal
                        </div>
                    </div>
                    </div>
                ) : (
                    <div>
                        <button onClick={openModal}>Open Modal</button>
                        <div className="nonedis">
                            Some Text in the modal
                        </div>
                    </div>
                )
            }
        </>
    );
}

export default Dark;


