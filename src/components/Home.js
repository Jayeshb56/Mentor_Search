import React from 'react'
import '../App.css'
import SearchEngine from './searchEngine/SearchEngine';
import { Button } from 'react-bootstrap';

export default function Home() {
  return (
    <div>
      <div class=" card-container">
  <div class="card-header">
  1:1 Long Tearm Mentorship
  </div>
  <div class="card-body">
    <blockquote class="blockquote mb-0">
      <p1><b>Search your New Mentor here</b> </p1>
      
        <SearchEngine />
      {' \n  '}
      
     
      <p2>Find Top Mentor in </p2>
      <Button>Enginnering</Button> &nbsp;
      <Button>Bussiness</Button>&nbsp;
      <Button>Data Science</Button>&nbsp;
      <Button>Finance</Button>
    
    </blockquote>
  </div>
</div>
    </div>
  )
}
