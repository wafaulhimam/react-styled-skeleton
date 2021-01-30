import React from 'react';
import { Layout as AntLayout } from 'antd';
import { Row, Col } from 'antd';
import imgLogo from '../../assets/image/movie.png';
import imgGplay from '../../assets/image/gplay.png';
import imgApp from '../../assets/image/appstore.png';
import imgPin from '../../assets/image/pin.png';
import imgIg from '../../assets/image/ig.png';
import imgFb from '../../assets/image/fb.png';
import {
    StyledHeader, StyledFooter, Container, Img, ImgSocial, Divider, Span
} from './styled'

const Layout = ({ withHeader, withContent, withFooter  }) => {

    const { Content } = AntLayout;
    const year = new Date().getFullYear();

    return (
        <AntLayout>
            <StyledHeader>{withHeader}</StyledHeader>
            <Content>{withContent}</Content>
            <StyledFooter>
            {withFooter && (
                <Container>
                    <Row justify="start">

                        <Col span="12">
                            <Img src={imgLogo} alt="Logo" />
                            <p>Tulisan Lorem ipsum dolor sit amet</p>
                        </Col>
                        <Col span="5">
                            <li>Tentang Kami</li>
                            <li>Blog</li>
                            <li>Layanan</li>
                            <li>Karir</li>
                            <li>Pusat Media</li>
                        </Col>
                        <Col span="7">
                            Download
                            <Row gutter="8">
                                <Col><ImgSocial src={imgGplay} alt="Google Play" /></Col>
                                <Col><ImgSocial src={imgApp} alt="App Store" /></Col>   
                            </Row>
                            Social Media
                            <Row gutter="8">
                                <Col><ImgSocial src={imgFb} alt="Facebook" /></Col>
                                <Col><ImgSocial src={imgPin} alt="Pinterest" /></Col>
                                <Col><ImgSocial src={imgIg} alt="Instagram" /></Col> 
                            </Row>
                        </Col>
                    </Row>
                    <Divider />
                    <Row justify="center">
                        <Span>Copyright &copy; {year} MilanTV. All Rights Reserved</Span>
                    </Row>
                </Container>
            )}
            </StyledFooter>
        </AntLayout>
    )
}

export default Layout;