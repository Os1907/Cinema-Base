const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMjk4ZDg4NTVkNDBkNTY4MjBlNDA1ZDY3MjkxZTEzZCIsInN1YiI6IjY1YzI1MDNhOGU4ZDMwMDE2Mjc4MjIxOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mSNy7xFnu7Uu5mqfDRbocxJ2Gtsc7aBZIfrgxcxT0do'
    }
}
    export const myKey = process.env.NEXT_PUBLIC_API_KEY;

export async function getToken() {

    try {
      const response = await fetch(`https://api.themoviedb.org/3/authentication/token/new?api_key=${myKey}`);
      const data = await response.json();
      
      return data;
    } catch (err) {
      console.error(err);
    }
  }
  
  
  
  
  export async function getUserInfo(SessionID:string | null) {
    try {
      const response = await fetch(`https://api.themoviedb.org/3/account?api_key=${myKey}&session_id=${SessionID}`);
      const data = await response.json();
      
      return data;
    } catch (err) {
      console.error(err);
    }
  }

 export async function getUserFav(SessionID:string | null) {
    try {
      const response = await fetch(`https://api.themoviedb.org/3/account/20971868/favorite/movies?language=en-US&page=1&api_key=${myKey}&session_id=68cd6c0e1555a7fc9777dba5c8b916e09b487557`);
      const data = await response.json();
      
      return data;
    } catch (err) {
      console.error(err);
    }
  }


   
//   https://api.themoviedb.org/3/account/20971868/favorite/movies?language=en-US&page=1&api_key=${myKey}&session_id=68cd6c0e1555a7fc9777dba5c8b916e09b487557
  
  
  /*
  
  {"media_type":"movie","media_id": 566525,"favorite": true}
  
  
  
  
  
  
  
  
  
  */