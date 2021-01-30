import styled from 'styled-components';
import { color } from '../../utils/constant';

export const StyledHeader = styled.div`
    background-color: ${color.white};
`

export const StyledFooter = styled.div`
    background-color: ${color.black};
    color: ${color.white};
    list-style: none;
`

export const Span = styled.span`
    font-size: 15px;
    font-weight: 300;
`

export const Img = styled.img`
    height: 40px;
`

export const ImgSocial = styled.img`
    height: 25px;
`

export const Container = styled.div`
    padding: 20px 50px;
`

export const Divider = styled.div`
    border-top: 0.5px solid ${color.white};
    margin: 10px 0;
`