import Accordion from 'react-bootstrap/Accordion';
import ListGroup from 'react-bootstrap/ListGroup';

function PreIntermediateTopics() {
  return (
    <Accordion flush>
      <Accordion.Item eventKey="0">
        <Accordion.Header>
          <h5>Произношение</h5>
        </Accordion.Header>
        <Accordion.Body>
          <ListGroup as="ul" variant="flush" className="text-start">
            <ListGroup.Item as="li"></ListGroup.Item>
            <ListGroup.Item as="li"></ListGroup.Item>
            <ListGroup.Item as="li"></ListGroup.Item>
            <ListGroup.Item as="li"></ListGroup.Item>
            <ListGroup.Item as="li"></ListGroup.Item>
          </ListGroup>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>
          <h5>Грамматика</h5>
        </Accordion.Header>
        <Accordion.Body>
          <ListGroup as="ul" variant="flush" className="text-start">
            <ListGroup.Item as="li"></ListGroup.Item>
            <ListGroup.Item as="li"></ListGroup.Item>
            <ListGroup.Item as="li"></ListGroup.Item>
            <ListGroup.Item as="li"></ListGroup.Item>
            <ListGroup.Item as="li"></ListGroup.Item>
          </ListGroup>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>
          <h5>Аудирование</h5>
        </Accordion.Header>
        <Accordion.Body>
          <ListGroup as="ul" variant="flush" className="text-start">
            <ListGroup.Item as="li"></ListGroup.Item>
            <ListGroup.Item as="li"></ListGroup.Item>
            <ListGroup.Item as="li"></ListGroup.Item>
            <ListGroup.Item as="li"></ListGroup.Item>
            <ListGroup.Item as="li"></ListGroup.Item>
          </ListGroup>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>
          <h5>Лексика</h5>
        </Accordion.Header>
        <Accordion.Body>
          <ListGroup as="ul" variant="flush" className="text-start">
            <ListGroup.Item as="li"></ListGroup.Item>
            <ListGroup.Item as="li"></ListGroup.Item>
            <ListGroup.Item as="li"></ListGroup.Item>
            <ListGroup.Item as="li"></ListGroup.Item>
            <ListGroup.Item as="li"></ListGroup.Item>
          </ListGroup>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>
          <h5>Разговор</h5>
        </Accordion.Header>
        <Accordion.Body>
          <ListGroup as="ul" variant="flush" className="text-start">
            <ListGroup.Item as="li"></ListGroup.Item>
            <ListGroup.Item as="li"></ListGroup.Item>
            <ListGroup.Item as="li"></ListGroup.Item>
            <ListGroup.Item as="li"></ListGroup.Item>
            <ListGroup.Item as="li"></ListGroup.Item>
          </ListGroup>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default PreIntermediateTopics;