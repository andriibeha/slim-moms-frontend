import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useDispatch } from 'react-redux';
import { toggleModal } from 'redux/modal/operations';
import DailyCalorieIntake from '../DailyCalorieIntake';
import { Backdrop, ModalWindow, ModalButton } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export default function Modal() {
  const dispatch = useDispatch();
  console.log('MODAL RENDER');

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
      console.log('onBackdropClick');
    }
  };

  const onBtnClick = () => {
    dispatch(toggleModal(false));
    console.log('Button click');
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
