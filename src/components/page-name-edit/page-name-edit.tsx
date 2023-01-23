import React, { useState } from "react";
import { Button, Col, Form, InputGroup } from "react-bootstrap";

import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { selectPageName, setPageName } from "./page-name-slice";

const PageNameEdit = () => {
  const pageName = useAppSelector(selectPageName);
  const dispatch = useAppDispatch();
  const [name, setName] = useState(pageName);

  return (
    <Col md="4" className="mt-3">
      <InputGroup>
        <Form.Control
          placeholder="Введите название страницы"
          aria-label="Recipient's username"
          aria-describedby="basic-update"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Button
          variant="outline-secondary"
          id="button-update"
          onClick={() => dispatch(setPageName(name))}
        >
          Изменить название страницы
        </Button>
      </InputGroup>
    </Col>
  );
}
 export default PageNameEdit;