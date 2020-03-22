import styled from 'styled-components';
import theme from 'theme/theme';

const Form = styled.form`
    width: 500px;
`;

const Row = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px 0;
`;

const StyledButton = styled.input`
    width: fit-content;
    float: right;
    padding: 10px 15px;
    background-color: ${theme.primaryBlue};
    outline: none;
    border: none;
    border-radius: 5px;
    color: white;
    cursor: pointer;
`;

const StyledInput = styled.input`
    width: 300px;
    height: 38px;
    border-radius: 5px;
    padding: 0 12px;
    box-sizing: border-box;
    border: 1px solid ${theme.primaryGrey};
    font-size: 16px;

    &:focus {
        border: 2px solid ${theme.primaryBlue};
    }
    
`;

export {
    Form,
    Row,
    StyledButton,
    StyledInput
}