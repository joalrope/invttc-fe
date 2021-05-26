import React from 'react';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { displayAddCustomerForm } from '../../actions/display';
import { TextInput } from '../controls/TextInput/TextInput';
import './add-customer.scss';

export const AddCustomerForm = ({ result }) => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: '',
      code: '',
    },
    onSubmit: () => {},
  });

  const onSubmit = () => {
    result({ ok: true, data: formik.values });
    dispatch(displayAddCustomerForm(false));
  };
  return (
    <form>
      <div className='--first-row'>
        <TextInput title={'RIF o Cedula'} name={'code'} onChange={formik.handleChange} value={formik.values.code} />
        <TextInput title={'Nombre'} name={'name'} onChange={formik.handleChange} value={formik.values.name} />
      </div>
      <TextInput title={'Direccion'} name={'address'} onChange={formik.handleChange} value={formik.values.address} />
      <div className='--button-row'>
        <button type='submit' onClick={onSubmit}>
          Aceptar
        </button>
      </div>
    </form>
  );
};
