import React from 'react'
import { Container, Image } from "react-bootstrap";

export default function PageNotFound() {
    return (
        <Container>
            <h1>Wooooooopss, page NOT found!</h1>
            <Image
                className="Img"
                src="notFound.jpg"
                rounded
              />
        </Container>
    )
}
