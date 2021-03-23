import {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root{
  --background:#F0F2F5;
  --text-body:#969CB3;
  --textt-title:#363F5F;
  --shape:#FFFFFF;
  --red:#E62E4D;
  --green:#33CC95;
  --blue:#5429CC;
  --blue-light:#6933ff;
}
  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
  }

  html{
      
  }
  
  body{
    background: var(--background);
    -webkit-font-smoonthing:antialiased;//fontes mais nitidas no chrome
  }

  body, input, textarea, button{
    font-family:"Poppins", sans-serif;
    font-weight:400;
  }

  strong,h1,h2,h3,h4,h5{
    font-weight:600;
  } 
  button{
    cursor:pointer;
  }
  [disabled]{
    opacity:0.6;
    cursor:not-allowed;
  }

.react-modal-overlay{
  background: rgba(0,0,0,0.5);

  position:fixed;
  top:0;
  bottom:0;
  left:0;
  right:0;

  display:flex;
  align-items:center;
  justify-content:center;
}

.react-modal-content{
  width:100%;
  max-width:576px;
  background:var(--background);
  padding:3rem;
  position:relative;
 }

 .react-close-modal{
    position:absolute;
    right:1.5rem;
    top:1.5rem;
    border:0;
    background:transparent;
    transition:0.2s;
    &:hover{
      filter:brightness(0.6)
    }
  }
`
