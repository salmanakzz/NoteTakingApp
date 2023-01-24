import React from "react";
import { NoteForm } from "../../components";

type Props = {};

const NewNote = ({}: Props) => {
  return (
    <>
      <h1 className="mb-4">NewNote</h1>
      <NoteForm />
    </>
  );
};
export default NewNote;
