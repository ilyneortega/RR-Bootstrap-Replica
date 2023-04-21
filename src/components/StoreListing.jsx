import { Container, Row, Col } from "react-bootstrap"
import styled from 'styled-components'

const StyledContainer = styled(Container)`
margin-top: 40px;
text-align: center;
`

const StyledRow = styled(Row)`
border-bottom: 1px solid #e8e9eb;
display: flex;
justify-content: space-evenly;
`

const circleDiv = styled.div`
width: 60px;
height: 60px;

`




export default function StoreListing() {
    return <>
        <StyledContainer>
            <StyledRow>
                <Row>
                    <Col xs=".5" >
                        <circleDiv />
                    </Col>
                    <Col>
                        <h5 style={{ fontWeight: "bold" }}>Aldi</h5>
                        <p>Delivery and Pickup</p>
                    </Col>
                </Row>
                <Col sm="1"></Col>
                <Row>
                    <Col xs=".5" >
                        <circleDiv />
                    </Col>
                    <Col>
                        <h5 style={{ fontWeight: "bold" }}>Scott's Veg</h5>
                        <p>Delivery and Pickup</p>
                    </Col>

                    <Row>
                        <Col xs=".5" >
                            <circleDiv />                    </Col>
                        <Col>
                            <h5 style={{ fontWeight: "bold" }}>Kroger</h5>
                            <p>Delivery and Pickup</p>
                        </Col>
                    </Row>


                </Row>
            </StyledRow>

        </StyledContainer>


    </>
}

