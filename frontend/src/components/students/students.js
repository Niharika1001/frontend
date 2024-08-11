import React, { useState } from 'react';
import axios from 'axios';
import { api } from "../actions/api";
import { useEffect } from 'react';
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
  } from '@chakra-ui/react'
export const   StudentsData=()=>{
    const [data,setData]=useState([])
    const fetchdata=async()=>{
        await axios.post(api+"/studentsdata")
        .then((res)=>{
            setData(res?.data)
        })
        .catch((e)=>console.log(e))
    }

    useEffect(()=>{
        fetchdata()
    })
    return(
<TableContainer>
  <Table variant='striped' colorScheme='teal'>
    <TableCaption>Imperial to metric conversion factors</TableCaption>
    <Thead>
      <Tr>
        <Th>To convert</Th>
        <Th>into</Th>
        <Th isNumeric>multiply by</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td>inches</Td>
        <Td>millimetres (mm)</Td>
        <Td isNumeric>25.4</Td>
      </Tr>
      <Tr>
        <Td>feet</Td>
        <Td>centimetres (cm)</Td>
        <Td isNumeric>30.48</Td>
      </Tr>
      <Tr>
        <Td>yards</Td>
        <Td>metres (m)</Td>
        <Td isNumeric>0.91444</Td>
      </Tr>
    </Tbody>

     
  </Table>
</TableContainer>
)}