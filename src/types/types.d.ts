export type Student = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  image: string;
  username: string;
  company: {
    name: string;
  };
};

export type StudentsResponse = {
  users: Student[];
  total: number;
  skip: number;
  limit: number;
};

export type StudentNavigationParams = {
  StudentList: undefined;
  StudentDetail: {studentId: number} | undefined;
  SearchStudent: {query: string};
};
