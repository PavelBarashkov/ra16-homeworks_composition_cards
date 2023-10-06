import { Row, Col } from 'react-bootstrap'
import { CardItem, TItem } from '../CardItem/CardItem'

type TList = {
    list: TItem[]
}

export const ListCards = ({list}: TList) => {
  return (
    <Row>
        {list.map(e => (
            <Col>
                <CardItem title={e.title} srcImg={e.srcImg}/>
            </Col>
        ))}

    </Row>
  )
}
