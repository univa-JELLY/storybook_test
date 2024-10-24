import { css, styled } from "@mui/material";

type RadioButtonProps = {
  selected: boolean;
  disabled?: boolean;
  onClick?: () => void;
  children?: React.ReactNode;
};

const StyledRadioButton = styled("div")<RadioButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 5px 16px;
  border-radius: 6px;
  font-size: 14px;
  cursor: pointer;
  position: relative;
  border: 1px solid #dee0e2;
  transition: all 0.2s ease-in-out;
  ::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 6px;
    background-color: #49454f;
    opacity: 0;
    pointer-events: none; /* Ensure ::after does not block pointer events */
  }
  ${(props) =>
    props.disabled
      ? css`
          cursor: initial;
          color: #737c81;
          ::after {
            opacity: 0.12;
          }
        `
      : props.selected === true
      ? css`
          border-color: #5533f2;
          color: #5533f2;
          background-color: #eeebfe;
          :hover {
            box-shadow: 0px 1px 3px 1px #00000026, 0px 1px 2px 0px #0000004d;
            ::after {
              opacity: 0.08;
            }
          }
          :focus {
            ::after {
              opacity: 0.12;
            }
          }
          :active {
            box-shadow: 0px 1px 3px 1px #00000026, 0px 1px 2px 0px #0000004d;
            ::after {
              opacity: 0.12;
            }
          }
        `
      : css`
          color: #565656;
          :hover {
            ::after {
              opacity: 0.08;
            }
          }
          :focus {
            ::after {
              opacity: 0.12;
            }
          }
          :active {
            ::after {
              opacity: 0.12;
            }
          }
        `}
`;

export default function RadioButton({
  children,
  selected,
  disabled,
  onClick,
}: RadioButtonProps) {
  return (
    <StyledRadioButton
      selected={selected}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </StyledRadioButton>
  );
}
