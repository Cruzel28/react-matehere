
export async function getHavepost (page) {
    return  fetch(`http://127.0.0.1:3333/api/v1/haveposts/?page=${page}`).then(response => response.json())
}
export function getNeedpost (page) {
    return  fetch(`http://127.0.0.1:3333/api/v1/needposts/?page=${page}`).then(response => response.json())
}
export async function getHavepostId (id) {
    return fetch(`http://127.0.0.1:3333/api/v1/haveposts/${id}`).then(response => response.json())
}
export async function getNeedpostId (id) {
    return  fetch(`http://127.0.0.1:3333/api/v1/needposts/${id}`).then(response => response.json())
}

export async function getClientId (id){
    return  fetch(`http://127.0.0.1:3333/api/v1/clients/${id}`).then(response => response.json())
}

export async function storeHavepost(data,id,tokenId) {
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${tokenId}`
      },
      body: JSON.stringify({  
            need_university_name : data,
            type_room : data,
            full_cost : data,
            half_cost : data,
            amount_of_mate :data ,
            location :data,
            faculty:data,
            faculty_mate :data,
            habit : data,
            habit_mate :data,
            routine :data,
            like_thing: data,
            dislike : data,
            other_information : data,
            status_post : data,
            client_id : id,
            parking : data,
            lift : data,
            keycard: data,
            security : data,
            pool :  data,
            gym :  data,
            luandry : data,  
            air_conditioner :  data,      
            number_of_toilet :  data,    
            number_of_bedroom :  data,   
            pets : data,    
            smoking :  data,    
            internet_wifi : data,       
            furniture :  data,      
            water_heater : data,
            cover_img_url :data
      })
    }
    return fetch('http://127.0.0.1:3333/api/v1/haveposts', requestOptions).then(response => response.json())
}

export async function storeNeedpost(data,id,tokenUser) {
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${tokenUser}`
      },
      body: JSON.stringify({  
        need_university_name :data, 
        need_type : data, 
        need_full_cost : data, 
        need_half_cost : data, 
        need_amount_of_mate :data, 
        need_location : data, 
        need_faculty : data, 
        need_faculty_mate : data, 
        need_habit : data, 
        need_habit_mate : data, 
        need_routine : data, 
        need_like_thing : data, 
        need_dislike : data, 
        need_other_information : data, 
        status_post : data, 
        client_id : id, 
        parking :  data, 
        lift : data, 
        keycard : data, 
        security : data, 
        pool : data, 
        gym : data, 
        luandry :data, 
        air_conditioner : data, 
        number_of_toilet : data, 
        number_of_bedroom : data, 
        pets : data, 
        smoking : data, 
        internet_wifi : data, 
        furniture : data, 
        water_heater : data, 
        cover_img_url: data, 
      })
    }
    return fetch('http://127.0.0.1:3333/api/v1/needposts', requestOptions)
      .then(response => response.json())
}
export async function  login(data) {
    const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({  
          username :data.username , 
          password : data.password 
    
        })
      }
    return fetch('http://127.0.0.1:3333/api/v1/needposts', requestOptions)
        .then(response => response.json())
    // this shall return Authorization Type Bearer Token

}

export async function register(data,img){
    const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({     
                username : data.username,
                password : data.password,
                first_name :data.first_name, 
                last_name : data.last_name,
                email :data.email,
                telephone_number : data.telephone_number,
                line_id :data.line_id,
                facebook_name : data.facebook_name ,
                gender :data.gender,
                profile_picture :img,
        })
      }
    return fetch('http://127.0.0.1:3333/api/v1/registers', requestOptions)
        .then(response => response.json())
}

export async function storeImg(data) {
  const formData = new FormData();
  formData.append('image',data)
  const requestOptions = {
    method: 'POST',
    body: formData
  }
  return fetch('http://127.0.0.1:3333/api/v1/assets', requestOptions).then(response => response.json())
}
