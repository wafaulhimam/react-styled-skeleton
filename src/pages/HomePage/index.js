import React from 'react';
import Layout from '../../components/Layout';
import { Row, Col } from 'antd';
import imgLogo from '../../assets/image/movie.png';
import { Img, P } from './styled';

const HomePage = () => {
    return (
        <>
            <Layout
                withHeader={
                <>
                    <Row justify="space-between">
                        <Col span="5"><Img src={imgLogo} alt="Logo" /></Col>
                        <Col span="8"><p>Search</p></Col>
                        <Col span="5"><P>Sign in</P></Col>
                    </Row>
                </>
                }
                withContent="Content"
                withFooter="Footer"
            />
        </>
    )
}

export default HomePage