import React from 'react'
import { Card, Button, CardImg, CardTitle, CardText, CardSubtitle, CardBody } from 'reactstrap'

const DynCard = (props) => {
  return (
    <Card>
      <CardBody>
        <CardTitle>{props.Dtitle}</CardTitle>
        <CardImg top width='100%' src={props.imglink} alt='Movie Poster' />
        <CardSubtitle>{props.subt}</CardSubtitle>
        <CardText>{props.bodytxt}</CardText>
        <Button onClick={(_) => window.location.href = props.link}>Link Btn?</Button>
      </CardBody>
    </Card>
  )
}
export default DynCard
