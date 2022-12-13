import { IconContext } from "react-icons";
import { IoSquareOutline } from "react-icons/io5";

const UncheckedBoxIcon = () => {
  return (
    <>
      <IconContext.Provider
        value={{
          className: "global-class-name",
          size: "22px",
        }}
      >
        <div>
          <IoSquareOutline />
        </div>
      </IconContext.Provider>
    </>
  );
}

export default UncheckedBoxIcon
