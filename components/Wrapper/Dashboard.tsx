import React, { ReactNode, useState } from "react";
import NavbarAdmin from "../Navbar/NavbarAdmin";
import { renderOn } from "../../modules/rules";
import { useRouter } from "next/router";
import { useUserStore } from "../../stores/user";
import { Container, Paper, Typography, Box, TextField, Button } from "@mui/material";
import { Formik } from "formik";
import Link from "next/link";
import * as Yup from "yup";

interface LoginValue {
  email: string;
  password: string;
}

export default function Dashboard({ children }: { children: ReactNode }) {
  const { pathname } = useRouter();
  const { user, login } = useUserStore();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (data: LoginValue) => {

    setLoading(true);
    setError('');
    try {
      await login(data.email, data.password);
      setLoading(false)
    } catch (error) {
      setError(`${error}`)
      setLoading(false)
    }

  }

  if (renderOn.some((r) => r.test(pathname))) {

    if (!user) {
      return <>
        <Box>
          <Box sx={{
            display: "flex",
            alignItems: "content",
            justifyContent: "center",
            minHeight: "100vh"
          }}>
            <Paper
              sx={{
                mx: 30,
                my: 3,
                p: 4,
                display: "flex",
                gap: 4,
                flexDirection: "column",
                width: {
                  xs: 300,
                  sm: 600,
                },
                height: {
                  xs: 300,
                  sm: 600,
                }
              }}
            >
              <Typography fontWeight={"bold"} textAlign={"center"} variant="h5">
                MASUK
              </Typography>
              <Typography textAlign={"center"} variant="body2">
                {error}
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

          </Box>
        </Box>
      </>
    }

    if (user?.isAdmin) {
      return <NavbarAdmin>{children}</NavbarAdmin>;
    } else {
      return <>Unauthorized ...</>
    }


  }

  return <>{children}</>;
}
