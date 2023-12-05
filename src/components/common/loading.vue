<template>
    <div
      id="loading-container"
      class="p-5 d-flex justify-content-center align-items-center"
    >
    <div id="cover-spin"><div class="loader"></div></div>
    </div>
  </template>
  
  <script>
  export default {
    name: "common-loading",
  };
  </script>
  
  <style scoped>
  #loading-container .loading-label {
    margin-left: 1rem;
    font-family: "Roboto_Medium";
    color: #260b19;
    font-size: 18px;
  }
  #cover-spin {
    position: fixed;
    width: 100%;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 9999;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url("/public/favicon.ico");
    background-size: contain; 
    background-repeat: repeat;
  
  }
  .loader {
    border: 2px solid #f5f3ef;
    border-top: 2px solid #741b47;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    animation: spin 2s linear infinite;
  }
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  </style>