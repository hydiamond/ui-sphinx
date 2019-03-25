import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { StyleSheet, View, Text, TouchableOpacity, TextInput } from 'react-native';
import DatePicker from 'react-native-datepicker';
//Validation
const validate = values => {
    const errors = {};      
    if (!values.username) {
        errors.username = 'Required'
    } else if (values.username.length > 20) {
        errors.username = 'username must be less than or equal 20 characters'
    } 
    if (!values.email) {
        errors.email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
    } 
    if (!values.age) {
        errors.age = 'Required'
    } else if (isNaN(Number(values.age))) {
        errors.age = 'Age must be a number'
    } else if (Number(values.age) < 18) {
        errors.age = 'You must be at least 18 years old'
    }
    return errors
}
const warn = values => {
    const warnings = {};  
    if (values.age < 19) {
        warnings.age = 'You seem a bit young...'
    }  
    return warnings
}
const renderField = ({ label, keyboardType, meta: { touched, error, warning }, input: { onChange, ...restInput }}) => {
    return (<View style={{ flexDirection: 'column', height: 70, alignItems: 'flex-start' }}>
        <View style={{ flexDirection: 'row', height: 50, alignItems: 'center' }}>
            <Text style={{ fontSize: 14, fontWeight: 'bold', width: 80 }}>{label}</Text>
            <TextInput style={{ borderColor: 'steelblue', borderWidth: 1, height: 37, width: 220, padding: 5 }}
                keyboardType={keyboardType} onChangeText={onChange} {...restInput}
            >
            </TextInput>
        </View>
        {touched && ((error && <Text style={{ color: 'red' }}>{error}</Text>) ||
                (warning && <Text style={{ color: 'orange' }}>{warning}</Text>) ||
                (!error && <Text>HuyNgyen</Text>))}
    </View>);
};


const renderPicker = ({input: { onChange, ...restInput }}) => {
    console.log(restInput);
    return(
        <DatePicker
        style={{width: 200}}
        date={restInput.value}
        mode="date"
        placeholder="select date"
        format="YYYY-MM-DD"
        minDate="2000-05-01"
        maxDate="2020-06-01"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0
          },
          dateInput: {
            marginLeft: 36
          }
          // ... You can check the source to find the other keys.
        }}
        onDateChange={onChange}
        {...restInput}
      />
    )
}
const submit = values => {
    alert(`Validation success. Values = ~${JSON.stringify(values)}`);    
}
const ContactComponent = props => {
    const { handleSubmit } = props;
    return (
        <View style={{ flex: 1, flexDirection: 'column', margin: 40, justifyContent: 'flex-start', }}>
            <Field name="username" keyboardType="default" label="Username: " component={renderField} />
            <Field name="email" keyboardType="email-address" label="Email: " component={renderField} />
            <Field name="age" keyboardType="numeric" label="Age: " component={renderField} />
            <Field name="datepicker" label="Date" component={renderPicker} />
            <TouchableOpacity onPress={handleSubmit(submit)} style={{ margin: 10, alignItems: 'center' }}>
                <Text style={{
                    backgroundColor: 'steelblue', color: 'white', fontSize: 16,
                    height: 37, width: 200, textAlign: 'center', padding: 10
                }}>Submit</Text>
            </TouchableOpacity>
        </View>
    );
}
const ContactForm = reduxForm({
    form: 'contact', // a unique identifier for this form    
    validate,                // <--- validation function given to redux-form    
    warn
})(ContactComponent);

export default ContactForm;