import { Modal, ModalProps } from 'antd'

interface Props extends Omit<ModalProps, 'onCancel'> {
  onCancel: () => void
}

export function CModal(props: Props) {
  const { onCancel, children, ...restProps } = props

  const handleCancel = () => {
    onCancel()
  }

  return (
    <>
      <Modal
        {...restProps}
        destroyOnClose={true}
        maskClosable={false}
        onCancel={handleCancel}
      >
        <div className="modal-content-box">{children}</div>
      </Modal>
    </>
  )
}

export default CModal
