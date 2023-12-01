import React from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";

export default function App() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <>
      <Button onPress={onOpen} className="bg-[#9ec5e9da] dark:bg-[#35383a] flex items-center justify-center text-white dark:text-[#afabc2] font-bold gap-3 bg-opacity-80">Service offers</Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="2xl" backdrop="blur">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Service offers</ModalHeader>
              <ModalBody>
               <div className="flex flex-row">
                  <p>I'm a specialized frontend developer with expertise in HTML, CSS, and JavaScript, along with experience in frameworks like Tailwind and React. I also have skills in logo design and effective collaboration in multidisciplinary teams. My focus is on creating responsive and intuitive web experiences. I'm committed to continuous learning and expanding my skills into backend development. My goal is to deliver innovative and functional digital solutions for each project.</p>
               </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
