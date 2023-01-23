import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const LoginPage = () => {

  return (
    <>
      <h2 className="mb-2">Войти</h2>
      <Form className="col-6">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Эл. почта</Form.Label>
          <Form.Control type="email" placeholder="Эл. почта" />
          <Form.Text className="text-muted">
            Мы никогда не передадим вашу электронную почту кому-либо еще.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Пароль</Form.Label>
          <Form.Control type="password" placeholder="Пароль" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Запомнить меня" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Войти
        </Button>
      </Form>
    </>
  );
};

export default LoginPage;
