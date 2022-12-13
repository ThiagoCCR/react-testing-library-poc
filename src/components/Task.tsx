import styled from "styled-components";
import { FunctionComponent, useState } from "react";
import UncheckedBoxIcon from "./icons/UncheckedBoxIcon";
import CheckedBoxIcon from "./icons/CheckedBoxIcon";
import DeleteIcon from "./icons/DeleteIcon";

interface TaskProps {
  text: string,
  onDelete: (id:string)=> void
}

interface CheckAndTextContainerProps {
  selected:boolean
}

const Task: FunctionComponent<TaskProps> = ({ text, onDelete }) => {
  const [selected, setSelected] = useState<boolean>(false);

  const handleDelete = () => {
    if (onDelete) {
      onDelete(text);
    }
  };

  const handleClick = () => setSelected((prevState) => !prevState);

  return (
    <Wrapper>
      <CheckAndTextContainer selected={selected} onClick={handleClick}>
        <div>{selected ? <CheckedBoxIcon /> : <UncheckedBoxIcon />}</div>
        {text}
      </CheckAndTextContainer>
      <div onClick={handleDelete} data-testid={`deleteButton_${text}`}>
        <DeleteIcon />
      </div>
    </Wrapper>
  );
}

export default Task;

const Wrapper = styled.div`
  height: 40px;
  width: 100%;
  background-color: #fcf6ea;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 1px 0 1px 0;
  padding: 0 10px 0 10px;
  cursor: pointer;
  :hover {
    opacity: 0.7;
  }
`;

const CheckAndTextContainer = styled.div<CheckAndTextContainerProps>`
  display: flex;
  column-gap: 25px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-size: 15px;
  font-family: "PT Sans Narrow", sans-serif;
  line-height: 100px;
  color: black;
  text-decoration: ${({ selected }) => (selected ? "line-through" : "none")};
  > div {
    padding-top: 10px;
  }
`;
