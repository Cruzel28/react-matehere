
export async function getHavepost () {
    return  fetch(`http://127.0.0.1:3333/api/v1/haveposts`).then(response => response.json())
}
export function getNeedpost () {
    return  fetch(`http://127.0.0.1:3333/api/v1/needposts`).then(response => response.json())
}
export function getHavepostId (id) {
    return fetch(`http://127.0.0.1:3333/api/v1/haveposts/${id}`).then(response => response.json())
}
export function getNeedpostId (id) {
    return  fetch(`http://127.0.0.1:3333/api/v1/needposts/${id}`).then(response => response.json())
}

export function getClientId (id){
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
          username :data , 
          password : data 
    
        })
      }
    return fetch('http://127.0.0.1:3333/api/v1/needposts', requestOptions)
        .then(response => response.json())
    // this shall return Authorization Type Bearer Token

}

export async function register(data){
    const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({     
                username : data,
                password : data,
                first_name :data, 
                last_name : data,
                email :data,
                telephone_number : data,
                line_id :data,
                facebook_name : data,
                gender :data,
                profile_picture :data,
        })
      }
      return fetch('http://127.0.0.1:3333/api/v1/needposts', requestOptions)
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
