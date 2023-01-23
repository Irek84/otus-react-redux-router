import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const RegisterPage = () => {
  return (
    <>
      <Form className="col-6">
        <h2 className="mb-2">Регистрация</h2>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Эл. почта</Form.Label>
          <Form.Control type="email" placeholder="Эл. почта" />
          <Form.Text className="text-muted">
            Мы никогда не передадим вашу электронную почту кому-либо еще.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Имя</Form.Label>
          <Form.Control placeholder="Имя" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Пароль</Form.Label>
          <Form.Control type="password" placeholder="Пароль" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Зарегистрироваться
        </Button>
      </Form>
    </>
  );
};

export default RegisterPage;
