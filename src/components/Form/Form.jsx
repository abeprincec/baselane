import React from 'react';
import { FormLabel, Input, FormControl } from '@chakra-ui/react';
function Form(props) {
  return (
    <>
      <FormControl id="name">
        <FormLabel fontSize="sm" fontWeight="normal">
          Full Name
        </FormLabel>
        <Input border="2px" type="text" />
      </FormControl>
      <FormControl pt="4" id="email">
        <FormLabel fontSize="sm" fontWeight="normal">
          Email
        </FormLabel>
        <Input border="2px" type="email" />
      </FormControl>
      <FormControl pt="4" id="phone">
        <FormLabel fontSize="sm" fontWeight="normal">
          Phone
        </FormLabel>
        <Input border="2px" type="text" />
      </FormControl>
    </>
  );
}

export default Form;
