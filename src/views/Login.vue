<script>
</script>

<template>
    <!--the whole container-->
   <div class="principalContainer ">


    <div class="formBox">
        <div class="imag">
            
        </div>
        <div class="form">
            <p>Lorem ipsum dolor amet consectetur adipisicing elit. Nemo quibusdam illo in repudiandae ducimus eos sed maxime cum unde culpa ipsam dolores quod quia consequuntur quisquam omnis quos, quam assumenda?</p>
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
    max-width: 75%;
    background-color: white;
}

</style>