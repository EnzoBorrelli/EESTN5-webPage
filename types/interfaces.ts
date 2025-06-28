export interface iEvent {
    id: string,
    title: string,
    date: string,
    startTime:string
    finishTime:string
}

export interface iTeacher {
  id: string,
  name: string;
  specialization: string;
  asignature: string;
  description: string;
  contact: string;
  image: string;
}

export interface iUser {
    id: string;
    name: string;
    email: string;
    role: string;
    password: string;
}