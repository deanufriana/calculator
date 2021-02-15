import { Col, Row, Breadcrumb, Button } from "antd"
import { Content } from "antd/lib/layout/layout"

const Profiles = () => {
    return (
        <Content style={{ padding: '0 50px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Profiles</Breadcrumb.Item>
            </Breadcrumb>
            <Row gutter={[0, 0]}>
                <Col style={{ marginRight: 20 }}>
                    <img src="https://mysilkyheart.github.io/assets/image/avatar.jpg" alt="Devi Adi Nufriana" width="240px" />
                </Col>
                <Col>
                    <h2> Devi Adi Nufriana </h2>
                    <h3> Software Engineer at Bri Life </h3>
                    <hr />
                    <div>
                        <div> Email : deanheart09@gmail.com </div>
                        <div> Date of Birth : December, 8th, 1995 </div>
                        <br />a technology addict is never
                        tired of stopping
                            learning new things related to technology <br />
                    </div>
                    <br />
                    <Row gutter={[8, 8]} style={{ marginBottom: 10 }}>
                        <Col>
                            <a target="_blank" href="cv.pdf">
                                <Button type="primary">resume</Button>
                            </a>
                        </Col>
                        <Col>
                            <a target="_blank" href="https://www.linkedin.com/in/devi-adi-nufriana-6a174a12a/">
                                <Button type="primary">linkedin</Button>
                            </a>
                        </Col>
                        <Col>
                            <a target="_blank" href="https://github.com/mysilkyheart">
                                <Button type="primary">github</Button>
                            </a>
                        </Col>
                        <Col>
                            <a target="_blank" href="https://www.instagram.com/deanufriana/">
                                <Button type="primary">instagram</Button>
                            </a>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Content>
    )
}

export default Profiles