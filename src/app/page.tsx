"use client";

import React, { useState, useEffect } from 'react';
import { Stack,Button,Card,CardText } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import MovieCard from "./MovieCard";
import MovieForms from "./MovieForms";
import MovieSlide from "./MovieSlide";
import Image from "next/image";

export default function Home() {
  return (
    <div className="container">
    <div className="row">
      <div className="col-md-6">

            <h1 style={{ fontSize: "24px", color: "green" }}>Home Movie List</h1>
            <h2 style={{fontSize: "20px", color: "black" }}>Audry Oktaviani</h2>
            <h3 style={{ fontSize: "16px", color:"purple" }}>Kelas Pemrograman Web</h3>
            
            <Stack direction="horizontal" gap={2}>
            <Button as="a" variant="primary">
              Button as link
            </Button>
            <Button as="a" variant="success">
              Button as link
            </Button>
          </Stack>
   </div>
</div>

  <div className="row">
  <div className="col-md-8">   
    <br/>
      <MovieForms />
<br/>
<br/>
<MovieSlide />
<br/>
          </div>
      </div>
  <div className='bg-secondary' >
         <MovieCard/>
        </div>
         </div>
  );
}
