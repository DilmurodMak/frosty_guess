import React from 'react';
import Button from '../Button/Button';
import styles from './Modal.module.css';

const Modal = ({ isOpen, onClose, onConfirm, title, message }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <h2 className={styles.modalTitle}>{title}</h2>
        <p className={styles.modalMessage}>{message}</p>
        <div className={styles.modalActions}>
          <Button onClick={onClose} variant="outline" size="medium">
            Cancel
          </Button>
          <Button onClick={onConfirm} variant="danger" size="medium">
            Quit Game
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
