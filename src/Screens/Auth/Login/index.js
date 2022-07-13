import React, { useState, useContext } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import { Formik } from 'formik';
import * as yup from 'yup';
import { AuthContext } from '../../../context/authContext';
import { styles } from './styles';
import { Input, Button } from '../../../components';
import { WToast } from 'react-native-smart-tip';

// validating form with yup
const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Please provide a vali email')
    .required('Please provide your email'),
  password: yup.string().required('Please provide your password.'),
});

// formik initialValues
const initialValues = {
  email: '',
  password: '',
};

const show = msg => {
  const toastOpts = {
    data: msg,
    textColor: '#ffffff',
    backgroundColor: '#444444',
    duration: WToast.duration.LONG, //1.SHORT 2.LONG
    position: WToast.position.TOP, // 1.TOP 2.CENTER 3.BOTTOM
  };

  WToast.show(toastOpts);
};

const LoginForm = ({ fingerAuth }) => {
  const [showPassword, setShowPassword] = useState(true);
  const { signIn } = useContext(AuthContext);

  const check = ({ email, password }) => {
    if (email === 'test@gmail.com' && password === '12345') {
      // make mutation request, then set token
      signIn('d23nh6890knsaweeee', email);
    } else if (email !== 'test@gmail.com') {
      show('This email does not exist!');
    } else if (password !== '12345') {
      show('Password is incorrect');
    } else {
      show('Check yor login credentials');
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={values => {
        check(values);
      }}>
      {({ values, handleChange, handleSubmit, touched, errors }) => (
        <View style={styles.container}>
          <View style={styles.curve}>
            <Text style={[styles.adventureText, { color: '#000', fontSize: 22 }]}>
              Log in
            </Text>
            <Input
              value={values.email}
              placeholder="Email"
              onChangeText={handleChange('email')}
              errors={errors.email}
              touched={touched.email}
              name={values.email}
            />

            <Input
              placeholder="********"
              secureTextEntry={showPassword}
              value={values.password}
              onChangeText={handleChange('password')}
              errors={errors.password}
              touched={touched.password}
              name={values.password}
              rightIcon={
                <TouchableOpacity
                  onPress={() => setShowPassword(!showPassword)}>
                  <Feather
                    name={showPassword ? 'eye' : 'eye-off'}
                    color="#00000080"
                    size={22}
                  />
                </TouchableOpacity>
              }
            />
            <Button title="Login" onPress={handleSubmit} />
          </View>
        </View>
      )}
    </Formik>
  );
};

export default LoginForm;
