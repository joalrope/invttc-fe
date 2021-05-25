import React from 'react';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { displayAddCustomerForm } from '../../actions/display';

export const AddCustomerForm = ({ result }) => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: '',
    },
    onSubmit: () => {},
  });

  const onSubmit = () => {
    result({ ok: true, data: formik.values });
    dispatch(displayAddCustomerForm(false));
  };
  return (
    <form>
      <h2>AGREGAR FORMULARIO</h2>
      <div className='--customer-name__container'>
        <label htmlFor='name'>Nombre</label>
        <input id='name' name='name' type='name' onChange={formik.handleChange} value={formik.values.name} />
      </div>
      <button type='submit' onClick={onSubmit}>
        Aceptar
      </button>
    </form>
  );
};
