export interface user {
  page: number;
  data: [
    {
      id: number;
      email: string;
      first_name: string;
      last_name: string;
      avatar: string;
    }
  ],
  total:number;
}

//este le toca a santi solo colocar LAS PROPIEDADES DEL MODELO DEL BACKEND