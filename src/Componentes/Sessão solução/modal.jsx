import './modal.css'
import { useEffect } from "react";

const Modal = ({ isOpen, onClose, children }) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
            document.documentElement.style.overflow = "hidden";

        } else {
            document.body.style.overflow = "auto";
            document.documentElement.style.overflow = "auto";

        }

        return () => {
            document.body.style.overflow = "auto";
            document.documentElement.style.overflow = "auto";
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <>
            <div className='modal-overlay'>
                <div className='modal-content'>
                    <button className='close-button                  ' onClick={onClose}>X</button>
                    {children}
                </div>
            </div>
        </>
    )
}

export default Modal;