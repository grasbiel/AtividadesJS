var hora = new Date();

hora = hora.getHours();
var res = document.getElementById('res')
var image = document.getElementById('imagem')



function mostraHoras () {
  if (hora >= 0 && hora < 5) {
    res.innerHTML = `Agora são ${hora} horas da madrugada `
    image.src= "https://i2.wp.com/media-cache-ak1.pinimg.com/736x/c8/91/c0/c891c0cae73e694394abefa8a00136ff.jpg"
  }
  
  else if (hora == 5) {
    res.innerHTML = `Agora são ${hora} horas da madrugada`
    image.src= "https://cdn.pixabay.com/photo/2019/02/10/16/44/sky-3987635_960_720.jpg"
  }

  else if (hora >= 6 && hora < 8) {
    res.innerHTML = `Agora são ${hora} horas da madrugada`
    image.src = "https://media-cdn.tripadvisor.com/media/photo-s/0a/ac/0c/04/7-am-early-morning-sky.jpg"
  }

  else if (hora >= 8 && hora < 12) {
    res.innerHTML = `Agora são ${hora} horas da manhã`
    
  }

  else if (hora == 12) {
    res.innerHTML = `Meio dia`
    image.src = "https://image.freepik.com/fotos-gratis/luz-solar-no-fundo-do-ceu-ao-meio-dia_43957-42.jpg"
  }
  else if (hora >= 13 && hora < 18) {
    res.innerHTML = `Agora são ${hora} horas da tarde`
    image.src= "https://s7d2.scene7.com/is/image/TWCNews/img_3688_jpg-2"
  }

  else if (hora >= 18) {
    res.innerHTML = `Agora são ${hora} horas da noite `
    image.src = "https://images.immediate.co.uk/production/volatile/sites/25/2019/05/Light-pollution-090756f.jpg?quality=90&resize=620,413"
  }
  
}
