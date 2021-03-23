import styled from "styled-components"

export const Container = styled.form`
  h2{ 
    color:var(--text-title);
    font-size:1.5rem;
    margin-bottom:2rem;
  }

  input{ 
    width:100%;
    padding:0 1.5rem;
    height:4rem;
    border-radius:0.25rem;
    border:1px solid #d7d7d7;
    background:#e7e9ee;    
    font-weight:400;
    font-size:1rem;

    &::placeholder{
      color:var(--text-body); 
    }
    &+input{
      margin-top:1rem;
    }
  }

  button[type="submit"]{
    width:100%;
    padding:0 1.5rem;
    height:4rem;
    background:var(--green);
    color:#fff;
    border-radius:0.25rem;
    border:0;
    font-size:1rem;
    margin-top:1.5rem;
    font-weight:600;
    transition:0.2s;
    &:hover{
      filter:brightness(0.6)
    }
  }
`

  export const ControllerTransaction = styled.div`
    display:grid;
    grid-template-columns:1fr 1fr;
    gap:0.5rem;

    button{
      height:4rem;
      border-radius:0.25rem;
      background-color:transparent;
      border:1px solid #d7d7d7;
      display:flex;
      align-items:center;
      justify-content:center;
      transition:0.2s;

      &:hover{
        border-color:#aaa
      }
    }

    img{
      width:20px;
      height:20px;
    }

    span{
      display: inline-block;
      margin-left:1rem;
      font-size:1rem;
      color:var(--text-title)   
    }
  `