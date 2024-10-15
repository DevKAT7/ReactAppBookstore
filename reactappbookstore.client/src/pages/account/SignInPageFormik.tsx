import Button from 'react-bootstrap/Button';
import { Formik, Form as FormFormik, Field } from 'formik';
import * as Yup from 'yup';
import { Form } from 'react-bootstrap';

const formValidationSchema = Yup.object().shape({
    email: Yup.string()
        .required("Pole email jest wymagane.")
        .email("Niepoprawny format email."),
    password: Yup.string().required("Podanie hasła jest wymagane.")
        .min(8, "Hasło jest za krótkie - powinno zawierać min. 8 znaków."),
    robotCheck: Yup.boolean().oneOf([true], "Zaznaczenie pola jest wymagane.")
});

const initialValues = {
    email: "",
    password: "",
    robotCheck: false
};

const handleOnSubmit = (values) => {
    alert(JSON.stringify(values, null, 2));
};

export const SignInFormik = () => {
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={formValidationSchema}
            onSubmit={(values) => handleOnSubmit(values)}
        >
            {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
                <FormFormik onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            name="email"
                            type="email"
                            placeholder="Wprowadź email"
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        <Form.Text className="text-muted">
                            Twój adres email będzie chroniony
                        </Form.Text>
                        {errors.email && touched.email && <p style={{ color: "red" }}>{errors.email}</p>}
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Hasło</Form.Label>
                        <Form.Control
                            name="password"
                            type="password"
                            placeholder="Hasło"
                            value={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {errors.password && touched.password && <p style={{ color: "red" }}>{errors.password}</p>}
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Field type="checkbox" name="robotCheck" className="form-check-input" />
                        <Form.Label className="form-check-label" style={{ marginLeft: "8px" }}> Nie jestem robotem</Form.Label>
                        {errors.robotCheck && touched.robotCheck && <p style={{ color: "red" }}>{errors.robotCheck}</p>}
                    </Form.Group>
                    <Button type="submit" variant="light" className="buttons">
                        Zaloguj
                    </Button>
                </FormFormik>
            )}
        </Formik>
    );
}
