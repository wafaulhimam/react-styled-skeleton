import React from 'react';
import { Layout as AntLayout } from 'antd';
import styled from 'styled-components';


const Layout = ({ withHeader, withContent, withFooter  }) => {

    const { Header, Footer, Content } = AntLayout;

    const StyledHeader = styled(AntLayout.Header)`
        && {
            .ant-layout-header {
                background: white;
            }
        }
    `

    return (
        <AntLayout>
            <StyledHeader>{withHeader}</StyledHeader>
            <Content>{withContent}</Content>
            <Footer>{withFooter}</Footer>
        </AntLayout>
    )
}

export default Layout;