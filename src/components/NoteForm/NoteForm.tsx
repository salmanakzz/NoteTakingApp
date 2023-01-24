import { FC } from "react";
import { Link } from "react-router-dom";
import { Form, Row, Col, Stack, Button } from "react-bootstrap";
import CreatableReactSelect from "react-select/creatable";

type Props = {};

export const NoteForm: FC = ({}: Props) => {
  return (
    <Form>
      <Stack gap={4}>
        <Row>
          <Col>
            <Form.Group controlId="tittle">
              <Form.Label>Title</Form.Label>
              <Form.Control required />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="tags">
              <Form.Label>Tags</Form.Label>
              <CreatableReactSelect isMulti />
            </Form.Group>
          </Col>
        </Row>
        <Form.Group controlId="markdown">
          <Form.Label>Body</Form.Label>
          <Form.Control required as="textarea" rows={15} />
        </Form.Group>
        <Stack direction="horizontal" className="justify-content-end" gap={2}>
          <Button type="button" variant="primary">
            Save
          </Button>
          <Link to="..">
            <Button type="button" variant="outline-secondary">
              Cancel
            </Button>
          </Link>
        </Stack>
      </Stack>
    </Form>
  );
};
