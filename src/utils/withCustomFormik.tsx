import React from "react";
// @ts-ignore
import { Formik, Form } from "formik";

const withCustomFormik = (
  initialValues: any,
  validationSchema: any,
  submitForm: any
) => {
  const enhance = (Component: any) => {
    return function WrapperMain(props: any) {
      return (
        <Formik
          initialValues={initialValues(props)}
          onSubmit={(values: any, actions: any) => {
            setTimeout(() => {
              submitForm(values, actions.resetForm, props);
              actions.setSubmitting(false);
            }, 500);
          }}
          validationSchema={validationSchema}
          enableReinitialize
        >
          {({
            values,
            touched,
            errors,
            handleBlur,
            handleChange,
            isSubmitting,
            setFieldValue,
            handleSubmit,
          }: {
            values: any;
            touched: any;
            errors: any;
            handleBlur: any;
            handleChange: any;
            isSubmitting: any;
            setFieldValue: any;
            handleSubmit: any;
          }) => (
            <Form>
              <Component
                values={values}
                touched={touched}
                errors={errors}
                handleBlur={handleBlur}
                handleChange={handleChange}
                isSubmitting={isSubmitting}
                setFieldValue={setFieldValue}
                handleSubmit={handleSubmit}
                materialUiProps={(fieldName: any) => ({
                  name: fieldName,
                  id: fieldName,
                  value: values[fieldName],
                  onChange: (event: any) => {
                    props.handleInputChange(fieldName, event);
                    handleChange(event);
                  },
                  helperText: errors[fieldName],
                  error: errors[fieldName],
                  onBlur: handleBlur,
                })}
                {...props}
              />
            </Form>
          )}
        </Formik>
      );
    };
  };
  return enhance;
};

export default withCustomFormik;
