import { FC, FormEvent, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Form, Row, Col, Stack, Button } from "react-bootstrap";
import CreatableReactSelect from "react-select/creatable";
import { NoteData, Tag } from "../../App";
import { v4 as uuidV4 } from "uuid";

type NoteFormProps = {
  onSubmit: (data: NoteData) => void;
  onAddTag: (tag: Tag) => void;
  availableTags: Tag[];
};

export const NoteForm = ({
  onSubmit,
  onAddTag,
  availableTags,
}: NoteFormProps) => {
  const tilteRef = useRef<HTMLInputElement>(null);
  const markdownRef = useRef<HTMLTextAreaElement>(null);
  const [selectedTags, setSelectedTags] = useState<Tag[]>([]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    onSubmit({
      title: tilteRef.current!.value,
      markdown: markdownRef.current!.value,
      tags: [],
    });
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Stack gap={4}>
        <Row>
          <Col>
            <Form.Group controlId="tittle">
              <Form.Label>Title</Form.Label>
              <Form.Control required ref={tilteRef} />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="tags">
              <Form.Label>Tags</Form.Label>
              <CreatableReactSelect
                onCreateOption={(label) => {
                  const newTaG = {
                    id: uuidV4(),
                    label,
                  };
                  onAddTag(newTaG);
                  setSelectedTags((prev) => [...prev, newTaG]);
                }}
                value={selectedTags.map((tag) => {
                  return {
                    label: tag.label,
                    value: tag.id,
                  };
                })}
                options={availableTags.map((tag) => {
                  return { label: tag.label, value: tag.id };
                })}
                onChange={(tags) => {
                  setSelectedTags(
                    tags.map((tag) => {
                      return { label: tag.label, id: tag.value };
                    })
                  );
                }}
                isMulti
              />
            </Form.Group>
          </Col>
        </Row>
        <Form.Group controlId="markdown">
          <Form.Label>Body</Form.Label>
          <Form.Control required as="textarea" rows={15} ref={markdownRef} />
        </Form.Group>
        <Stack direction="horizontal" className="justify-content-end" gap={2}>
          <Button type="submit" variant="primary">
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
