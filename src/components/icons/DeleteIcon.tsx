import { IconContext } from "react-icons";
import { IoTrashOutline } from "react-icons/io5";

const DeleteIcon = () => {
  return (
    <>
      <IconContext.Provider
        value={{
          className: "global-class-name",
          size: "22px",
        }}
      >
        <div>
          <IoTrashOutline />
        </div>
      </IconContext.Provider>
    </>
  );
}

export default DeleteIcon
