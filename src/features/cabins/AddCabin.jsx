import Button from "../../ui/Button";
import CreateCabinForm from "../../features/cabins/CreateCabinForm";
import Modal from "../../ui/Modal";

function AddCabin() {
  return (
    <div>
      <Modal>
        <Modal.Open opensWindowName="cabin-form">
          <Button>Add new cabin</Button>
        </Modal.Open>
        <Modal.Window windowName="cabin-form">
          <CreateCabinForm />
        </Modal.Window>
      </Modal>
    </div>
  );
}

export default AddCabin;
