import {h,FunctionComponent} from 'preact'
import { useState } from 'preact/hooks'
import { Modal as ResponsiveModal } from 'react-responsive-modal';
import styled from 'styled-components/macro';



export const Modal:FunctionComponent<{title:string}> = ({title,children}) => {

  const [isOpen,setIsOpen] = useState(false)

  const onOpenModal = () => setIsOpen(true);
  const onCloseModal = () => setIsOpen(false);

 return (
    <>
      <Text onClick={onOpenModal}>{title}</Text>
      <ResponsiveModal open={isOpen} onClose={onCloseModal} center>
        {children}
      </ResponsiveModal>
    </>
  );
}

const Text = styled.p`
  color:${({theme}) => theme.colors.basic};
  cursor: pointer;
  font-weight:400;
  text-align:center;
`