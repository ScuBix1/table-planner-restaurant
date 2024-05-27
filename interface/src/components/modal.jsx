import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from '@nextui-org/modal'

export const ModalDefault = ({ title, isOpen, setIsOpen, children, confirmButton, backButton, backMethod }) => {
    return (
        <Modal
            isOpen={isOpen}
            onOpenChange={() => setIsOpen(!isOpen)}
            classNames={{
                backdrop: 'fixed bg-white h-[100vh] bg-opacity-50 top-0 w-full',
                base: 'fixed h-[fit] bg-white ring-1 ring-black ring-inset rounded-lg bottom-0 w-[100vw]',
                header: 'py-6 text-lg font-bold',
                body: 'w-100% max-h-[60vmax] overflow-y-scroll mx-auto border rounded',
            }}
            closeButton={<span className="absolute text-white bg-black"></span>}
            onClose={() => setIsOpen(false)}
        >
            <ModalContent className="grid left-0">
                <ModalHeader className="grid">
                    <div className="p-1" onTouchEnd={() => setIsOpen(false)}>
                        <div className="w-10 h-1 mx-auto mb-4 bg-gray-300 rounded"></div>
                    </div>
                    <h2 className="w-full text-center">{title}</h2>
                </ModalHeader>
                <ModalBody className="w-full border-0 min-[450px]:px-6 min-[370px]:px-4 px-2 grid items-center justify-center">
                    {children}
                </ModalBody>
                <ModalFooter className="grid justify-center items-center min-[450px]:px-6 min-[370px]:px-4 px-1">
                    <div className="flex justify-around gap-4">
                        {backButton ? (
                            <div className="cursor-pointer">{backButton}</div>
                        ) : (
                            <button
                                onClick={backMethod ? () => backMethod() : () => setIsOpen(false)}
                                className="flex justify-center items-center gap-2 w-28 h-12 cursor-pointer rounded-md shadow-2xl text-white font-semibold bg-gradient-to-r from-[#fb7185] via-[#e11d48] to-[#be123c] hover:cursor-pointer hover:shadow-xl hover:shadow-red-500 hover:scale-105 duration-300 hover:from-[#be123c] hover:to-[#fb7185] mb-6">
                                Annuler
                            </button>
                        )}
                        {confirmButton}
                    </div>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}
