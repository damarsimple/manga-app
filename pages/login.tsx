import React, { FormEvent } from "react";
import {
  Paper,
  TextField,
  Typography,
  Box,
  Container,
  Button,
} from "@mui/material";
import Link from "next/link";
import { useMutation, gql } from "@apollo/client";
import { Formik } from "formik";
import * as Yup from "yup";

interface LoginValue {
  email: string;
  password: string;
}

export default function Login() {
  const [handle, { loading }] = useMutation(gql`
    mutation Test {
      test
    }
  `);

  const handleSubmit = (e: LoginValue) => {
    console.log(e);
  };

  return (
    <Container>
      <Paper
        sx={{
          mx: 30,
          my: 3,
          p: 4,
          display: "flex",
          gap: 4,
          flexDirection: "column",
        }}
      >
        <Typography fontWeight={"bold"} textAlign={"center"} variant="h5">
          MASUK
        </Typography>

        <Formik<LoginValue>
          validationSchema={Yup.object({
            email: Yup.string().required(),
            password: Yup.string().required(),
          })}
          initialValues={{ email: "", password: "" }}
          onSubmit={handleSubmit}
        >
          {({ values, errors, handleChange, handleBlur, handleSubmit }) => (
            <Box
              component="form"
              sx={{
                display: "flex",
                gap: 1,
                flexDirection: "column",
              }}
              onSubmit={handleSubmit}
            >
              <TextField
                onBlur={handleBlur}
                onChange={handleChange}
                label="Email"
                name="email"
                helperText={errors.email}
                error={!!errors.email}
                value={values.email}
              />
              <TextField
                onBlur={handleBlur}
                onChange={handleChange}
                label="Password"
                name="password"
                helperText={errors.password}
                error={!!errors.password}
                value={values.password}
                type="password"
              />

              <Link href="/forgot">
                <a>
                  <Typography variant="subtitle1" color="grey">
                    Lupa password?
                  </Typography>
                </a>
              </Link>

              <Button variant="contained" type="submit" disabled={loading}>
                MASUK
              </Button>
            </Box>
          )}
        </Formik>

        <Link href="/register">
          <a>
            <Typography textAlign={"center"} variant="subtitle1" color="grey">
              Tidak memiliki akun? daftar
            </Typography>
          </a>
        </Link>
      </Paper>
    </Container>
  );
}
