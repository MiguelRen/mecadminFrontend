<script>
import InputFormBox from '../components/InputFormBox.vue';
import { ref } from 'vue';



</script>

<template>
    <!--the whole container-->
   <div class="principalContainer ">


    <div class="formBox">
        <div class="imag">
            
        </div>
        <div class="form">
            <div class="dataSpace">
                <div class="branding">
                    <img class="logo" src="@/assets/logo.svg" alt="">
                    <h1 class=" companyTitle">Benny Companny</h1>
                </div>
                <div class="inputData">
                    <h2>Ingresa en tu cuenta</h2>
                    <input  class="userInput" type="text" placeholder="Usuario o Email"/>
                    <input  class="userInput" type="password" placeholder="Contraseña"/>
                    <button >Ingresar</button>
                </div>
                <div class="userStuffs">
                    <a href=""> Registrarse</a>
                    <a href="">Se te olvidó la contraseña?</a>
                </div>

            </div>
        </div>
    </div>


   </div>

</template>

<style>
.principalContainer{
    background:linear-gradient(to bottom right, #2281bb,#36ADD5 ) ;
    
    height: 100vh;
    width: 100vw ;
    display: flex;
    justify-content: center;
    align-items: center;
    max-height: 100vh;
    max-width: 100vw;

}
.formBox{
    display: flex;
    
    height: 85%;
    width: 75%;
    border-radius: 30px ;
    overflow: hidden;
    border: none;
    box-shadow: 8px 8px 16px 0px   #017FBC;
}
.imag{
    background-image: url(@/assets/motorPicture.jpg);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 100%;
    width: 100%;
    max-width:  50%;
}
.form{
    width: 100%;
    background-color: white;
    padding: 20px;
    
    display: flex;
    justify-content: center;
    align-items: center;
    
}
.dataSpace{
    height: 80%;
    width:80%; 
    display: flex;
    flex-direction:column;
    align-items: start;

    justify-content: space-between;
}
.logo{
    display: inline;
    height: 10vh;
    width: 6vh;
}
.companyTitle{
    display: block;
    margin-left: 30px;
    font-weight: 500;
    font-style: bold;
   
    
}
.branding{
    display:flex;
    align-items: center;
 
    
}
.inputData{
  
    font-family: "Karla", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
  gap: 5%;

}
h2{
    display:inline;
}
.userInput{
    color:black;
    background-color: white;
    border-radius: 5px;
    border-color: rgb(133, 133, 133);
    height: 40%;
    width: 100%;
    margin: 5px 5px  10px 0px;
}
button{
    color: white;
    background-color: black;
    width: 60% ;
}
.userStuffs{
    margin-top:10px;
    height: auto;
    display:block;
    justify-content: start;
    margin-top: 10%;
    display: flex;
    flex-direction: column;
    align-items: start;
}
a:link,a:visited, a:active{
   
    display:block;
    text-decoration: none;
}
</style>