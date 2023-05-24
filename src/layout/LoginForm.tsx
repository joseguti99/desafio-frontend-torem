import Field from '../components/Home/Field';
import React, { useState } from 'react';
import FormData from 'form-data';
import Link from 'next/link';
import { LoginData, tokenData } from '../types/login';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import useAuth from '../hooks/useAuth';
import { useRouter } from 'next/dist/client/router';
import { apiGetUser } from '../api/users';
import { getStorage } from '../cache';

function LoginForm() {
  const initialValues: LoginData = { email: '', password: '' };
  const token: tokenData = getStorage('token') || { authToken: "" }
  const data = new FormData();
  const router = useRouter()
  const [formData, setFormData] = useState<LoginData>(initialValues);
  const { user, authenticate } = useAuth()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const resetForm = () => {
    setFormData(initialValues)
  };

  const handleLogin = async () => {
    data.append('email', formData.email);
    data.append('password', formData.password);

    if (formData.email.length && formData.password.length) {
      await authenticate({ email: formData.email, password: formData.password })
    }
  };


  return (
    <div
      id="login"
      className="right-side d-flex flex-column justify-content-center w-50 bg-chatter-green h-100 py-5 fs-1 fw-bold"
    >

      <Field
        title="E-MAIL"
        type="email"
        name="email"
        placeholder="Ingresa tu correo electrónico"
        onChange={handleInputChange}
      />

      <Field
        title="CONTRASEÑA"
        type="password"
        name="password"
        placeholder="Ingresa tu contraseña"
        onChange={handleInputChange}
      />

      <div className="content d-flex flex-column mb-5 d-flex align-items-start" data-aos="fade">
        <button type="submit" className="btn btn-primary" onClick={handleLogin}>
          Ingresar
        </button>
      </div>

      <div className="content text d-flex flex-row gap-2 mb-5 fs-6 fst-italic" data-aos="fade">
        <span>No tienes una cuenta?</span>
        <Link href="/register" className="text-chatter-blue">
          Registrate aquí
        </Link>
      </div>
    </div>
  );
}

export default LoginForm;
