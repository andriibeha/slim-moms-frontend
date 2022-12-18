import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useDispatch } from 'react-redux';
import { toggleModal } from 'redux/actions';
import DailyCalorieIntake from '../DailyCalorieIntake';
import { Backdrop, ModalWindow, ModalButton } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export default function Modal() {
  const dispatch = useDispatch();

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        dispatch(toggleModal(false));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  const onBackdropClick = e => {
    if (e.currentTarget === e.target) {
      dispatch(toggleModal(false));
    }
  };

  const onBtnClick = () => {
    dispatch(toggleModal(false));
  };

  return createPortal(
    <Backdrop onClick={onBackdropClick}>
      <ModalWindow>
        <DailyCalorieIntake />
        <ModalButton onClick={() => onBtnClick()}>X</ModalButton>
      </ModalWindow>
    </Backdrop>,
    modalRoot
  );
}
