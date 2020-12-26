import React from "react";
import Link from "next/link";
import DropdowDOwnButton from "../../components/dropdown-button";
import Layout from "../../components/layout";
const Note = ({ note }) => {
  return (
    <Layout title="Note Detail Page">
      <div>
        <ul>
          <li>
            <Link as="/" href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link as="/notes" href="/notes">
              <a>Notes</a>
            </Link>
          </li>
          <li>
            <Link as="/about" href="/about">
              <a>About</a>
            </Link>
          </li>
        </ul>
        This is a note : {note}
        <div className="note-container">
          <DropdowDOwnButton />
        </div>
      </div>
    </Layout>
  );
};

export default Note;
