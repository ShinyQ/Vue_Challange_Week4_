<template>
  <div id="app">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-grid-only@1.0.0/bootstrap.css" rel="stylesheet"> 
    
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li style="float:right"><router-link to="/login">Login</router-link></li>
    </ul>

    <router-view/>
  </div>
</template>
<style>
 .button {
   margin:0;
    border: none;
    color: white;
    padding: 10px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    cursor: pointer;
    width: 100%;
    border-radius:5px;  
    position:absolute;                  
    bottom:0;                          
    left:0; 
  }
  .button-detail {background-color: #008CBA;} /* Blue */

  .button:hover{
    text-decoration: none;
  }

</style>

