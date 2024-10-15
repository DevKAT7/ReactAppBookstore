import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
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
    adress: Yup.string()
        .required("Pole adres jest wymagane."),
    city: Yup.string()
        .required("Pole miasto jest wymagane.")
        .test(
            "is-first-letter-uppercase",
            "Miasto powinno zaczynać się wielką literą.",
            value => /^[A-Z]/.test(value)),
    zipCode: Yup.string()
        .required("Kod pocztowy jest wymagany.")
        .matches(/^[0-9]/, "Możesz użyć tylko cyfr [0-9]")
        .matches(/^\d{2}-\d{3}$/, "Kod pocztowy musi mieć format 00-000."),
    acceptTermsAndConditions: Yup.boolean().oneOf([true], "Zaznaczenie pola jest wymagane.")
});

const initialValues = {
    email: "",
    password: "",
    adress: "",
    city: "",
    zipCode: "",
    acceptTermsAndConditions: false
};

const handleOnSubmit = (values) => {
    alert(JSON.stringify(values, null, 2));
};

export const SignUpFormik = () => {
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={formValidationSchema}
            onSubmit={(values) => handleOnSubmit(values)}
        >
            {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
                <FormFormik onSubmit={handleSubmit}>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                name="email"
                                type="email"
                                placeholder="Wprowadź adres email"
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur} />
                            {errors.email && touched.email && <p style={{ color: "red" }}>{errors.email}</p>}
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Hasło</Form.Label>
                            <Form.Control
                                name="password"
                                type="password"
                                placeholder="Utwórz hasło"
                                value={values.password}
                                onChange={handleChange}
                                onBlur={handleBlur} />
                            {errors.password && touched.password && <p style={{ color: "red" }}>{errors.password}</p>}
                        </Form.Group>
                    </Row>

                    <Form.Group className="mb-3" controlId="formGridAddress1">
                        <Form.Label>Adres</Form.Label>
                        <Form.Control
                            name="adress"
                            type="text"
                            placeholder="ul. Aleksandrowska 10"
                            value={values.adress}
                            onChange={handleChange}
                            onBlur={handleBlur} />
                        {errors.adress && touched.adress && <p style={{ color: "red" }}>{errors.adress}</p>}
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formGridAddress2">
                        <Form.Label>Adres cd.</Form.Label>
                        <Form.Control placeholder="m. 2, p. 1" />
                    </Form.Group>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridCity">
                            <Form.Label>Miasto</Form.Label>
                            <Form.Control
                                name="city"
                                type="text"
                                value={values.city}
                                onChange={handleChange}
                                onBlur={handleBlur}/>
                            {errors.city && touched.city && <p style={{ color: "red" }}>{errors.city}</p>}
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>Województwo</Form.Label>
                            <Form.Select defaultValue="Choose...">
                                <option>Wybierz...</option>
                                <option>dolnośląskie</option>
                                <option>kujawsko-pomorskie</option>
                                <option>lubelskie</option>
                                <option>lubuskie</option>
                                <option>łódzkie</option>
                                <option>małopolskie</option>
                                <option>mazowieckie</option>
                                <option>opolskie</option>
                                <option>podkarpackie</option>
                                <option>podlaskie</option>
                                <option>pomorskie</option>
                                <option>śląskie</option>
                                <option>świętokrzyskie</option>
                                <option>warmińsko-mazurskie</option>
                                <option>wielkopolskie</option>
                                <option>zachodniopomorskie</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridZip">
                            <Form.Label>Kod pocztowy</Form.Label>
                            <Form.Control
                                name="zipCode"
                                type="text"
                                value={values.zipCode}
                                onChange={handleChange}
                                onBlur={handleBlur} />
                            {errors.zipCode && touched.zipCode && <p style={{ color: "red" }}>{errors.zipCode}</p>}
                        </Form.Group>
                    </Row>

                    <Form.Group className="mb-3" id="formGridCheckbox">
                        <Field type="checkbox" name="acceptTermsAndConditions" className="form-check-input" />
                        <Form.Label className="form-check-label" style={{marginLeft: "8px"} }> Zgoda na przetwarzanie danych osobowych</Form.Label>
                        {errors.acceptTermsAndConditions && touched.acceptTermsAndConditions && <p style={{ color: "red" }}>{errors.acceptTermsAndConditions}</p>}
                    </Form.Group>

                    <Button type="submit" variant="light" className="buttons">
                        Potwierdź
                    </Button>
                </FormFormik>
            )}
        </Formik>
    );
}