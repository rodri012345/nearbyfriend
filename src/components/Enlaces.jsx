import React from 'react'

function Enlaces() {
  return (
    <>
    <div style={{padding:'10px', marginTop:'50px'}}>
        <h1>Hacer Amigos</h1>
        <h3 >Alquilar un amigo|Alquilar una amiga</h3>
        <br />
        <p >
        <strong >NearbyFriend </strong> permite a los usuarios pagar para que alguien te acompañe al cine, o que haga de guía local cuando estas de viaje en una ciudad o incluso para que vaya contigo a realizar la compra y así te ayude. Según el amigo que se esté buscando, puedes elegir a una persona o a otra. Todo se basa en que los clientes "paguen" por hacer nuevos amigos. Si eres nuevo en la ciudad o incluso es de esos días que te sientes un poco solo, puedes entrar en la web, buscar y "pagar", según lo que pactes, y alquilar un amigo en <strong >NearbyFriend </strong>. Lo ideal es que conoscas nueva gente y hagas amigos . Es fácil, ¿te atreves a probarlo?
        
        </p>
        <span role="img" aria-label="smiley">👪</span>
    </div>
    <div style={{ display:'flex',justifyContent:'space-around', marginBottom:'50px', marginTop:'20px'}}>
      <img src="https://th.bing.com/th/id/R.2d64f9cef1f8cab04cc3cc06a59b268f?rik=sKs4ZbYt953TUg&riu=http%3a%2f%2fcdn-api.skim.gs%2fimages%2fview%2fid%3a53739cf5d1befda8ea00001d&ehk=Uokc9qbiQeWYqZEOJ5iPCSCAQXhOTjosVfIYxbhwYU4%3d&risl=&pid=ImgRaw&r=0" alt="imagen de amigos"
      width={350} height={250} 
      style={{border:'2px solid #EEEEEE', borderRadius:'10px'}}/>
      <img src="https://almancaportali.com/wp-content/uploads/2023/03/ezgif-4-3e132610af-1-870x570.webp" alt="imagen de deporte con amigos" 
      width={350} height={250} 
      style={{border:'2px solid #EEEEEE', borderRadius:'10px'}}/>
      <img src="https://escueladelamemoria.com/wp-content/uploads/2018/06/Estudiar-con-amigos.jpg" alt="imagen de reunion con amigos"
      width={350} height={250} 
      style={{border:'2px solid #EEEEEE', borderRadius:'10px'}}/>
      
    </div>
    </>
  )
}
export default Enlaces
