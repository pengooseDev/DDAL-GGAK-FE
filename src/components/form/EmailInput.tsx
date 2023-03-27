import { ReactHookInputDataProps } from 'types/';
import styled from 'styled-components';

export default function EmailInput({ data }: ReactHookInputDataProps) {
  const { type, register, errorMessage } = data;

  return (
    <Input
      errorId={!!errorMessage}
      {...register('email', {
        required: 'is required',
        validate: {
          hasAlpha: (value: string) => {
            const hasAlpha = !!value.match(/[a-zA-Z]/g);

            return hasAlpha ? true : 'must be include alpha';
          },
          isEmail: (value: string) => {
            const isEmail = !!value.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g);

            return isEmail ? true : 'Is not Email Form';
          },
        },
      })}
      type="text"
      placeholder={type}
    />
  );
}

const Input = styled.input<{ errorId: boolean }>`
  padding: 15px;
  font-size: 18px;
  margin-bottom: 10px;
  border: none;
  font-weight: 600;
  border: solid 2px ${({ theme }) => theme.loginDisable};
  border-radius: 5px;
  ${(props) =>
    props.errorId ? props.theme.pointColor : 'rgba(133,133,133,0.5)'};
  transition: ${({ theme }) => theme.transitionOption};
  color: ${({ theme }) => theme.color};
  background: transparent;
  :focus {
    outline: none;
    border: solid 2px ${({ theme }) => theme.pointColor};
  }
`;
